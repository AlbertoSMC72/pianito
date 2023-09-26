import React from "react";
import Teclado from "../organismos/teclado.jsx";
import Navbar from "../organismos/navbar.jsx";
import SonidosAtl from "../celulas/sonidosAtl";


import "../css/main.css";

function PaginaPrincipal(params) {
  return (
    <div className="pagina">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Teclado />
        <div className="altSounds">
        <SonidosAtl />
        <SonidosAtl />
        <SonidosAtl />
        <SonidosAtl />
        <SonidosAtl />
        </div>
      </main>
    </div>
  );
}

export default PaginaPrincipal;
