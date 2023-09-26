import React from "react";
import TeclaGrande from "../atomos/teclaGrande.jsx";
import TeclaChica from "../atomos/teclaChica.jsx";
import "../css/teclado.css";

function teclado(params) {
    return (
        <div className="teclado">
                <TeclaGrande />
                <TeclaChica />
                <TeclaGrande />
                <TeclaChica />
                <TeclaGrande />
                <TeclaGrande />
                <TeclaChica />
                <TeclaGrande />
                <TeclaChica />
                <TeclaGrande />
                <TeclaChica />
                <TeclaGrande />
                
        </div>
    );
}
export default teclado;