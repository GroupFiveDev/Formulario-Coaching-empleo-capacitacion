'use client'
import Chart from "./Chart"
import Respuesta from "./Respuesta";
import puntuacion from "./puntuacion";

const Grafica = () => {

  let storage;
  if (process.browser) {
    storage = JSON.parse(localStorage.getItem("form"))
  }

  let amount = puntuacion()

  return (
    <div className="h-full bg-gradient-to-tr from-gray-500 to-gray-100">
      <div className="flex flex-col items-center">
        <h1 className="text-red-600 text-2xl font-bold">RESULTADOS</h1>
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