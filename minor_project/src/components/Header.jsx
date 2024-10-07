import { useNavigate } from "react-router-dom";
import logo from "../assets/images/needstationLogo.png";
import { handleSuccess, handleError } from "../routes/utils";
import { useContext } from "react";
import { LoginContext } from "../store/loginStore";
import styles from './Header.module.css';
import { ToastContainer } from "react-toastify";

const Header = ({ handleLogout }) => {
  const navigate = useNavigate();
  const { loggedInUserDetail } = useContext(LoginContext);

  const handleUserLogout = () => {
    handleError('Logged out successfully!');
    handleLogout();
    navigate('/home');
  };

  return (<>
    
    <header className={`p-3 ${styles["header"]}`}  style={{backgroundColor: "rgb(255,236,157)", textDecorationColor: "black"}}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="#"
            className={`d-flex align-items-center mb-2 mb-lg-0 text-black text-decoration-none ${styles["navLink"]}`}
            onClick={() => { navigate("/home"); }}
          >
            <img src={logo} alt="Logo" width="150" height="40" className="me-2" />
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className={`nav-link px-2 ${styles["navLink"]}`} onClick={() => { navigate("/home"); }}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={`nav-link px-2 ${styles["navLink"]}`}>Services</a>
            </li>
            <li>
              <a href="#" className={`nav-link px-2 ${styles["navLink"]}`}>Pricing</a>
            </li>
            <li>
              <a href="#" className={`nav-link px-2 ${styles["navLink"]}`}>FAQs</a>
            </li>
            <li>
              <a href="#" className={`nav-link px-2 ${styles["navLink"]}`}>About</a>
            </li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input
              type="search"
              className="form-control form-control-dark text-bg-light"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          {!loggedInUserDetail.loggedInState ? (
            <div className="text-end">
              <button type="button" className={`btn btn-outline-dark me-2 ${styles["btnOutlineDark"]}`} onClick={() => { navigate("/login"); }}>
                Login
              </button>
              <button type="button" className={`btn btn-warning ${styles["btnWarning"]}`} onClick={() => { navigate("/signup"); }}>
                Sign-up
              </button>
            </div>
          ) : (
            <div className="text-end">
              <span style={{ marginRight: "15px", fontWeight: "500" }}>Hello, {loggedInUserDetail.loggedInUserName}</span>
              <button type="button" className="btn btn-outline-dark me-2" onClick={handleUserLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
    <ToastContainer autoClose={1000} pauseOnHover={false}/>
    </>
  );
};

export default Header;
