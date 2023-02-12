import React from 'react';

function QuienesSomos() {
    return (
        <div>
            <br />

            <div class="general">

                <table id="bordeGeneral" >

                    <tr>
                        <td align="center">
                            <div >
                                <figure>
                                    <img class="popeye" src="imagenes/Logoless_Mesa de trabajo 1.png" alt="Logo Página" />
                                </figure>
                            </div>
                        </td>

                        <td align="center">

                            <div class="contenedorSomos">
                                <h1>¿Quiénes somos? </h1>
                                <p class="elTexto">
                                    La empresa Patita Amiga, se fundó y legalizó en Quito el 19 de noviembre de 2022 ante el Ministerio de
                                    Inclusión Social y Económica bajo la figura original de asociación como una entidad apolítica, arreligiosa,
                                    con personería jurídica, de derecho privado y sin fines de lucro, fundada para la defensa y protección de los
                                    animales. Trabajando de la mano con PAE. Actualmente PAE se encuentra regulada por el Ministerio de Salud
                                    Pública.

                                    <br /><br />

                                </p>
                            </div>

                        </td>

                    </tr>
                </table>
            </div>

            <br />

            <div class="general">

                <div id="bordeGeneral" class="container">
                    <div class="contenedorSomosAdicional">
                        <h3><center>Misión:</center> </h3>
                        <p class="elTextoAdicional">

                            Promovemos la protección y el bienestar de los animales mediante acciones directas y
                            la concienciación de la comunidad en el respeto que merecen y se debe tener hacia las demás especies.
                        </p>
                    </div>
                    <div class="contenedorSomosAdicional">
                        <h3> <center>Visión:</center> </h3>
                        <p class="elTextoAdicional">

                            Ser una organización autosustentable, reconocida como referente nacional en bienestar animal,
                            responsable del cambio en la relación humano – animal en el Ecuador.

                        </p>
                    </div>
                </div>
            </div>

            <br />

            <div class="general">
                <table id="bordeGeneral">
                    <tr>
                        <td align="center">

                            <div class="contenedorSomos">
                                <h2> Junto con PAE</h2>
                                <p class="elTexto">

                                    Desafortunadamente sigue siendo habitual que algunos propietarios que compran un perritos de forma
                                    impulsiva decidan abandonarlo o dejarlo en una protectora de perros cuando se dan cuenta de que
                                    convivir con él implica un compromiso importante que puede superar el tiempo el que pensaban,
                                    pues esto siginifca dedicación, paciencia y reestructuración de tu estilo de vida adquirido.
                                    <br /><br />
                                    Este tipo de personas no suele informarse debidamente del esfuerzo que conlleva educar a un cachorro
                                    al plantearse por qué adoptar un perro.
                                    <br /><br />
                                    Por tal razón hemos creado PATITA AMIGA, como una entidad sin ánimo de lucro, pues cada vez hay más
                                    personas que optan por la adopción cuando deciden adquirir un perro, ya sea a través de ellos, o
                                    mediante la vía de adopción entre particulares (amigos y conocidos principalmente).
                                    <br /><br />
                                    Por tal creemos que unirnos a Pae que es una compañía con objetivos similares a los nuestros es lo
                                    ideal, pues ayudar a animales es nuestra prioridad, y admiramos el labor que realiza PAE en cuanto
                                    al acogimiento y cuidado que realizan,  por lo que aseguramos que creando una página web que expanda
                                    y facilite la cantidad de usuarios que puedan acceder a la adopción ayuden a dar un hogar a los
                                    animalitos y a crecer este tipo de proyectos.
                                    <br /><br />
                                </p>
                            </div>
                        </td>

                        <td align="center">
                            <div >
                                <figure>
                                    <img class="popeye" src="imagenes/pae-logo.png" alt="Logo Página" />
                                </figure>
                            </div>
                        </td>

                    </tr>

                </table>

            </div>

            <br /><br /><br /><br /><br />
            <div class="grideando">
                <div class="contenedorSomosTitulo">
                    <img src="imagenes/Titulo2.png" />
                </div>
            </div>

            <br /><br />

            <section id="mainInfo" >
                {/* Persona 1 */}
                <div class="bigbox borderbox" id="Johan">
                    <div class="relativo">
                        <img class="img-fluid w-100" src="imagenes/imagenJohan.jfif" />
                        <div class="overlay">
                            <p class="elTexto">
                                Hola soy Johan Godoy, tengo 20 años, me gradué en el colegio Montufar, soy bueno para las matemáticas y me
                                desenvuelvo bien al hablar en público, dentro del ámbito de la programación me llama la atención el manejo
                                de datos y toda la información que se puede obtener estudiándolos
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 class="font-weight-bold">Johan Godoy</h2>
                    </div>
                </div>

                {/* Persona 2 */}
                <div class="bigbox borderbox" id="David">
                    <div class="relativo">
                        <img class="img-fluid w-100" src="imagenes/imagenDavid.jfif" />
                        <div class="overlay">
                            <p class="elTexto">
                                Mi nombre es David Guarderas Leal. Tengo 21 años. Soy auxiliar en diseño gráfico y multimedia y aficionado a
                                la ilustración y la animación. Siento gran interés por la computación gráfica y la generación de elementos
                                gráficos por medio de la programación. Soy el encargado de la imagen corporativa de Patita Amiga.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 class="font-weight-bold">David Guarderas</h2>
                    </div>
                </div>

                {/* Persona 3 */}
                <div class="bigbox borderbox" id="Mathias">
                    <div class="relativo">
                        <img class="img-fluid w-100" src="imagenes/imagenMathias.jpg" />
                        <div class="overlay">
                            <p class="elTexto">
                                Mi nombres es Mathias Guevara, tengo 19 años y completé mis estudios secundarios en la Unidad Educativa San Luis
                                Gonzaga. Me gusta la lógica matemática y el proceso de desarrollo de software. Soy pésimo para el desarrollo de
                                interfaces, a pesar de tener experiencia en ello.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 class="font-weight-bold">Mathias Guevara</h2>
                    </div>
                </div>

                {/* Persona 4 */}
                <div class="bigbox borderbox" id="Jhon">
                    <div class="relativo">
                        <img class="img-fluid w-100" src="imagenes/imagenJhon.jfif" />
                        <div class="overlay">
                            <p class="elTexto">
                                Soy Jhon Munarco Santos, tengo 28 años, estudié en el colegio municipal “nueve de octubre” de la ciudad de Quito.
                                No me considero un buen programador, pero es lo que más me gusta hacer dentro del ámbito de esta carrera,
                                me gusta ir lento pero seguro.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 class="font-weight-bold">Jhon Munarco</h2>
                    </div>
                </div>

                {/* Persona 5 */}
                <div class="bigbox borderbox" id="Shared">
                    <div class="relativo">
                        <img class="img-fluid w-100" src="imagenes/imagenShared.jfif" />
                        <div class="overlay">
                            <p class="elTexto">
                                Mi nombre es Shared Tinoco, tengo 20 años, graduada del colego Mariscal Antonio José de Sucre en Quito,
                                soy buena en matemáticas, aprendiendo cosas nuevas y me desenvuelvo en el diseño de cualquier tipo ya
                                que pongo mucha atención en los detalles.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 class="font-weight-bold">Shared Tinoco</h2>
                    </div>
                </div>
            </section>

            <br /><br /><br /><br /><br />
        </div>
    );
}

export default QuienesSomos;