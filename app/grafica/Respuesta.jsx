'use client'

const Respuesta = ({amount, category, entrevista6}) => {
    
    if(category === "cv") {
        return(
            <div>
                {
                    amount && amount <= 80 ?
                    <div className="bg-white border-2 shadow-md shadow-black border-black rounded-xl my-10 mx-20 p-5 flex flex-col items-center font-bold hover:bg-pink-200">
                        <h1 className="text-2xl text-red-600">1) Coaching de C.V. creativo y de alto impacto. 3 horas.</h1>
                        <br />
                        <h1 className="text-lg text-blue-800">Tienes {amount -1} puntos de acuerdo al diagnóstico.</h1>
                        <br />
                        <h3>-Te puedo enseñar cómo evaluar una vacante de tu interés antes de postularte, cómo adaptar tu C.V.a dicha vacante y cómo redactar una carta depresentación interesante que complemente tu postulación.</h3>
                        <h3>-Te enseñaré a redactar tus logros demanera que estén incluidas tus fortalezas y puedas venderte mucho mejor.</h3>
                        <h3>-Te servirá la información de tu C.V. para actualizar tu perfil de Linkedin y bolsas en las que estés registrado.</h3>
                        <br />
                        <h1 className="text-lg text-blue-800">Incluye:</h1>
                        <br />
                        <h3>-Sesión de 3 horas. Virtual (Google Meet o Jitsi).</h3>
                        <h3>-Tres revisiones de tu C.V. (la primera antes de la sesión y dos posteriores).</h3>
                        <h3>-Dos revisiones de tu carta.</h3>
                        <h3>-Una revisión a tu vacante.</h3>
                        <h3>-Una revisión de tu perfil de Linkedin.</h3>
                        <br />
                        <h1 className="text-lg text-blue-800">Valor:</h1>
                        <br />
                        <h3>-$1,000 M.N.</h3>
                    </div>
                    :
                    <div className="bg-white border-2 shadow-md shadow-black border-black rounded-xl my-10 mx-20 p-5 flex flex-col items-center font-bold hover:bg-pink-200">
                        <h1 className="text-2xl text-red-600">C.V. creativo y de alto impacto.</h1>
                        <h1 className="text-lg text-blue-800">Obtuviste 100 puntos ¡Felicidades!, por lo tanto, no hay propuestas para trabajar en este tema.</h1>
                    </div>
                }
            </div>
        )
    }

    if(category === "entrevista") {
        return(
            <div>
                {
                    entrevista6 && entrevista6 === "no" ?
                    <div className="bg-white border-2 shadow-md shadow-black border-black rounded-xl my-10 mx-20 p-5 flex flex-col items-center font-bold hover:bg-orange-200">
                        <h1 className="text-2xl text-red-600">2) Coaching de preparación de entrevista laboral. 3 horas.</h1>
                        <br />
                        <h1 className="text-lg text-blue-800">Tienes {amount -1} puntos de acuerdo al diagnóstico.</h1>
                        <br />
                        <h3>-Sabrás cómo debes prepararte para una entrevista laboral (antes, durante y después), con la finalidad de aumentar tu confianza frente al reclutador.</h3>
                        <h3>-Te daré tips de qué elementos debes cuidar en todo momento: tus lenguajes y tu imagen personal.</h3>
                        <h3>-Antes de nuestra sesión, responderás por escrito las 50 preguntas más comunes en una entrevista y elegirás las 10 que te cuesten más trabajo para enfocarnos en ellas.</h3>
                        <h3>-Aprenderás cómo contestar de manera adecuada para venderte mejor e incrementar tus posibilidades de ser contratado (a).</h3>
                        <h3>-También realizarás tu pitch para presentarte de manera profesional.</h3>
                        <h3>-Despejaré cualquier duda que tengas de tus previas experiencias.</h3>
                        <br />
                        <h1 className="text-lg text-blue-800">Incluye:</h1>
                        <br />
                        <h3>-Sesión de 3 horas. Virtual (Google Meet o Jitsi).</h3>
                        <h3>-Formato de autoevaluación de entrevistas.</h3>
                        <h3>-Archivo con las 50 preguntas más comunes en una entrevista laboral.</h3>
                        <br />
                        <h1 className="text-lg text-blue-800">Valor:</h1>
                        <br />
                        <h3>-$1,000 M.N.</h3>
                    </div>
                    :
                    amount && amount <= 60 ?
                    <div className="bg-white border-2 shadow-md shadow-black border-black rounded-xl my-10 mx-20 p-5 flex flex-col items-center font-bold hover:bg-orange-200">
                        <h1 className="text-2xl text-red-600">2) Coaching de preparación de entrevista laboral. 3 horas.</h1>
                        <br />
                        <h1 className="text-lg text-blue-800">Tienes {amount -1} puntos de acuerdo al diagnóstico.</h1>
                        <br />
                        <h3>-Sabrás cómo debes prepararte para una entrevista laboral (antes, durante y después), con la finalidad de aumentar tu confianza frente al reclutador.</h3>
                        <h3>-Te daré tips de qué elementos debes cuidar en todo momento: tus lenguajes y tu imagen personal.</h3>
                        <h3>-Antes de nuestra sesión, responderás por escrito las 50 preguntas más comunes en una entrevista y elegirás las 10 que te cuesten más trabajo para enfocarnos en ellas.</h3>
                        <h3>-Aprenderás cómo contestar de manera adecuada para venderte mejor e incrementar tus posibilidades de ser contratado (a).</h3>
                        <h3>-También realizarás tu pitch para presentarte de manera profesional.</h3>
                        <h3>-Despejaré cualquier duda que tengas de tus previas experiencias.</h3>
                        <br />
                        <h1 className="text-lg text-blue-800">Incluye:</h1>
                        <br />
                        <h3>Sesión de 3 horas. Virtual (Google Meet o Jitsi).</h3>
                        <h3>-Formato de autoevaluación de entrevistas.</h3>
                        <h3>-Archivo con las 50 preguntas más comunes en una entrevista laboral.</h3>
                        <br />
                        <h1 className="text-lg text-blue-800">Valor:</h1>
                        <br />
                        <h3>-$1,000 M.N.</h3>
                    </div>
                    :
                    (amount && amount) == 80 ?
                    <div className="bg-white border-2 shadow-md shadow-black border-black rounded-xl my-10 mx-20 p-5 flex flex-col items-center font-bold hover:bg-orange-200">
                        <br />
                        <h1 className="text-2xl text-red-600">2) Coaching de simulación de entrevista laboral. 1.5 horas.</h1>
                        <br />
                        <h1 className="text-lg text-blue-800">Tienes {amount -1} puntos de acuerdo al diagnóstico.</h1>
                        <br />
                        <h3>-Haremos una simulación de entrevista, por lo tanto, debes estar vestido(a) como si fuera una entrevista laboral real (aún sea virtual).</h3>
                        <h3>-Te daré retroalimentación de: tus respuestas, tu imagen (de acuerdo a tu perfil), lenguajes (verbal, no verbal y paraverbal), tu pitch de presentación, errores, etc.</h3>
                        <h3>-Puede estar enfocada a una vacante, empresa y/o persona de tu interés.</h3>
                        <br />
                        <h1 className="text-lg text-blue-800">Incluye:</h1>
                        <br />
                        <h3>-Sesión de hora y media Virtual (Google Meet o Jitsi) : 45 minutos de simulación y 45 minutos de retroalimentación.</h3>
                        <h3>-Prepararé una entrevista semiestructurada laboral por valores y competencias enfocada a la vacante y/o empresa para llevar a cabo la simulación contigo en el idioma que elijas (1. 5 horas).</h3>
                        <br />
                        <h1>Valor:</h1>
                        <br />
                        <h3>-Español $600 M.N.</h3>
                        <h3>-Inglés $700 M.N.</h3>
                        <h3>-Bilingüe $800 M.N.</h3>
                    </div>    
                    :
                    <div className="bg-white border-2 shadow-md shadow-black border-black rounded-xl my-10 mx-20 p-5 flex flex-col items-center font-bold hover:bg-orange-200">
                        <h1 className="text-2xl text-red-600">Coaching de simulación de entrevista laboral.</h1>
                        <h1 className="text-lg text-blue-800">Obtuviste 100 puntos ¡Felicidades!, por lo tanto, no hay propuestas para trabajar en este tema.</h1>
                    </div>
                }
            </div>
        )
    }

    if(category === "empleo") {
        return(
            <div>
                {
                    (amount && amount <= 80) ?
                    <div className="bg-white border-2 shadow-md shadow-black border-black rounded-xl my-10 mx-20 p-5 flex flex-col items-center font-bold hover:bg-yellow-200">
                        <h1 className="text-2xl text-red-600">3) Coaching de búsqueda de empleo. 3 horas.</h1>
                        <br />
                        <h1 className="text-lg text-blue-800">Tienes {amount -1} puntos de acuerdo al diagnóstico.</h1>
                        <br />
                        <h3>-Definirás tu empleo ideal actual objetivo (12 variables) y subjetivo para que enfoques tu búsqueda y puedas evaluar cualquier vacante antes de postularte.</h3>
                        <h3>-Conocerás la efectividad de las fuentes de empleo.</h3>
                        <h3>-Llevarás a cabo un plan CON 14 RETOS DIARIOS para poder conseguir el empleo que quieres en el menor tiempo posible aprovechando tu red de contactos.</h3>
                        <h3>-Realizarás un FODA personal con el que descubrirás tus talentos y fortalezas para que los puedas vender en tu C.V. y entrevistas.</h3>
                        <br />
                        <h1 className="text-lg text-blue-800">Incluye:</h1>
                        <br />
                        <h3>-Sesión de tres horas virtuales (Google Meet o Jitsi).</h3>
                        <h3>-Plan de trabajo con 14 retos diarios con retroalimentación.</h3>
                        <h3>-Seguimiento durante el tiempo que dure el coaching por WA y correo.</h3>
                        <h3>-Sesión de 1 hora para aterrizar el plan de búsqueda al finalizar los retos.</h3>
                        <h3>-Sesión de 1 hora para revisar avances (uno y dos meses después).</h3>
                        <h3>-Archivo de empresas y contactos.</h3>
                        <h3>-Archivo de talentos de Gallup.</h3>
                        <br />
                        <h1 className="text-lg text-blue-800">Valor:</h1>
                        <br />
                        <h3>-$2,000 M.N.</h3>
                    </div>
                    :
                    <div className="bg-white border-2 shadow-md shadow-black border-black rounded-xl my-10 mx-20 p-5 flex flex-col items-center font-bold hover:bg-yellow-200">
                        <h1 className="text-2xl text-red-600">Coaching de búsqueda de empleo.</h1>
                        <h1 className="text-lg text-blue-800">Obtuviste 100 puntos ¡Felicidades!, por lo tanto, no hay propuestas para trabajar en este tema.</h1>
                    </div>
                }
            </div>
        )
    }
    
    if(category === "linkedin") {
        return(
            <div>
                {
                    (amount && amount <= 80) ?
                    <div className="bg-white border-2 shadow-md shadow-black border-black rounded-xl my-10 mx-20 p-5 flex flex-col items-center font-bold hover:bg-green-200">
                        <h1 className="text-2xl text-red-600">4) Coaching de uso de Linkedin para buscar trabajo. 1.5 horas.</h1>
                        <br />
                        <h1 className="text-lg text-blue-800">Tienes {amount -1} puntos de acuerdo al diagnóstico.</h1>
                        <br />
                        <h3>-Este servicio es para que destaques tu perfil y lo hagas más visible tanto para el buscador interno de Linkedin como para los reclutadores.</h3>
                        <h3>-Revisaremos tu perfil de Linkedin y te iré indicando cómo mejorarlo.</h3>
                        <h3>-Te daré tips para aprovechar al máximo tu red de contactos en Linkedin y cómo usarlo para buscar tu empleo ideal actual.</h3>
                        <br />
                        <h1 className="text-lg text-blue-800">Incluye:</h1>
                        <br />
                        <h3>-Sesión de hora y media. Virtual (Google Meet o Jitsi).</h3>
                        <h3>-Formato de autoevaluación de perfil.</h3>
                        <h3>-Dos revisiones posteriores y retroalimentación.</h3>
                        <br />
                        <h1 className="text-lg text-blue-800">Valor:</h1>
                        <br />
                        <h3>-$600 M.N.</h3>
                    </div>
                    :
                    <div className="bg-white border-2 shadow-md shadow-black border-black rounded-xl my-10 mx-20 p-5 flex flex-col items-center font-bold hover:bg-green-200">
                        <h1 className="text-2xl text-red-600">Coaching de uso de Linkedin para buscar trabajo.</h1>
                        <h1 className="text-lg text-blue-800">Obtuviste 100 puntos ¡Felicidades!, por lo tanto, no hay propuestas para trabajar en este tema.</h1>
                    </div>
                }
            </div>
        )
    }
    
    if(category === "objetivos") {
        return(
            <div>
                {
                    (amount && amount <= 80) ?
                    <div className="bg-white border-2 shadow-md shadow-black border-black rounded-xl mx-20 p-5 flex flex-col items-center font-bold hover:bg-blue-200">
                        <h1 className="text-2xl text-red-600">5) Coaching de proyecto de vida y carrera. 3 horas.</h1>
                        <br />
                        <h1 className="text-lg text-blue-800">Tienes {amount -1} puntos de acuerdo al diagnóstico.</h1>
                        <br />
                        <h3>-Esta opción es para hacer un mapa mental que te permita tener una visión global de tu vida.</h3>
                        <h3>-Podrás definir dónde estás el día de hoy en todas las esferas de tu vida: salud, social, familia y trabajo/vocación.</h3>
                        <h3>-La finalidad es que establezcas a dónde quieres llegar y definas objetivos claros que puedas llevar a cabo, a través de un plan de trabajo de 12 días.</h3>
                        <h3>-Definirás tu misión, visión y valores.</h3>
                        <h3>-Harás un Vision Board de tu proyecto de vida.</h3>
                        <br />
                        <h1 className="text-lg text-blue-800">Incluye:</h1>
                        <br />
                        <h3>-Sesión de tres horas. virtual (Google Meet o Jitsi).</h3>
                        <h3>-Plan de trabajo de 12 días.</h3>
                        <br />
                        <h1 className="text-lg text-blue-800">Valor:</h1>
                        <br />
                        <h3>-$1000 M.N.</h3>
                    </div>
                    :
                    <div className="bg-white border-2 shadow-md shadow-black border-black rounded-xl mx-20 p-5 flex flex-col items-center font-bold hover:bg-blue-200">
                        <h1 className="text-2xl text-red-600">Coaching de proyecto de vida y carrera.</h1>
                        <h1 className="text-lg text-blue-800">Obtuviste 100 puntos ¡Felicidades!, por lo tanto, no hay propuestas para trabajar en este tema.</h1>
                    </div>
                }
            </div>
        )
    }

}
    
    
export default Respuesta;