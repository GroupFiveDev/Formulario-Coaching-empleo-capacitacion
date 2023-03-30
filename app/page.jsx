'use client'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';
import { useEffect, useState } from "react";

export default function HomePage() {
  let storage
  if (process.browser) {
    storage = JSON.parse(localStorage.getItem("form"))
  }

  const [results, setResults] = useState({
    correo: "",
    nombre_completo: "",
    numero_telefonico: "",
    fecha_de_nacimiento: "",
    edad: "",
    Qué_puesto_o_empleo_buscas: "",
    En_qué_tipo_área_o_departamentos_te_interesa_trabajar: "",
    En_qué_tipo_de__empresa_te_ves_desarrollándote_profesionalmente: "",
    Cómo_te_sientes_en_esta_búsqueda_de_empleo: "",
    Qué_buscas_en_un_empleo: "",
    Cuánto_tiempo_llevas_desempleado: ""
  })

  function handleChange(e) {
    setResults({
      ...results,
      [e.target.id]: e.target.value
    })
    if (process.browser) {
      const storage = JSON.parse(localStorage.getItem("form"))
      storage.datos_personales[e.target.id] = e.target.value
      localStorage.setItem("form", JSON.stringify(storage))
    }
  }

  useEffect(() => {
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
        Cuánto_tiempo_llevas_desempleado: []
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
  }, [])

  const validate = (results) => {
    let errors = {};
    if(!results.correo) errors.correo = "Debe ingresar su correo electrónico."
    if(!results.nombre_completo) errors.nombre_completo = "Debe ingresar su nombre completo."
    if(!results.numero_telefonico) errors.numero_telefonico = "Debe ingresar su nombre completo."
    if(!results.fecha_de_nacimiento) errors.fecha_de_nacimiento = "Debe ingresar su nombre completo."
    if(!results.edad) errors.edad = "Debe ingresar su nombre completo."
    if(!results.Qué_puesto_o_empleo_buscas) errors.Qué_puesto_o_empleo_buscas = "Debe ingresar su nombre completo."
    if(!results.En_qué_tipo_área_o_departamentos_te_interesa_trabajar) errors.En_qué_tipo_área_o_departamentos_te_interesa_trabajar = "Debe ingresar su nombre completo."
    if(!results.En_qué_tipo_de__empresa_te_ves_desarrollándote_profesionalmente) errors.En_qué_tipo_de__empresa_te_ves_desarrollándote_profesionalmente = "Debe ingresar su nombre completo."
    if(!results.Cómo_te_sientes_en_esta_búsqueda_de_empleo) errors.Cómo_te_sientes_en_esta_búsqueda_de_empleo = "Debe ingresar su nombre completo."
    if(!results.Qué_buscas_en_un_empleo) errors.Qué_buscas_en_un_empleo = "Debe ingresar su nombre completo."
    if(!results.Cuánto_tiempo_llevas_desempleado) errors.Cuánto_tiempo_llevas_desempleado = "Debe ingresar su nombre completo."
    return errors;
  }

  const handleSubmit = () => {
    //navegar a la siguiente página
  }

  return (
    <>

      <h1 class="text-5xl font-extrabold dark:text-white"> Diagnóstico inicial de búsqueda de empleo.<br /><small class="ml-2 font-semibold text-gray-500 dark:text-gray-400">Por  favor  contesta con la mayor honestidad posible sobre tu situación en este momento para poder hacer el mejor diagnóstico posible y darte propuestas solamente con  los servicios que  realmente necesitas. De antemano gracias.</small></h1>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">

          {/* correo */}
          <div>
            <label htmlFor="correo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dirección de correo electrónico *</label>
            <input onChange={handleChange} type="email" id="correo" placeholder='ejemplo@ejemplo.com' name="correo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={storage?.datos_personales.correo} required/>
          </div>

          {/* Nombre completo */}
          <div>
            <label htmlFor="nombre_completo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre completo *</label>
            <input onChange={handleChange} type="text" id="nombre_completo" placeholder='Nombre Completo' name="nombre_completo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={storage?.datos_personales.nombre_completo} required/>
          </div>

          {/* numero_telefonico */}
          <div>
            <label htmlFor="numero_telefonico" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número telefónico (con lada), especificando ciudad y país. *</label>
            <input onChange={handleChange} type="tel" id="numero_telefonico" name="numero_telefonico" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" defaultValue={storage?.datos_personales.numero_telefonico} required/>
          </div>

          {/* fecha_de_nacimiento */}
          <div>
            <label htmlFor="fecha_de_nacimiento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha *</label>
            <input onChange={handleChange} type="date" id="fecha_de_nacimiento" name="fecha_de_nacimiento" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="dia/mes/año" defaultValue={storage?.datos_personales.fecha_de_nacimiento} required/>
          </div>

          {/* edad */}
          <div>
            <label htmlFor="edad" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edad *</label>
            <input onChange={handleChange} type="number" id="edad" placeholder='Edad' name="edad" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={storage?.datos_personales.edad} required/>
          </div>

          {/* ¿Qué puesto o empleo buscas? * */}
          <div>
            <label htmlFor="Qué_puesto_o_empleo_buscas" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">¿Qué puesto o empleo buscas? *</label>
            <input onChange={handleChange} type="text" id="Qué_puesto_o_empleo_buscas" name="Qué_puesto_o_empleo_buscas" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" defaultValue={storage?.datos_personales.Qué_puesto_o_empleo_buscas} required/>
          </div>

          {/* ¿En qué tipo área o departamentos te interesa trabajar?  */}
          <div>
            <label htmlFor="En_qué_tipo_área_o_departamentos_te_interesa_trabajar" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">¿En qué tipo área o departamentos te interesa trabajar?  *</label>
            <input onChange={handleChange} type="text" id="En_qué_tipo_área_o_departamentos_te_interesa_trabajar" name="En_qué_tipo_área_o_departamentos_te_interesa_trabajar" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={storage?.datos_personales.En_qué_tipo_área_o_departamentos_te_interesa_trabajar} required/>
          </div>

          {/* ¿En qué tipo área o departamentos te interesa trabajar?  */}
          <div>
            <label htmlFor="En_qué_tipo_de__empresa_te_ves_desarrollándote_profesionalmente" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">¿En qué tipo de  empresa te ves desarrollándote profesionalmente? *</label>
            <input onChange={handleChange} type="text" id="En_qué_tipo_de__empresa_te_ves_desarrollándote_profesionalmente" name="En_qué_tipo_de__empresa_te_ves_desarrollándote_profesionalmente" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={storage?.datos_personales.En_qué_tipo_de__empresa_te_ves_desarrollándote_profesionalmente} required/>
          </div>

          {/* Cómo_te_sientes_en_esta_búsqueda_de_empleo */}
          <div>
            <label htmlFor="En_qué_tipo_de__empresa_te_ves_desarrollándote_profesionalmente" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">¿Cómo te sientes en esta búsqueda de empleo?  Puedes elegir varias opciones. *</label>

            {/* Motivado */}
            <div className="flex items-center">
              <input onChange={handleChange} id="Cómo_te_sientes_en_esta_búsqueda_de_empleo" type="checkbox" value="Motivado" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="Motivado" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Motivado (a).</label>
            </div>

            {/* Enojado */}
            <div className="flex items-center">
              <input onChange={handleChange} id="Cómo_te_sientes_en_esta_búsqueda_de_empleo" type="checkbox" value="Enojado" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="Enojado" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enojado (a).</label>
            </div>

            {/* Desesperado */}
            <div className="flex items-center">
              <input onChange={handleChange} id="Cómo_te_sientes_en_esta_búsqueda_de_empleo" type="checkbox" value="Desesperado" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="Desesperado" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Desesperado (a)</label>
            </div>

            {/* Entusiasta */}
            <div className="flex items-center">
              <input onChange={handleChange} id="Cómo_te_sientes_en_esta_búsqueda_de_empleo" type="checkbox" value="Entusiasta" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="Entusiasta" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Entusiasta.</label>
            </div>

            {/* Otro */}
            <div>
              <label htmlFor="otro" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Otro</label>
              <input onChange={handleChange} name="Cómo_te_sientes_en_esta_búsqueda_de_empleo" type="text" id="Cómo_te_sientes_en_esta_búsqueda_de_empleo" placeholder='especificar...' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>

          {/* ¿Qué buscas en un empleo?  */}
          <div>
            <label htmlFor="Qué_buscas_en_un_empleo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">¿Qué buscas en un empleo? Puedes escoger varias. *</label>

            {/* Aprender */}
            <div className="flex items-center">
              <input onChange={handleChange} name="Qué_buscas_en_un_empleo" id="Qué_buscas_en_un_empleo" type="checkbox" value="Aprender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="Aprender" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Aprender</label>
            </div>

            {/* Crecer profesionalmente */}
            <div className="flex items-center">
              <input onChange={handleChange} name="Qué_buscas_en_un_empleo" id="Qué_buscas_en_un_empleo" type="checkbox" value="Crecer_profesionalmente" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="Crecer_profesionalmente" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Crecer profesionalmente</label>
            </div>

            {/* Mejor sueldo */}
            <div className="flex items-center">
              <input onChange={handleChange} name="Qué_buscas_en_un_empleo" id="Qué_buscas_en_un_empleo" type="checkbox" value="Mejor_sueldo" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="Mejor_sueldo" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mejor sueldo</label>
            </div>

            {/* Mejor ambiente laboral */}
            <div className="flex items-center">
              <input onChange={handleChange} name="Qué_buscas_en_un_empleo" id="Qué_buscas_en_un_empleo" type="checkbox" value="Mejor_ambiente_laboral" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="Mejor_ambiente_laboral" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mejor ambiente laboral</label>
            </div>

            {/* Mejores prestaciones */}
            <div className="flex items-center">
              <input onChange={handleChange} name="Qué_buscas_en_un_empleo" id="Qué_buscas_en_un_empleo" type="checkbox" value="Mejores_prestaciones" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="Mejores_prestaciones" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mejores prestaciones</label>
            </div>

            {/* Cambio de giro */}
            <div className="flex items-center">
              <input onChange={handleChange} name="Qué_buscas_en_un_empleo" id="Qué_buscas_en_un_empleo" type="checkbox" value="Cambio_de_giro" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="Cambio_de_giro" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cambio de giro</label>
            </div>

            {/* Estabilidad */}
            <div className="flex items-center">
              <input onChange={handleChange} name="Qué_buscas_en_un_empleo" id="Qué_buscas_en_un_empleo" type="checkbox" value="Estabilidad" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="Estabilidad" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Estabilidad</label>
            </div>


            {/* Otro */}
            <div>
              <label htmlFor="otro" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Otro</label>
              <input onChange={handleChange} type="text" name="Qué_buscas_en_un_empleo" id="Qué_buscas_en_un_empleo" placeholder='especificar...' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
        </div>


        {/* Cuánto tiempo llevas desempleado */}
        <div className="mb-6">
          <label htmlFor="Cuánto_tiempo_llevas_desempleado" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">¿Cuánto tiempo llevas desempleado (a)? *</label>
          <input onChange={handleChange} type="text" id="Cuánto_tiempo_llevas_desempleado" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={storage?.datos_personales.Cuánto_tiempo_llevas_desempleado} required/>
        </div>

        <Link href={"/cv"}>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Siguiente</button>
        </Link>
      </form>
    </>
  )
}