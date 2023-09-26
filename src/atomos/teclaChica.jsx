import React, { useRef } from 'react'; // Importa useRef de React
import { Howl } from "howler";
import '../css/teclaChica.css';

const soundPath = "http://127.0.0.1:8080/bonm.mp3";

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
        <div className="tecla">
            <button className='buttonChico' onClick={reproducirSonido}></button>
        </div>
    )
}

export default Tecla; 
