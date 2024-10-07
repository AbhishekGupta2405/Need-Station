import { useState } from "react";
import { handleError, handleSuccess } from "../routes/utils";
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';  // Import Toastify styles
import { Link, useNavigate } from "react-router-dom";
import styles from './Signup.module.css';

const Signup = () => {

  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target; 
    setSignupInfo({
      ...signupInfo, 
      [name]: value 
    });
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    const {name, email, password} = signupInfo;
    if(!name || !email || !password){
      handleError('Name, email, and password are required');
      return; 
    }
    // handleSuccess('Signup successful!');

    try{
      const url = "http://localhost:8080/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(signupInfo)
      });
      const result = await response.json();
      const { success, message, error } = result;
      if(success){
        handleSuccess(message);
        setTimeout(()=>{
          navigate('/login')
        }, 1000)
      } else if(error){
        const details = error?.details[0].message;
        handleError(details); 
      } else if(!success){
        handleError(message);
      }
      console.log(result);
    } catch (err) {
      handleError(err);
    }

  }

  return (
    <>
      
      <ToastContainer />

      <div
        className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5"
        tabIndex="-1"
        role="dialog"
        id="modalSignin"
        style={{ height: '90vh', background:
          "linear-gradient(to right, rgb(247,245,232), rgb(255,236,157))"}}
      >
        <div className="modal-dialog" role="document">
          <div className= {`modal-content rounded-4 shadow ${styles["modalContent"]}`}>
            <div className={`modal-header p-5 pb-4 border-bottom-0 ${styles["modalHeader"]}`}>
              <h1 className="fw-bold mb-0 fs-2">Sign up</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => { navigate("/home"); }}
              ></button>
            </div>

            <div className="modal-body p-5 pt-0">
              <form className="" onSubmit={handleSignup}>
                <div className={`form-floating mb-3 ${styles["formFloatingInput"]}`}>
                  <input
                    type="text" 
                    className="form-control rounded-3"
                    id="floatingName"
                    placeholder="Your Name"
                    name="name" 
                    onChange={handleChange}
                    value={signupInfo.name}
                  />
                  <label htmlFor="floatingName">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control rounded-3"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="email"
                    onChange={handleChange}
                    value={signupInfo.email}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-3"
                    id="floatingPassword"
                    placeholder="Password"
                    name="password" 
                    onChange={handleChange}
                    value={signupInfo.password}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button
                  className={`w-100 mb-2 btn btn-lg rounded-3 btn-primary ${styles["btnPrimary"]}`}
                  type="submit"
                >
                  Sign up
                </button>
                <small className="text-body-secondary">
                  By clicking Sign up, you agree to the terms of use.
                </small>
                <br />
                <span>Already have an account?
                  <Link to="/login"  style={{marginLeft: "10px"}}>Login</Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
