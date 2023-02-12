import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function IniciarSesion() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');

    const enviar = () => {
        Axios.post('http://localhost:3001/api/insert',
            {
                nombre: nombre,
                apellido: apellido,
                contrasenia: contrasenia,
                correo: correo,
                telefono: telefono
            }).then(() => {
                alert("Se logró mijo");
            });
    };

    return (
        <div>
            <br />
            <br />
            <br />
            <br />

            <section>

                <table id="tablaFormulario" align="center">
                    <tr>
                        <td>
                            <form>
                                <fieldset>
                                    <legend><em>¿Quieres ser parte de nuestro equipo?</em></legend>
                                    <table >
                                        <tr>
                                            <td><label for="nombre">Nombre</label>
                                                <input type="text" class="inputFormulario" id="nombre" name="nombre" onChange={(e) => {
                                                    setNombre(e.target.value)
                                                }} />
                                            </td>
                                            <td>
                                                <label for="apellido">Apellido</label>
                                                <input type="text" class="inputFormulario" id="apellido" name="apellido" onChange={(e) => {
                                                    setApellido(e.target.value)
                                                }} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label for="correo">Correo</label>
                                                <input type="email" class="inputFormulario" id="correo" name="correo" onChange={(e) => {
                                                    setCorreo(e.target.value)
                                                }} />
                                            </td>
                                            <td>
                                                <label for="teléfono">Teléfono</label>
                                                <input type="tel" class="inputFormulario" id="telefono" name="telefono" onChange={(e) => {
                                                    setTelefono(e.target.value)
                                                }} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="contraseña">Contraseña</label>
                                                <input type="password" class="inputFormulario" id="contraseña" name="contraseña" onChange={(e) => {
                                                    setContrasenia(e.target.value)
                                                }} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" align="center">
                                                <nav>
                                                    <input href="#" type="submit" value="Registrarse" id="botonInput" name="submit" onClick={enviar} />
                                                </nav>
                                            </td>
                                        </tr>
                                    </table>
                                </fieldset>
                            </form>
                        </td>
                    </tr>
                    <br />
                    <br />
                </table>
            </section>
            <br />
        </div>
    );
}

export default IniciarSesion;