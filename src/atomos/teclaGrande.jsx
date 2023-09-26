import React, { useRef } from "react";
import { Howl } from "howler";
import "../css/teclaGrande.css";

const soundPath = "http://127.0.0.1:8080/peiw.mp3";

function Tecla(params) {
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

    return (
        <div className="teclaGrande">
            <button className="buttonGrande" onClick={reproducirSonido}></button>
        </div>
    );
}

export default Tecla;
