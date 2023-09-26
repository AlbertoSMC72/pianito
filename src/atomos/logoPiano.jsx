import React from "react";
import logo from "../img/xd.jpg"
import "../css/logoNav.css"
function LogoApp(params) {
    return(
        <div>
            <img src={logo} alt="aqui deveria estar el logo XD" className="imgLogo" />
        </div>
    );
    
}
export default LogoApp;