import React, { useRef } from "react";
import { Howl } from "howler";
import "../css/teclaGrande.css";

const soundPath = "http://127.0.0.1:8080/peiw.mp3";

function Tecla({ colores, notaTecla }) {
    const soundRef = useRef(null);
    const reproducirSonido = () => {
        if (soundRef.current) {
            soundRef.current.stop();
        }
        const sound = new Howl({
            src: [soundPath],
        });
        sound.play();
        soundRef.current = sound;
    };

    const buttonStyle = {
        backgroundColor: colores || "linear-gradient(to bottom, #ffffff, #dddddd)",
    };

    return (
        <div className="teclaGrande" >
            <button style={buttonStyle}  className="buttonGrande" onClick={reproducirSonido}> {notaTecla} </button>
            
        </div>
    );
}

export default Tecla;
