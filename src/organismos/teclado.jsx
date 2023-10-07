import React from "react";
import TeclaGrande from "../atomos/teclaGrande.jsx";
import TeclaChica from "../atomos/teclaChica.jsx";
import "../css/teclado.css";

function teclado(params) {
    return (
        <div className="teclado">
                <TeclaGrande colores="blue" notaTecla={"A"}/>
                <TeclaChica />
                <TeclaGrande/>
                <TeclaChica />
                <TeclaGrande />
                <TeclaGrande  colores="green" notaTecla={"B"}/>
                <TeclaChica />
                <TeclaGrande  colores="red" notaTecla={"C"}/>
                <TeclaChica />
                <TeclaGrande />
                <TeclaChica />
                <TeclaGrande  colores="yellow" notaTecla={"D"}/>
                
        </div>
    );
}
export default teclado;