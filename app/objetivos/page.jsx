'use client'
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import emailjs from 'emailjs-com';
import puntuacion from "../grafica/puntuacion";
import Image from 'next/image'
import ReactDOMServer from 'react-dom/server';

export default function ObjetivosPage() {

  const router = useRouter();

  let storage
  if (process.browser) {
    storage = JSON.parse(localStorage.getItem("form"))
  }

  let amount = puntuacion()

  const [results, setResults] = useState({
    Pregunta1: "",
    Pregunta2: "",
    Pregunta3: "",
    Pregunta4: "",
    Pregunta5: "",
  })

  function handleChange(e) {
    setResults({
      ...results,
      [e.target.name]: e.target.value
    })
    if (process.browser) {
      const storage = JSON.parse(localStorage.getItem("form"))
      storage.objetivos.results[e.target.name] = e.target.value
      localStorage.setItem("form", JSON.stringify(storage))
    }
  }

  useEffect(() => {
    return () => {
      const obj = {
        datos_personales: {
          correo: "",
          nombre_completo: "",
          numero_telefonico: "",
          fecha_de_nacimiento: "",
          edad: "",
          Qué_puesto_o_empleo_buscas: "",
          En_qué_tipo_área_o_departamentos_te_interesa_trabajar: "",
          En_qué_tipo_de__empresa_te_ves_desarrollándote_profesionalmente: "",
          Cómo_te_sientes_en_esta_búsqueda_de_empleo: [],
          Qué_buscas_en_un_empleo: [],
          Cuánto_tiempo_llevas_desempleado: ""
        },
        cv: {
          results: {
            Pregunta1: "",
            Pregunta2: "",
            Pregunta3: "",
            Pregunta4: "",
            Pregunta5: "",
          }
        },
        empleo: {
          results: {
            Pregunta1: "",
            Pregunta2: "",
            Pregunta3: "",
            Pregunta4: "",
            Pregunta5: "",
          }
        },
        entrevista: {
          results: {
            Pregunta1: "",
            Pregunta2: "",
            Pregunta3: "",
            Pregunta4: "",
            Pregunta5: "",
          }
        },
        linkedin: {
          results: {
            Pregunta1: "",
            Pregunta2: "",
            Pregunta3: "",
            Pregunta4: "",
            Pregunta5: "",
          }
        },
        objetivos: {
          results: {
            Pregunta1: "",
            Pregunta2: "",
            Pregunta3: "",
            Pregunta4: "",
            Pregunta5: "",
          }
        }
      }
      if (process.browser) {
        if (!storage)
          localStorage.setItem("form", JSON.stringify(obj))
      }
    }

  }, [])

  function a(amount, entrevista6) {
    const respuestaCv = (
      amount.cv - 1 <= 80 ?
        <html>
          <div style={{ border: "3px solid black", borderRadius: "15px", padding: "10px 10px 10px 10px", background: "#f1f1f1" }}>
            <strong><span style={{ color: "red", fontSize: "20px" }}>
              Coaching de C.V. creativo y de alto impacto. 3 horas.</span></strong>
            <p style={{ margin: "0" }}>
              <span style={{ fontSize: "14px" }}>
                Tienes {amount.cv - 1} puntos de acuerdo al diagnóstico.
              </span>
            </p>
            <div>
              <h1 style={{ fontSize: "15px" }}>
                -Te puedo enseñar cómo evaluar una vacante de tu interés antes de postularte, cómo adaptar tu C.V. a dicha vacante y cómo redactar una carta de presentación interesante que complemente tu postulación.
              </h1>
              <h1 style={{ fontSize: "15px" }}>
                -Te enseñaré a redactar tus logros de manera que estén incluidas tus fortalezas y puedas venderte mucho mejor.
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -Te servirá la información de tu C.V. para actualizar tu perfil de Linkedin y bolsas en las que estés registrado(a).
              </h1 >
            </div >

            <div style={{ marginTop: "20px" }}>
              <strong><span style={{ color: "#336eff", fontSize: "20px" }}
              ><span>
                  Incluye
                </span>
                <span>:</span>
              </span></strong>
              <h1 style={{ fontSize: "15px" }}>
                -Sesión de 3 horas. Virtual (Google Meet o Jitsi).
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -Tres revisiones de tu C.V. (la primera antes de la sesión y dos posteriores).
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -Dos revisiones de tu carta.
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -Una revisión a tu vacante.
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -Una revisión de tu perfil de Linkedin.
              </h1 >
            </div >
            <div style={{ marginTop: "20px" }}>
              <strong>
                <span style={{ color: "#336eff", fontSize: "20px" }}>
                  Valor:
                </span>
              </strong >
              <h1 style={{ fontSize: "14px" }}>
                $1, 000.- MXN.
              </h1 >
            </div >
          </div >
        </html >
        :
        <html>
          <div style={{ border: "3px solid black", borderRadius: "15px", padding: "10px 10px 10px 10px", background: "#f1f1f1", }}>
            <h1 style={{ color: "red", fontSize: "20px" }}>
              C.V. creativo y de alto impacto.
            </h1>
            <h1 style={{ fontSize: "17px" }}>
              Obtuviste 100 puntos ¡Felicidades!, por lo tanto, no hay propuestas para
              trabajar en este tema.
            </h1>
          </div>
        </html>)

    const respuestaEntrevista = (
      entrevista6 === "no" ?
        <html>
          <div style={{ border: "3px solid black", borderRadius: "15px", padding: "10px 10px 10px 10px", background: "#f1f1f1" }}>
            <strong><span style={{ color: "red", fontSize: "20px" }}>
              Coaching de preparación de entrevista laboral. 3 horas.</span></strong>
            <p style={{ margin: "0" }}>
              <span style={{ fontSize: "14px" }}>
                Tienes {amount.entrevista - 1} puntos de acuerdo al diagnóstico.
              </span>
            </p>
            <div>
              <h1 style={{ fontSize: "15px" }}>
                -Sabrás cómo debes prepararte para una entrevista laboral (antes, durante y después), con la finalidad de aumentar tu confianza frente al reclutador.
              </h1>
              <h1 style={{ fontSize: "15px" }}>
                -Te daré tips de qué elementos debes cuidar en todo momento: tus lenguajes y tu imagen personal.
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -Antes de nuestra sesión, responderás por escrito las 50 preguntas más comunes en una entrevista y elegirás las 10 que te cuesten más trabajo para enfocarnos en ellas.
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -Aprenderás cómo contestar de manera adecuada para venderte mejor e incrementar tus posibilidades de ser contratado (a).
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -También realizarás tu pitch para presentarte de manera profesional.
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -Despejaré cualquier duda que tengas de tus previas experiencias.
              </h1 >
            </div >

            <div style={{ marginTop: "20px" }}>
              <strong><span style={{ color: "#336eff", fontSize: "20px" }}
              ><span>
                  Incluye
                </span>
                <span>:</span>
              </span></strong>
              <h1 style={{ fontSize: "15px" }}>
                -Sesión de 3 horas. Virtual (Google Meet o Jitsi).
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -Formato de autoevaluación de entrevistas.
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -Archivo con las 50 preguntas más comunes en una entrevista laboral.
              </h1 >
            </div >
            <div style={{ marginTop: "20px" }}>
              <strong>
                <span style={{ color: "#336eff", fontSize: "20px" }}>
                  Valor:
                </span>
              </strong >
              <h1 style={{ fontSize: "14px" }}>
                $1, 000.- MXN.
              </h1 >
            </div >
          </div >
        </html >
        :
        amount.entrevista - 1 <= 60 ?
          <html>
            <div style={{ border: "3px solid black", borderRadius: "15px", padding: "10px 10px 10px 10px", background: "#f1f1f1" }}>
              <strong><span style={{ color: "red", fontSize: "20px" }}>
                Coaching de preparación de entrevista laboral. 3 horas.</span></strong>
              <p style={{ margin: "0" }}>
                <span style={{ fontSize: "14px" }}>
                  Tienes {amount.entrevista - 1} puntos de acuerdo al diagnóstico.
                </span>
              </p>
              <div>
                <h1 style={{ fontSize: "15px" }}>
                  -Sabrás cómo debes prepararte para una entrevista laboral (antes, durante y después), con la finalidad de aumentar tu confianza frente al reclutador.
                </h1>
                <h1 style={{ fontSize: "15px" }}>
                  -Te daré tips de qué elementos debes cuidar en todo momento: tus lenguajes y tu imagen personal.
                </h1 >
                <h1 style={{ fontSize: "15px" }}>
                  -Antes de nuestra sesión, responderás por escrito las 50 preguntas más comunes en una entrevista y elegirás las 10 que te cuesten más trabajo para enfocarnos en ellas.
                </h1 >
                <h1 style={{ fontSize: "15px" }}>
                  -Aprenderás cómo contestar de manera adecuada para venderte mejor e incrementar tus posibilidades de ser contratado (a).
                </h1 >
                <h1 style={{ fontSize: "15px" }}>
                  -También realizarás tu pitch para presentarte de manera profesional.
                </h1 >
                <h1 style={{ fontSize: "15px" }}>
                  -Despejaré cualquier duda que tengas de tus previas experiencias.
                </h1 >
              </div >
              <div style={{ marginTop: "20px" }}>
                <strong><span style={{ color: "#336eff", fontSize: "20px" }}
                ><span>
                    Incluye
                  </span>
                  <span>:</span>
                </span></strong>
                <h1 style={{ fontSize: "15px" }}>
                  Sesión de 3 horas. Virtual (Google Meet o Jitsi).
                </h1 >
                <h1 style={{ fontSize: "15px" }}>
                  -Formato de autoevaluación de entrevistas.
                </h1 >
                <h1 style={{ fontSize: "15px" }}>
                  -Archivo con las 50 preguntas más comunes en una entrevista laboral.
                </h1 >
              </div >
              <div style={{ marginTop: "20px" }}>
                <strong>
                  <span style={{ color: "#336eff", fontSize: "20px" }}>
                    Valor:
                  </span>
                </strong >
                <h1 style={{ fontSize: "14px" }}>
                  $1, 000.- MXN.
                </h1 >
              </div >
            </div >
          </html >
          :
          amount.entrevista - 1 == 80 ?
            <html>
              <div style={{ border: "3px solid black", borderRadius: "15px", padding: "10px 10px 10px 10px", background: "#f1f1f1" }}>
                <strong><span style={{ color: "red", fontSize: "20px" }}>
                  Coaching de simulación de entrevista laboral. 1.5 horas.</span></strong>
                <p style={{ margin: "0" }}>
                  <span style={{ fontSize: "14px" }}>
                    Tienes {amount.entrevista - 1} puntos de acuerdo al diagnóstico.
                  </span>
                </p>
                <div>
                  <h1 style={{ fontSize: "15px" }}>
                    -Haremos una simulación de entrevista, por lo tanto, debes estar vestido(a) como si fuera una entrevista laboral real (aún sea virtual).
                  </h1>
                  <h1 style={{ fontSize: "15px" }}>
                    -Te daré retroalimentación de: tus respuestas, tu imagen (de acuerdo a tu perfil), lenguajes (verbal, no verbal y paraverbal), tu pitch de presentación, errores, etc.
                  </h1 >
                  <h1 style={{ fontSize: "15px" }}>
                    -Puede estar enfocada a una vacante, empresa y/o persona de tu interés.
                  </h1 >
                </div >
                <div style={{ marginTop: "20px" }}>
                  <strong><span style={{ color: "#336eff", fontSize: "20px" }}
                  ><span>
                      Incluye
                    </span>
                    <span>:</span>
                  </span></strong>
                  <h1 style={{ fontSize: "15px" }}>
                    -Sesión de hora y media Virtual (Google Meet o Jitsi) : 45 minutos de simulación y 45 minutos de retroalimentación.
                  </h1 >
                  <h1 style={{ fontSize: "15px" }}>
                    -Prepararé una entrevista semiestructurada laboral por valores y competencias enfocada a la vacante y/o empresa para llevar a cabo la simulación contigo en el idioma que elijas (1. 5 horas).
                  </h1 >
                </div >
                <div style={{ marginTop: "20px" }}>
                  <strong>
                    <span style={{ color: "#336eff", fontSize: "20px" }}>
                      Valor:
                    </span>
                  </strong >
                  <h1 style={{ fontSize: "14px" }}>
                    -Español $600.- MXN
                  </h1 >  <h1 style={{ fontSize: "14px" }}>
                    -Inglés $700.- MXN
                  </h1 >  <h1 style={{ fontSize: "14px" }}>
                    -Bilingüe $800.- MXN
                  </h1 >
                </div >
              </div >
            </html >
            :
            <html>
              <div style={{ border: "3px solid black", borderRadius: "15px", padding: "10px 10px 10px 10px", background: "#f1f1f1", }}>
                <h1 style={{ color: "red", fontSize: "20px" }}>
                  Coaching de simulación de entrevista laboral.
                </h1>
                <h1 style={{ fontSize: "17px" }}>
                  Obtuviste 100 puntos ¡Felicidades!, por lo tanto, no hay propuestas para trabajar en este tema.
                </h1>
              </div>
            </html>)

    const respuestaEmpleo = (
      amount.empleo - 1 <= 80 ?
        <html>
          <div style={{ border: "3px solid black", borderRadius: "15px", padding: "10px 10px 10px 10px", background: "#f1f1f1" }}>
            <strong><span style={{ color: "red", fontSize: "20px" }}>
              Coaching de búsqueda de empleo. 3 horas.
            </span></strong>
            <p style={{ margin: "0" }}>
              <span style={{ fontSize: "14px" }}>
                Tienes {amount.empleo - 1} puntos de acuerdo al diagnóstico.
              </span>
            </p>
            <div>
              <h1 style={{ fontSize: "15px" }}>
                -Definirás tu empleo ideal actual objetivo (12 variables) y subjetivo para que enfoques tu búsqueda y puedas evaluar cualquier vacante antes de postularte.
              </h1>
              <h1 style={{ fontSize: "15px" }}>
                -Conocerás la efectividad de las fuentes de empleo.
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -Llevarás a cabo un plan CON 14 RETOS DIARIOS para poder conseguir el empleo que quieres en el menor tiempo posible aprovechando tu red de contactos.
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -Realizarás un FODA personal con el que descubrirás tus talentos y fortalezas para que los puedas vender en tu C.V. y entrevistas.
              </h1 >
            </div >
            <div style={{ marginTop: "20px" }}>
              <strong><span style={{ color: "#336eff", fontSize: "20px" }}
              ><span>
                  Incluye
                </span>
                <span>:</span>
              </span></strong>
              <h1 style={{ fontSize: "15px" }}>
                -Sesión de tres horas virtuales (Google Meet o Jitsi).
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -Plan de trabajo con 14 retos diarios con retroalimentación.
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -Seguimiento durante el tiempo que dure el coaching por WA y correo.
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -Sesión de 1 hora para aterrizar el plan de búsqueda al finalizar los retos.
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -Sesión de 1 hora para revisar avances (uno y dos meses después).
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -Archivo de empresas y contactos.
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -Archivo de talentos de Gallup.
              </h1 >
            </div >
            <div style={{ marginTop: "20px" }}>
              <strong>
                <span style={{ color: "#336eff", fontSize: "20px" }}>
                  Valor:
                </span>
              </strong >
              <h1 style={{ fontSize: "14px" }}>
                $2,000.- MXN
              </h1 >
            </div >
          </div >
        </html >
        :
        <html>
          <div style={{ border: "3px solid black", borderRadius: "15px", padding: "10px 10px 10px 10px", background: "#f1f1f1", }}>
            <h1 style={{ color: "red", fontSize: "20px" }}>
              Coaching de búsqueda de empleo.
            </h1>
            <h1 style={{ fontSize: "17px" }}>
              Obtuviste 100 puntos ¡Felicidades!, por lo tanto, no hay propuestas para trabajar en este tema.
            </h1>
          </div>
        </html>
    )

    const respuestaLinkedin = (
      amount.linkedin - 1 <= 80 ?
        <html>
          <div style={{ border: "3px solid black", borderRadius: "15px", padding: "10px 10px 10px 10px", background: "#f1f1f1" }}>
            <strong><span style={{ color: "red", fontSize: "20px" }}>
              Coaching de uso de Linkedin para buscar trabajo. 1.5 horas.
            </span></strong>
            <p style={{ margin: "0" }}>
              <span style={{ fontSize: "14px" }}>
                Tienes {amount.linkedin - 1} puntos de acuerdo al diagnóstico.
              </span>
            </p>
            <div>
              <h1 style={{ fontSize: "15px" }}>
                -Este servicio es para que destaques tu perfil y lo hagas más visible tanto para el buscador interno de Linkedin como para los reclutadores.
              </h1>
              <h1 style={{ fontSize: "15px" }}>
                -Revisaremos tu perfil de Linkedin y te iré indicando cómo mejorarlo.
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -Te daré tips para aprovechar al máximo tu red de contactos en Linkedin y cómo usarlo para buscar tu empleo ideal actual.
              </h1 >
            </div >
            <div style={{ marginTop: "20px" }}>
              <strong><span style={{ color: "#336eff", fontSize: "20px" }}
              ><span>
                  Incluye
                </span>
                <span>:</span>
              </span></strong>
              <h1 style={{ fontSize: "15px" }}>
                -Sesión de hora y media. Virtual (Google Meet o Jitsi).
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -Formato de autoevaluación de perfil.
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -Dos revisiones posteriores y retroalimentación.
              </h1 >
            </div >
            <div style={{ marginTop: "20px" }}>
              <strong>
                <span style={{ color: "#336eff", fontSize: "20px" }}>
                  Valor:
                </span>
              </strong >
              <h1 style={{ fontSize: "14px" }}>
                $600.- MXN
              </h1 >
            </div >
          </div >
        </html >
        :
        <html>
          <div style={{ border: "3px solid black", borderRadius: "15px", padding: "10px 10px 10px 10px", background: "#f1f1f1", }}>
            <h1 style={{ color: "red", fontSize: "20px" }}>
              Coaching de uso de Linkedin para buscar trabajo.
            </h1>
            <h1 style={{ fontSize: "17px" }}>
              Obtuviste 100 puntos ¡Felicidades!, por lo tanto, no hay propuestas para trabajar en este tema.
            </h1>
          </div>
        </html>
    )

    const respuestaObjetivos = (
      amount.objetivos - 1 <= 80 ?
        <html>
          <div style={{ border: "3px solid black", borderRadius: "15px", padding: "10px 10px 10px 10px", background: "#f1f1f1" }}>
            <strong><span style={{ color: "red", fontSize: "20px" }}>
              Coaching de proyecto de vida y carrera. 3 horas.
            </span></strong>
            <p style={{ margin: "0" }}>
              <span style={{ fontSize: "14px" }}>
                Tienes {amount.objetivos - 1} puntos de acuerdo al diagnóstico.
              </span>
            </p>
            <div>
              <h1 style={{ fontSize: "15px" }}>
                -Esta opción es para hacer un mapa mental que te permita tener una visión global de tu vida.
              </h1>
              <h1 style={{ fontSize: "15px" }}>
                -Podrás definir dónde estás el día de hoy en todas las esferas de tu vida: salud, social, familia y trabajo/vocación.
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -La finalidad es que establezcas a dónde quieres llegar y definas objetivos claros que puedas llevar a cabo, a través de un plan de trabajo de 12 días.
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -Definirás tu misión, visión y valores.
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -Harás un Vision Board de tu proyecto de vida.
              </h1 >
            </div >
            <div style={{ marginTop: "20px" }}>
              <strong><span style={{ color: "#336eff", fontSize: "20px" }}
              ><span>
                  Incluye
                </span>
                <span>:</span>
              </span></strong>
              <h1 style={{ fontSize: "15px" }}>
                -Sesión de tres horas. virtual (Google Meet o Jitsi).
              </h1 >
              <h1 style={{ fontSize: "15px" }}>
                -Plan de trabajo de 12 días.
              </h1 >
            </div >
            <div style={{ marginTop: "20px" }}>
              <strong>
                <span style={{ color: "#336eff", fontSize: "20px" }}>
                  Valor:
                </span>
              </strong >
              <h1 style={{ fontSize: "14px" }}>
                $1000.- MXN
              </h1 >
            </div >
          </div >
        </html >
        :
        <html>
          <div style={{ border: "3px solid black", borderRadius: "15px", padding: "10px 10px 10px 10px", background: "#f1f1f1", }}>
            <h1 style={{ color: "red", fontSize: "20px" }}>
              Coaching de proyecto de vida y carrera.
            </h1>
            <h1 style={{ fontSize: "17px" }}>
              Obtuviste 100 puntos ¡Felicidades!, por lo tanto, no hay propuestas para trabajar en este tema.
            </h1>
          </div>
        </html>
    )

    return {
      respuestaCv,
      respuestaEntrevista,
      respuestaEmpleo,
      respuestaLinkedin,
      respuestaObjetivos,
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push("/grafica");
    const { respuestaCv, respuestaEntrevista, respuestaEmpleo, respuestaLinkedin, respuestaObjetivos, firma } = a(amount, storage?.entrevista.results.pregunta1)
    const templateParams = {
      to: storage?.datos_personales.correo,
      name: storage?.datos_personales.nombre_completo,
      cv: amount?.cv,
      entrevista: amount?.entrevista,
      empleo: amount?.empleo,
      linkedin: amount?.linkedin,
      objetivos: amount?.objetivos,
      respuestaCv: ReactDOMServer.renderToString(respuestaCv),
      respuestaEntrevista: ReactDOMServer.renderToString(respuestaEntrevista),
      respuestaEmpleo: ReactDOMServer.renderToString(respuestaEmpleo),
      respuestaLinkedin: ReactDOMServer.renderToString(respuestaLinkedin),
      respuestaObjetivos: ReactDOMServer.renderToString(respuestaObjetivos),
    }
    emailjs.send("service_ziz6m6q", "template_fxj35gb", templateParams, "rAiH6ipyTPFl38SzH")
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });

  }

  return (
    <div className="h-full bg-gradient-to-tr from-gray-500 to-gray-100 p-10">
      <form onSubmit={handleSubmit}>
        <Image width='100' height='100' src="/logo2.png" alt="logo" className="position: fixed top-0 left-0" />
        <div className="space-y-12">
          <div className="flex flex-col items-center text-center border-gray-900/10">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-blue-800 md:text-5xl lg:text-1">Proyecto

              de vida y carrera</h1>
            <div className="border-gray-900/10 pb-12">
              {/* pregunta 1 */}
              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-lg font-semibold leading-6 text-gray-900">
                    ¿Sientes que mantienes un equilibrio en tu vida? *
                  </legend>
                  <div className="mt-6 space-y-6 flex flex-col items-center">

                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="Pregunta1A"
                          name="Pregunta1"
                          type="radio"
                          value="si"
                          onChange={handleChange}
                          defaultChecked={storage?.objetivos.results.Pregunta1 === "si" ? true : ""}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          required
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="pregunta1a" className="font-medium text-gray-900">
                          Sí.
                        </label>

                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="pregunta1B"
                          name="Pregunta1"
                          type="radio"
                          value="no"
                          onChange={handleChange}
                          defaultChecked={storage?.objetivos.results.Pregunta1 === "no" ? true : ""}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          required
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="pregunta1b" className="font-medium text-gray-900">
                          No.
                        </label>
                      </div>
                    </div>
                    {results.Pregunta1 === "no" && <p className="text-blue-800">
                      Si no tienes un equilibrio en tu vida, le estás dedicando demasiado tiempo a tu trabajo y no tienes tiempo para tu salud, estar contigo mismo (a), tu familia, tus amigos, tus actividades recreativas, etc. Puede ser  momento para darte una pausa, reflexionar sobre lo que estás haciendo y lo que quieres hacer.
                    </p>}
                  </div>
                </fieldset>

              </div>

              {/* pregunta 2 */}
              <div className="mt-10 space-y-10">
                <fieldset>

                  <legend className="text-lg font-semibold leading-6 text-gray-900">
                    ¿Tienes claro el camino para tu crecimiento profesional? *
                  </legend>

                  <div className="mt-6 space-y-6 flex flex-col items-center">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="Pregunta2A"
                          name="Pregunta2"
                          type="radio"
                          value="si"
                          onChange={handleChange}
                          defaultChecked={storage?.objetivos.results.Pregunta2 === "si" ? true : ""}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          required
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="Pregunta2" className="font-medium text-gray-900">
                          Sí.
                        </label>

                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="Pregunta2A"
                          name="Pregunta2"
                          type="radio"
                          value="no"
                          onChange={handleChange}
                          defaultChecked={storage?.objetivos.results.Pregunta2 === "no" ? true : ""}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          required
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="Pregunta2" className="font-medium text-gray-900">
                          No.
                        </label>

                      </div>
                    </div>
                    {results.Pregunta2 === "no" && <p className="text-blue-800">
                      Si no sabes hacia dónde vas, entonces ¿cómo sabrás si ya llegaste o cuánto te falta? Es importante que definas  tu crecimiento profesional o laboral tan lejos como lo quieras llevar. Esta es una pregunta de entrevista ¿cómo te ves en cinco, 10 o 15 años? Deberías tener por lo menos una idea de qué contestar.
                    </p>}
                  </div>
                </fieldset>

              </div>

              {/* pregunta 3 */}
              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-lg font-semibold leading-6 text-gray-900">
                    ¿Llevas a cabo tu vocación? *
                  </legend>
                  <div className="mt-6 space-y-6 flex flex-col items-center">

                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="Pregunta3A"
                          name="Pregunta3"
                          type="radio"
                          value="si"
                          onChange={handleChange}
                          defaultChecked={storage?.objetivos.results.Pregunta3 === "si" ? true : ""}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          required
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="Pregunta3" className="font-medium text-gray-900">
                          Sí.
                        </label>

                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="Pregunta3B"
                          name="Pregunta3"
                          type="radio"
                          value="no"
                          onChange={handleChange}
                          defaultChecked={storage?.objetivos.results.Pregunta3 === "no" ? true : ""}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          required
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="Pregunta3" className="font-medium text-gray-900">
                          No.
                        </label>

                      </div>
                    </div>
                    {results.Pregunta3 === "no" && <p className="text-blue-800">
                      Si no llevas a cabo tu vocación personal no solamente te sentirás vacío en algún punto de tu vida sino que te irá  generando cada vez  mayor  irritabilidad y frustración quedarte donde estás. Si ya sabes lo que no quieres pero no sabes qué sí quieres, te puedo ayudar con un Coaching de Descubrimiento Vocacional.
                    </p>}
                  </div>
                </fieldset>

              </div>

              {/* pregunta 4 */}
              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-lg font-semibold leading-6 text-gray-900">
                    ¿Tienes objetivos claros para tus esferas de: Salud, Familia y  Vida Social? *
                  </legend>
                  <div className="mt-6 space-y-6 flex flex-col items-center">

                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="Pregunta4A"
                          name="Pregunta4"
                          type="radio"
                          value="si"
                          onChange={handleChange}
                          defaultChecked={storage?.objetivos.results.Pregunta4 === "si" ? true : ""}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          required
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="Pregunta4" className="font-medium text-gray-900">
                          Sí.
                        </label>

                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="Pregunta4B"
                          name="Pregunta4"
                          type="radio"
                          value="no"
                          onChange={handleChange}
                          defaultChecked={storage?.objetivos.results.Pregunta4 === "no" ? true : ""}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          required
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="Pregunta4" className="font-medium text-gray-900">
                          No.
                        </label>

                      </div>
                    </div>
                    {results.Pregunta4 === "no" && <p className="text-blue-800">
                      Tenemos  claros los objetivos organizacionales y los de nuestra área de trabajo pero pocas veces nos planteamos objetivos personales. Eso es parte de lo que hacemos en este coaching, primero evalúas cómo estás en cada esfera y luego a qué le darás prioridad estableciendo una meta.
                    </p>}
                  </div>
                </fieldset>

              </div>

              {/* pregunta 5 */}
              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-lg font-semibold leading-6 text-gray-900">
                    ¿Tienes un objetivo claro de Trabajo? *
                  </legend>
                  <div className="mt-6 space-y-6 flex flex-col items-center">

                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="Pregunta5A"
                          name="Pregunta5"
                          type="radio"
                          value="si"
                          onChange={handleChange}
                          defaultChecked={storage?.objetivos.results.Pregunta5 === "si" ? true : ""}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          required
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="Pregunta5" className="font-medium text-gray-900">
                          Sí.
                        </label>

                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="Pregunta5B"
                          name="Pregunta5"
                          type="radio"
                          value="no"
                          onChange={handleChange}
                          defaultChecked={storage?.objetivos.results.Pregunta5 === "no" ? true : ""}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          required
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="Pregunta5" className="font-medium text-gray-900">
                          No.
                        </label>
                      </div>
                    </div>
                    {results.Pregunta5 === "no" && <p className="text-blue-800">
                      Definirás tu objetivo personal laboral, ya sea crecer dentro de tu organización,  conseguir un nuevo empleo, cambiarte de área, de sector, enfocarte a tu vocación, el cumplimiento de ciertos KPI´s, mejorar  tu desempeño como jefe, compañero, socio, proveedor, etc.
                    </p>}
                  </div>
                </fieldset>

              </div>

            </div>

            <div className="flex justify-center gap-5">
              {/* <button type="button" onClick={() => router.push("/linkedin")} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Atras</button> */}
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Siguiente</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

