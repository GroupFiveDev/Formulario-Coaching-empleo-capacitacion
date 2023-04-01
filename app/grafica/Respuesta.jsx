const Respuesta = ({amount, category, entrevista6}) => {
    
    if(category === "cv") {
        return(
            <div>
                {
                    amount <= 80 ?
                    <div>
                        <h1>1) Coaching de C.V. creativo y de alto impacto. 3 horas.</h1>
                        <br />
                        <h1>Tienes {amount} puntos de acuerdo al diagnóstico.</h1>
                        <br />
                        <h3>Te puedo enseñar cómo evaluar una vacante de tu interés antes de postularte, cómo adaptar tu C.V.a dicha vacante y cómo redactar una carta depresentación interesante que complemente tu postulación.</h3>
                        <h3>Te enseñaré a redactar tus logros demanera que estén incluidas tus fortalezas y puedas venderte mucho mejor.</h3>
                        <h3>Te servirá la información de tu C.V. para actualizar tu perfil de Linkedin y bolsas en las que estés registrado.</h3>
                        <h3>Incluye: 3revisiones a tu C.V., 2 a tu carta, 1 a tu vacante y 1 a tu perfil de Linkedin.</h3>
                        <br />
                        <h1>Incluye:</h1>
                        <br />
                        <h3>Sesión de 3 horas. Virtual (Google Meet o Jitsi).</h3>
                        <h3>Tres revisiones de tu C.V. (la primera antes de la sesión y dos posteriores).</h3>
                        <h3>Dos revisiones de tu carta.</h3>
                        <h3>Una revisión a tu vacante.</h3>
                        <h3>Una revisión de tu perfil de Linkedin.</h3>
                        <br />
                        <h1>Valor:</h1>
                        <br />
                        <h3>$1,000 M.N.</h3>
                    </div>
                    :
                    <div>
                        <h1>C.V. creativo y de alto impacto.</h1>
                        <h1>Obtuviste 100 puntos ¡Felicidades!, por lo tanto, no hay propuestas para trabajar en este tema.</h1>
                    </div>
                }
            </div>
        )
    }

    if(category === "entrevista") {
        return(
            <div>
                {
                    entrevista6 === "no" ?
                    <div>
                        <h1>1) Coaching de preparación de entrevista laboral. 3 horas.</h1>
                        <br />
                        <h1>Tienes {amount} puntos de acuerdo al diagnóstico.</h1>
                        <br />
                        <h3>Sabrás cómo debes prepararte para una entrevista laboral (antes, durante y después), con la finalidad de aumentar tu confianza frente al reclutador.</h3>
                        <h3>Te daré tips de qué elementos debes cuidar en todo momento: tus lenguajes y tu imagen personal.</h3>
                        <h3>Antes de nuestra sesión, responderás por escrito las 50 preguntas más comunes en una entrevista y elegirás las 10 que te cuesten más trabajo para enfocarnos en ellas.</h3>
                        <h3>Aprenderás cómo contestar de manera adecuada para venderte mejor e incrementar tus posibilidades de ser contratado (a).</h3>
                        <h3>También realizarás tu pitch para presentarte de manera profesional.</h3>
                        <h3>Despejaré cualquier duda que tengas de tus previas experiencias.</h3>
                        <h1>Incluye:</h1>
                        <br />
                        <h3>Sesión de 3 horas. Virtual (Google Meet o Jitsi).</h3>
                        <h3>Formato de autoevaluación de entrevistas.</h3>
                        <h3>Archivo con las 50 preguntas más comunes en una entrevista laboral.</h3>
                        <br />
                        <h1>Valor:</h1>
                        <br />
                        <h3>$1,000 M.N.</h3>
                    </div>
                    :
                    amount <= 60 ?
                    <div>
                        <h1>1) Coaching de preparación de entrevista laboral. 3 horas.</h1>
                        <br />
                        <h1>Tienes {amount} puntos de acuerdo al diagnóstico.</h1>
                        <br />
                        <h3>Sabrás cómo debes prepararte para una entrevista laboral (antes, durante y después), con la finalidad de aumentar tu confianza frente al reclutador.</h3>
                        <h3>Te daré tips de qué elementos debes cuidar en todo momento: tus lenguajes y tu imagen personal.</h3>
                        <h3>Antes de nuestra sesión, responderás por escrito las 50 preguntas más comunes en una entrevista y elegirás las 10 que te cuesten más trabajo para enfocarnos en ellas.</h3>
                        <h3>Aprenderás cómo contestar de manera adecuada para venderte mejor e incrementar tus posibilidades de ser contratado (a).</h3>
                        <h3>También realizarás tu pitch para presentarte de manera profesional.</h3>
                        <h3>Despejaré cualquier duda que tengas de tus previas experiencias.</h3>
                        <h1>Incluye:</h1>
                        <br />
                        <h3>Sesión de 3 horas. Virtual (Google Meet o Jitsi).</h3>
                        <h3>Formato de autoevaluación de entrevistas.</h3>
                        <h3>Archivo con las 50 preguntas más comunes en una entrevista laboral.</h3>
                        <br />
                        <h1>Valor:</h1>
                        <br />
                        <h3>$1,000 M.N.</h3>
                    </div>
                    :
                    amount = 80 ?
                    <div>
                        <br />
                        <h1>2) Coaching de simulación de entrevista laboral. 1.5 horas.</h1>
                        <br />
                        <h1>Tienes {amount} puntos de acuerdo al diagnóstico.</h1>
                        <br />
                        <h3>Haremos una simulación de entrevista, por lo tanto, debes estar vestido(a) como si fuera una entrevista laboral real (aún sea virtual).</h3>
                        <h3>Te daré retroalimentación de: tus respuestas, tu imagen (de acuerdo a tu perfil), lenguajes (verbal, no verbal y paraverbal), tu pitch de presentación, errores, etc.</h3>
                        <h3>Puede estar enfocada a una vacante, empresa y/o persona de tu interés.</h3>
                        <h1>Incluye:</h1>
                        <br />
                        <h3>Sesión de hora y media Virtual (Google Meet o Jitsi) : 45 minutos de simulación y 45 minutos de retroalimentación.</h3>
                        <h3>Prepararé una entrevista semiestructurada laboral por valores y competencias enfocada a la vacante y/o empresa para llevar a cabo la simulación contigo en el idioma que elijas (1. 5 horas).</h3>
                        <br />
                        <h1>Valor:</h1>
                        <br />
                        <h3>Español $600 M.N.</h3>
                        <h3>Inglés $700 M.N.</h3>
                        <h3>Bilingüe $800 M.N.</h3>
                    </div>    
                    :
                    <div>
                        <h1>Coaching de simulación de entrevista laboral.</h1>
                        <h1>Obtuviste 100 puntos ¡Felicidades!, por lo tanto, no hay propuestas para trabajar en este tema.</h1>
                    </div>
                }
            </div>
        )
    }

    if(category === "empleo") {
        return(
            <div>
                {
                    amount <= 80 ?
                    <div>
                        <h1>1) Coaching de C.V. creativo y de alto impacto. 3 horas.</h1>
                        <br />
                        <h1>Tienes {amount} puntos de acuerdo al diagnóstico.</h1>
                        <br />
                        <h3>Te puedo enseñar cómo evaluar una vacante de tu interés antes de postularte, cómo adaptar tu C.V.a dicha vacante y cómo redactar una carta depresentación interesante que complemente tu postulación.</h3>
                        <h3>Te enseñaré a redactar tus logros demanera que estén incluidas tus fortalezas y puedas venderte mucho mejor.</h3>
                        <h3>Te servirá la información de tu C.V. para actualizar tu perfil de Linkedin y bolsas en las que estés registrado.</h3>
                        <h3>Incluye: 3revisiones a tu C.V., 2 a tu carta, 1 a tu vacante y 1 a tu perfil de Linkedin.</h3>
                    </div>
                    :
                    <div>
                        <h1>C.V. creativo</h1>
                        <h1>Obtuviste 100 puntos ¡Felicidades!, por lo tanto, no hay propuestas para trabajar en este tema.</h1>
                    </div>
                }
            </div>
        )
    }
    
    if(category === "linkedin") {
        return(
            <div>
                {
                    amount <= 80 ?
                    <div>
                        <h1>1) Coaching de C.V. creativo y de alto impacto. 3 horas.</h1>
                        <br />
                        <h1>Tienes {amount} puntos de acuerdo al diagnóstico.</h1>
                        <br />
                        <h3>Te puedo enseñar cómo evaluar una vacante de tu interés antes de postularte, cómo adaptar tu C.V.a dicha vacante y cómo redactar una carta depresentación interesante que complemente tu postulación.</h3>
                        <h3>Te enseñaré a redactar tus logros demanera que estén incluidas tus fortalezas y puedas venderte mucho mejor.</h3>
                        <h3>Te servirá la información de tu C.V. para actualizar tu perfil de Linkedin y bolsas en las que estés registrado.</h3>
                        <h3>Incluye: 3revisiones a tu C.V., 2 a tu carta, 1 a tu vacante y 1 a tu perfil de Linkedin.</h3>
                    </div>
                    :
                    <div>
                        <h1>C.V. creativo</h1>
                        <h1>Obtuviste 100 puntos ¡Felicidades!, por lo tanto, no hay propuestas para trabajar en este tema.</h1>
                    </div>
                }
            </div>
        )
    }
    
    if(category === "objetivos") {
        return(
            <div>
                {
                    amount <= 80 ?
                    <div>
                        <h1>1) Coaching de C.V. creativo y de alto impacto. 3 horas.</h1>
                        <br />
                        <h1>Tienes {amount} puntos de acuerdo al diagnóstico.</h1>
                        <br />
                        <h3>Te puedo enseñar cómo evaluar una vacante de tu interés antes de postularte, cómo adaptar tu C.V.a dicha vacante y cómo redactar una carta depresentación interesante que complemente tu postulación.</h3>
                        <h3>Te enseñaré a redactar tus logros demanera que estén incluidas tus fortalezas y puedas venderte mucho mejor.</h3>
                        <h3>Te servirá la información de tu C.V. para actualizar tu perfil de Linkedin y bolsas en las que estés registrado.</h3>
                        <h3>Incluye: 3revisiones a tu C.V., 2 a tu carta, 1 a tu vacante y 1 a tu perfil de Linkedin.</h3>
                    </div>
                    :
                    <div>
                        <h1>C.V. creativo</h1>
                        <h1>Obtuviste 100 puntos ¡Felicidades!, por lo tanto, no hay propuestas para trabajar en este tema.</h1>
                    </div>
                }
            </div>
        )
    }

}
    
    
export default Respuesta;