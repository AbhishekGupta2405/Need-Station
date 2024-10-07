import { useState, useContext } from "react";
import { handleError, handleSuccess } from "../routes/utils";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../store/loginStore";
import styles from "./Login.module.css";
import { ToastContainer } from 'react-toastify';  

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { setLoggedInUserDetail } = useContext(LoginContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      handleError("Email and password are required");
      return;
    }

    try {
      const url = "http://localhost:8080/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();

      const { success, message, jwtToken, loggedInUser, error } = result;
      if (success) {
        console.log(message);
        handleSuccess(message);
        let { username } = loggedInUser;
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", username);

        
        setLoggedInUserDetail({
          token: jwtToken,
          loggedInUserName: username,
          loggedInState: true,
        });

        setTimeout(() => {
          navigate("/home");
        }, 500);
      } else if (error) {
        handleError(error.details[0]?.message);
        
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError(err.message);
    }
  };

  return (
    <>
      <div
        className="modal modal-sheet position-static d-block p-4 py-md-5"
        tabIndex="-1"
        role="dialog"
        id="modalSignin"
        style={{
          height: "80vh",
          background:
            "linear-gradient(to right, rgb(247,245,232), rgb(255,236,157))", 
        }}
      >
        <div className="modal-dialog" role="document">
          <div className={`modal-content rounded-4 shadow ${styles["modalContent"]}`}>
            <div className={`modal-header p-5 pb-4 border-bottom-0 ${styles["modalHeader"]}`}>
              <h1 className="fw-bold mb-0 fs-2">Login to your account</h1>
              <Link to="/home">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  style={{ marginLeft: "40px", marginBottom: "20px" }}
                ></button>
              </Link>
            </div>
            <div className="modal-body p-5 pt-0">
              <form className="" onSubmit={handleLoginSubmit}>
                <div className={`form-floating mb-3 ${styles["formFloatingInput"]}`}>
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    name="email"
                    onChange={handleChange}
                    value={loginInfo.email}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    name="password"
                    onChange={handleChange}
                    value={loginInfo.password}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button
                  className={`w-100 mb-2 btn btn-lg rounded-3 btn-primary ${styles["btnPrimary"]}`}
                  type="submit"
                >
                  Login
                </button>
                <small
                  className="text-body-secondary"
                  style={{ marginRight: "10px" }}
                >
                  Don't have an account?
                </small>
                <Link to="/signup">Sign up here</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer autoClose={1000} pauseOnHover={false}/> */}
    </>
  );
};

export default Login;
