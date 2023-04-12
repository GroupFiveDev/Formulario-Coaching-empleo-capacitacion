'use client'
import { useEffect } from "react";
import Chart from "./Chart"
import Respuesta from "./Respuesta";
import puntuacion from "./puntuacion";
import Image from 'next/image'
import { showMessage } from "../showMessage";

const Grafica = () => {

  let storage;
  if (process.browser) {
    storage = JSON.parse(localStorage.getItem("form"))
  }

  let amount = puntuacion()

  useEffect(() => {

    showMessage("El formulario se completó con éxito. Revisa tu casilla de correo electrónico para mas información.")

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
        localStorage.setItem("form", JSON.stringify(obj))
      }
    }
  })


  return (
    <div className="h-full bg-gradient-to-tr from-gray-500 to-gray-100">
      <Image width='100' height='100' src="/logo2.png" alt="logo" className="position: absolute top-0 left-0" />
      <div className="flex flex-col items-center">
        <h1 className="text-red-600 text-3xl font-bold">RESULTADOS</h1>
        <h1 className="text-blue-800 font-bold">Diagnóstico inicial de búsqueda de empleo.</h1>
        <h1 className="text-blue-800 font-bold">Nombre: {storage?.datos_personales.nombre_completo}</h1>
      </div>
      <Chart />
      <Respuesta category="cv" amount={amount?.cv} />
      <Respuesta category="entrevista" amount={amount?.entrevista} entrevista6={storage?.entrevista.results.pregunta1} />
      <Respuesta category="empleo" amount={amount?.empleo} />
      <Respuesta category="linkedin" amount={amount?.linkedin} />
      <Respuesta category="objetivos" amount={amount?.objetivos} />
    </div>
  )
}

export default Grafica;