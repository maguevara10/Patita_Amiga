import React from "react";

function PaginaPrincipal() {
    return (<div class="mainBody" onLoad={window['alcargar']}>
        <div id="slider">
            <div class="slide">
                <img src="imagenes/refugio1.jpg" />
            </div>

            <div class="slide">
                <img src="imagenes/refugio2.jpg" />
            </div>

            <div class="slide">
                <img src="imagenes/refugio3.jpg" />
            </div>

            <div class="slide">
                <img src="imagenes/refugio4.jpg" />
            </div>

            {/* <!--Controlling arrows--> */}
            <span class="controls" onClick={window['prevSlide']} id="left-arrow"><i class="fa fa-arrow-left" aria-hidden="true"></i>
            </span>
            <span class="controls" id="right-arrow" onClick={window['nextSlide']}><i class="fa fa-arrow-right" aria-hidden="true"></i>
            </span>

            <div id="dots-con">
                <span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div class="contenedor">
            <section id="mainInfo">
                {/* <!-- Perro 1 --> */}
                <div class="bigbox borderbox" id="perro1">
                    <div class="relativo">
                        <img class="img-fluid w-100" src="imagenes/perrito1.png" />
                        <div class="overlay">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nam vel repellat harum sapiente consectetur maiores, veniam non, facilis est beatae dicta accusantium similique odio ducimus quaerat, quia soluta amet?
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 class="font-weight-bold">Panchito</h2>
                    </div>
                </div>
                {/* <!-- Perro 2 -->  */}
                <div class="bigbox borderbox" id="perro2">
                    <div class="relativo">
                        <img class="img-fluid w-100" src="imagenes/perrito2.png" />
                        <div class="overlay">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nam vel repellat harum sapiente consectetur maiores, veniam non, facilis est beatae dicta accusantium similique odio ducimus quaerat, quia soluta amet?
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 class="font-weight-bold">Firulais</h2>
                    </div>
                </div>
                {/* <!-- Perro 3 -->  */}
                <div class="bigbox borderbox" id="perro3">
                    <div class="relativo">
                        <img class="img-fluid w-100" src="imagenes/perrito3.png" />
                        <div class="overlay">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nam vel repellat harum sapiente consectetur maiores, veniam non, facilis est beatae dicta accusantium similique odio ducimus quaerat, quia soluta amet?
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 class="font-weight-bold">Bethoven</h2>
                    </div>
                </div>
                {/* <!-- Perro 4 -->  */}
                <div class="bigbox borderbox" id="perro4">
                    <div class="relativo">
                        <img class="img-fluid w-100" src="imagenes/perrito5.png" />
                        <div class="overlay">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nam vel repellat harum sapiente consectetur maiores, veniam non, facilis est beatae dicta accusantium similique odio ducimus quaerat, quia soluta amet?
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 class="font-weight-bold">Franks</h2>
                    </div>
                </div>
                {/* <!-- Perro 5 -->  */}
                <div class="bigbox borderbox" id="perro5">
                    <div class="relativo">
                        <img class="img-fluid w-100" src="imagenes/perrito4.png" />
                        <div class="overlay">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nam vel repellat harum sapiente consectetur maiores, veniam non, facilis est beatae dicta accusantium similique odio ducimus quaerat, quia soluta amet?
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 class="font-weight-bold">Maya</h2>
                    </div>
                </div>
                {/* <!-- Perro 6 -->  */}
                <div class="bigbox borderbox" id="perro6">
                    <div class="relativo">
                        <img class="img-fluid w-100" src="imagenes/perroGrande.jpg" />
                        <div class="overlay">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nam vel repellat harum sapiente consectetur maiores, veniam non, facilis est beatae dicta accusantium similique odio ducimus quaerat, quia soluta amet?
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 class="font-weight-bold">Perrin</h2>
                    </div>
                </div>
            </section>

        </div>
        <br />
        <br />
    </div >
    );
}

export default PaginaPrincipal;