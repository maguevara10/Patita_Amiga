import React from 'react';
import "./Popup.css";
import { useState, useEffect } from 'react';

function Popup(props) {
    const [correo, setCorreo] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    return (props.trigger) ? (
        <div className='popup'>
            <div className='inner-popup'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
                {props.children}
                <div className='mainPopup'>
                    <div className='contenidoPopup grid'>
                        <h1>Iniciar Sesión</h1>
                        <div className='formulario'>
                            <label for="correo">Correo: </label>
                            <input type="text" class="inputFormulario" id="nombre" name="nombre" onChange={(e) => {
                                setCorreo(e.target.value)
                            }} />
                            <label for="contraseña">Contraseña:</label>
                            <input type="password" class="inputFormulario" id="contraseña" name="contraseña" onChange={(e) => {
                                setContrasenia(e.target.value)
                            }} />
                        </div>
                        <p>¿No tienes una cuenta? ¡Crea una <a href='IniciarSesion'>aquí</a>!</p>
                    </div>
                    <div className='imagen'>
                        <img class="img-fluid w-100" src="imagenes/perrito2.png" />
                    </div>
                </div>
            </div>

        </div>
    ) : "";
}

export default Popup;