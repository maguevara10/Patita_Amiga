import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div class="piePagina">
                    <div>
                        <div>
                            <figure>
                                <img src="imagenes/footer/ubícateW.png" alt="imgUbicación" />
                            </figure>
                        </div>
                        <div class="textoFooter">
                            Antonio de Ulloa
                            <br />
                            N34–85 y Rumipamba
                        </div>
                    </div>
                    <div>
                        <div>
                            <figure>
                                <img src="imagenes/footer/SocrecitoW.png" alt="imgCorreo" />
                            </figure>
                        </div>
                        <div class="textoFooter">
                            webgroup006@gmail.com
                        </div>
                    </div>
                    <div>
                        <div>
                            <figure>
                                <img src="imagenes/footer/CelW.png" alt="imgCelu" />
                            </figure>
                        </div>
                        <div class="textoFooter">
                            (+593) 2-3319-522
                        </div>
                    </div>
                    <div>
                        <div>
                            <ul>
                                <a href="https://web.whatsapp.com/" class="ulre" target="_blank"><li class="wapp">Whatsapp</li></a>
                                <a href="https://www.instagram.com/" class="ulre" target="_blank"><li class="inst">Instagram</li></a>
                                <a href="https://www.facebook.com/" class="ulre" target="_blank"><li class="face">Facebook</li></a>
                            </ul>
                        </div>
                    </div>
                </div>
                <p>
                    Patita Amiga® |Desarrollado por: WebGroup6|
                    <br />
                    Todos los derechos reservados.
                </p>
            </footer>
        );
    }
}

export default Footer;