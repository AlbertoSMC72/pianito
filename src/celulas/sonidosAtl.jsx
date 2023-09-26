import React from "react";
import Altimg from "../atomos/imgMusica";
import "../css/cardImgName.css"
import NombreAlt from "../atomos/nombreAtl";
function SonidosAtl(params) {
    return (
        <div className="cardImg">
            <Altimg />
            <NombreAlt />
        </div>
    );
}

export default SonidosAtl;
