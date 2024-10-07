import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import MainCarousel from "./components/MainCarousel";
import "./App.css";
import Cards from "./components/Cards";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { LoginContext } from "./store/loginStore"; 
import 'react-toastify/dist/ReactToastify.css';  

function App() {
  const [loggedInUserDetail, setLoggedInUserDetail] = useState({
    token: "",
    loggedInUserName: "",
    loggedInState: null
  });

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    const token = localStorage.getItem('token');
    if (user && token) {
      setLoggedInUserDetail({
        token,
        loggedInUserName: user,
        loggedInState: true
      });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    setLoggedInUserDetail({
      token: "",
      loggedInUserName: "",
      loggedInState: false
    });
  };

  return (
    <>
      <LoginContext.Provider value={{ loggedInUserDetail, setLoggedInUserDetail }}>
        <Header handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<><MainCarousel /><Cards /><Review /></>} />
        </Routes>
      </LoginContext.Provider>
      <Footer />
      
     
      {/* <ToastContainer autoClose={1000} pauseOnHover={false} /> */}
    </>
  );
}

export default App;
