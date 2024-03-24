import React from "react";
// import { Header } from "../components/Header.jsx";
import { useLocation, useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";
import login from "../images/login.jpg";
import "./login.css";

export default function Login() {
   const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate(location?.state?.from?.pathname);
  };
    return(
       
       
         <div class="main-container">

          <div className="login-image">
            <img src={login} width="90%"/>
          </div>
          <div>
       <h1>LOGIN HERE</h1>
       <label>
        <input type="text" placeholder="Enter username" className="username"/>
        <br/>
        <input type="text" placeholder="Enter password" className="password"/>
       </label>
       <br/>
           <button onClick={handleLogin}>LOGIN</button>

   </div>
     </div>



     
        
    )
}