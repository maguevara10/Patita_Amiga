import React from 'react';

function Contactanos() {
    return (
        <div>
            <br />
            <div class="divsig">
                <table id="siguenos">
                    <tr>
                        <td colspan="2">
                            <h1>SÍGUENOS</h1>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <hr class="divis" />
                            <br />
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <figure>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <img src="imagenes/FbW.png" alt="facebook" class="redes" />
                                </a>
                            </figure>
                        </td>
                        <td align="left">
                            <figure>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <img src="imagenes/instW.png" alt="instagram" class="redes" />
                                </a>
                            </figure>
                        </td>
                    </tr>
                </table>
                <section id="secc">
                    <fieldset id="cuentanos">
                        <legend><h1>CUÉNTANOS</h1></legend>
                        <form>
                            <table>
                                <tr>
                                    <td>
                                        <input type="name" class="escrib" placeholder="Nombre" />
                                    </td>
                                    <td>
                                        <input type="email" class="escrib" placeholder="Correo" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <input type="text" class="asunto" placeholder="Asunto" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <input type="text" class="mensaje" placeholder="Escribe tu mensaje..." />
                                    </td>
                                </tr>
                            </table>
                            <input type="submit" id="envio" />
                        </form>
                    </fieldset>
                </section>
            </div>
            <br /><br />
        </div>
    );
}

export default Contactanos;