import React from "react";
import "../css/navBar.css";
import LogoApp from "../atomos/logoPiano";
import NombrePiano from "../atomos/nombrePiano";

function Navbar(params) {
    return (
        <div className="navbar">
            <div className="logo-container">
                <LogoApp />
                
            </div>
            <NombrePiano />
        </div>


    );
}

export default Navbar;
