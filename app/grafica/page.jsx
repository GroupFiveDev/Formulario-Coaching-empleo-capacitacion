'use client'
import Chart from "./Chart"

const Grafica = () => {

  let storage;
  if (process.browser) {
    storage = JSON.parse(localStorage.getItem("form"))
  }

  let amount;
  if (storage) {
    amount = {
      cv: Object.values(storage.cv.results).reduce((acumulador, valorActual) => {
        if (valorActual === "si") {
          return acumulador + 20;
        } else {
          return acumulador;
        }
      }, 0),
      entrevista: Object.values(storage.entrevista.results).reduce((acumulador, valorActual) => {
        if (valorActual === "si") {
          return acumulador + 20;
        } else {
          return acumulador;
        }
      }, 0),
      empleo: Object.values(storage.empleo.results).reduce((acumulador, valorActual) => {
        if (valorActual === "si") {
          return acumulador + 20;
        } else {
          return acumulador;
        }
      }, 0),
      linkedin: Object.values(storage.linkedin.results).reduce((acumulador, valorActual) => {
        if (valorActual === "si") {
          return acumulador + 20;
        } else {
          return acumulador;
        }
      }, 0),
      objetivos: Object.values(storage.objetivos.results).reduce((acumulador, valorActual) => {
        if (valorActual === "si") {
          return acumulador + 20;
        } else {
          return acumulador;
        }
      }, 0),
    }
  }

  return (
    <div>
      <h1>RESULTADOS.</h1>
      <h1>Diagnóstico inicial de búsqueda de empleo.</h1>
      <h1>Nombre: {storage?.datos_personales.nombre_completo}</h1>
      <Chart />
      {/* Coaching de C.V. creativo  LISTO */}
      {
        amount?.cv <= 80 ?
          <div>
            <h1>1) Coaching de C.V. creativo y de alto impacto. 3 horas.</h1>
            <br />
            <h1>Tienes {amount?.cv} puntos de acuerdo al diagnóstico.</h1>
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

      {/*  Coaching de simulación de entrevista laboral. DUDAS*/}
      {
        amount?.entrevista <= 80 ?
          <div>
            <br />
            <h1>2) Coaching de simulación de entrevista laboral. 1.5 horas.</h1>
            <br />
            <h1>Tienes {amount?.entrevista} puntos de acuerdo al diagnóstico.</h1>
            <br />
            <h3>En este coaching hacemos una simulación de entrevista enfocada a una vacante y empresa específicas que dura 45 min y en 45 min te doy retroalimentación.</h3>
            <h3>La idea es ayudarte a identificar y mejorar aquellos aspectos en los que puedes cometiendo errores y no te has dado cuenta: respuestas adecuadas, lenguajes (verbal, no verbal y paraverbal) e imagen.</h3>
            <h3>Te servirá la información de tu C.V. para actualizar tu perfil de Linkedin y bolsas en las que estés registrado.</h3>
            <h3>El coaching tiene una duración de hora y media.</h3>
            <h3>Puede ser en: español, inglés o bilingüe.</h3>
          </div>
          :
          <div>
            <h1>Entrevista laboral</h1>
            <h1>Obtuviste 100 puntos ¡Felicidades!, por lo tanto, no hay propuestas para trabajar en este tema.</h1>
          </div>
      }

      {/*  Coaching de  Búsqueda de empleo. LISTO */}
      {
        amount?.empleo <= 80 ?
          <div>
            <br />
            <h1>3) Coaching de Búsqueda de empleo. 3 horas +3 horas de seguimiento.</h1>
            <br />
            <h1>Tienes {amount?.empleo} puntos de acuerdo al diagnóstico.</h1>
            <br />
            <h3>Definirás tu empleo ideal actual (con 12 variables) para que tu búsqueda sea exitosa debe estar enfocada a lo que tú quieres, no a lo que te ofrecen.</h3>
            <h3>Harás un FODA personal profundo para identificar tus fortalezas y poderlas vender mejor tanto en tu C.V. como en tu entrevista.</h3>
            <h3>Realizarás un Plan de trabajo de 14 días de preparación para tu búsqueda con retos diarios.</h3>
            <h3>Con una sesión virtual de seguimiento al cierre del plan, en 1 y 2 meses posteriores.</h3>
            <h3>Dudas por WA, llamada y correo durante el tiempo que dure el coaching.</h3>
          </div>
          :
          <div>
            <h1>Búsqueda de empleo</h1>
            <h1>Obtuviste 100 puntos ¡Felicidades!, por lo tanto, no hay propuestas para trabajar en este tema.</h1>
          </div>
      }

      {/*  Linkedin FALTA QUE NOS PASE LAS PROPUESTAS */}
      {
        amount?.linkedin <= 80 ?
          <div>
            <h1>Falta el texto</h1>

          </div>
          :
          <div>
            <h1>Falta el texto</h1>

          </div>
      }

      {/* PROPUESTAS Y COTIZACIÓN. FALTA QUE NOS PASE LAS PROPUESTAS*/}
      {
        amount?.objetivos <= 80 ?
          <div>
            <h1>Falta el texto</h1>
          </div>
          :
          <div>
            <h1>Falta el texto</h1>
          </div>
      }
      {/* DATOS Y FORMAS DE PAGO: */}
      {/* COACH PROFESIONAL DE BÚSQUEDA DE EMPLEO.Lic. Atenea Pólito Soto. */}
    </div>
  )
}

export default Grafica;