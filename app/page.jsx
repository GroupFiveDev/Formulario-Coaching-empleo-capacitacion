'use client'
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Image from 'next/image'

export default function HomePage() {
  const router = useRouter()
  // const [storage, setStorage] = useState(JSON.parse(localStorage.getItem("form")))
  // const [storage, setStorage] = useState()
  let storage


  if (typeof window !== 'undefined') {
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
    Cómo_te_sientes_en_esta_búsqueda_de_empleo: storage?.datos_personales.Cómo_te_sientes_en_esta_búsqueda_de_empleo.length ? storage.datos_personales.Cómo_te_sientes_en_esta_búsqueda_de_empleo : [],
    Qué_buscas_en_un_empleo: storage?.datos_personales.Qué_buscas_en_un_empleo.length ? storage.datos_personales.Qué_buscas_en_un_empleo : [],
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

  function handleChangeChecbox(e) {
    const value = e.target.value
    if (storage.datos_personales[e.target.id].includes(value)) {
      const index = results[e.target.id].findIndex(e => e === value)
      results[e.target.id].splice(index, 1)

      const index2 = storage.datos_personales[e.target.id].findIndex(e => e === value)
      storage.datos_personales[e.target.id].splice(index2, 1)
    } else {
      results[e.target.id].push(value)
      storage?.datos_personales[e.target.id].push(value)
    }
    localStorage.setItem("form", JSON.stringify(storage))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/cv");
  }

  useEffect(() => {
    const obj = {
      datos_personales: {
        correo: "",
        nombre_completo: "",
        numero_telefonico: "",
        ciudad_pais:"",
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
    // if (process.browser) {
    if (!storage)
      localStorage.setItem("form", JSON.stringify(obj))
    // }
  })

  return (
    <div className="h-full bg-gradient-to-tr from-gray-500 to-gray-100 p-10 ">
      <div className="flex items-center ">
      <Image width='100' height='100' src="/logo2.png" alt="logo" className="top-0 left-0"/>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-red-600 md:text-5xl lg:text-1 "> Diagnóstico inicial de búsqueda de empleo.
      </h1>
      </div>
      <p className="mb-6 text-lg font-normal text-blue-800 lg:text-xl">Por  favor  contesta con la mayor honestidad posible sobre tu situación en este momento para poder hacer el mejor diagnóstico posible y darte propuestas solamente con  los servicios que  realmente necesitas. De antemano gracias.</p>
      <form onSubmit={handleSubmit}>

        <div className="grid gap-6 mb-6 md:grid-cols-2">

          {/* correo */}
          <div>
            <label htmlFor="correo" className="block mb-2 text-lg font-medium text-gray-900">Dirección de correo electrónico *</label>
            <input onChange={handleChange} type="email" id="correo" name="correo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={storage?.datos_personales.correo} required />
          </div>

          {/* Nombre completo */}
          <div>
            <label htmlFor="nombre_completo" className="block mb-2 text-lg font-medium text-gray-900">Nombre completo *</label>
            <input onChange={handleChange} type="text" id="nombre_completo" placeholder='Nombre Completo' name="nombre_completo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={storage?.datos_personales.nombre_completo} required />
          </div>

          {/* numero_telefonico */}
          <div>
            <label htmlFor="numero_telefonico" className="block mb-2 text-lg font-medium text-gray-900">Número telefónico (con lada) *</label>
            <input onChange={handleChange} type="number" id="numero_telefonico" name="numero_telefonico" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" defaultValue={storage?.datos_personales.numero_telefonico} required />
          </div>

          {/* ciudad-país */}
          <div>
            <label htmlFor="ciudad_país" className="block mb-2 text-lg font-medium text-gray-900">Ciudad y país. *</label>
            <input onChange={handleChange} type="text" id="ciudad_pais" name="ciudad_pais" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ciudad y país." pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" defaultValue={storage?.datos_personales.numero_telefonico} required />
          </div>

          {/* fecha_de_nacimiento */}
          <div>
            <label htmlFor="fecha_de_nacimiento" className="block mb-2 text-lg font-medium text-gray-900">Fecha de nacimiento*</label>
            <input onChange={handleChange} type="date" id="fecha_de_nacimiento" name="fecha_de_nacimiento" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="dia/mes/año" defaultValue={storage?.datos_personales.fecha_de_nacimiento} required />
          </div>

          {/* edad */}
          <div>
            <label htmlFor="edad" className="block mb-2 text-lg font-medium text-gray-900">Edad *</label>
            <input onChange={handleChange} type="number" id="edad" placeholder='Edad' name="edad" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={storage?.datos_personales.edad} required />
          </div>

          {/* ¿Qué puesto o empleo buscas? * */}
          <div>
            <label htmlFor="Qué_puesto_o_empleo_buscas" className="block mb-2 text-lg font-medium text-gray-900">¿Qué puesto o empleo buscas? *</label>
            <input onChange={handleChange} type="text" id="Qué_puesto_o_empleo_buscas" name="Qué_puesto_o_empleo_buscas" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" defaultValue={storage?.datos_personales.Qué_puesto_o_empleo_buscas} required />
          </div>

          {/* ¿En qué tipo área o departamentos te interesa trabajar?  */}
          <div>
            <label htmlFor="En_qué_tipo_área_o_departamentos_te_interesa_trabajar" className="block mb-2 text-lg font-medium text-gray-900">¿En qué tipo área o departamentos te interesa trabajar?  *</label>
            <input onChange={handleChange} type="text" id="En_qué_tipo_área_o_departamentos_te_interesa_trabajar" name="En_qué_tipo_área_o_departamentos_te_interesa_trabajar" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={storage?.datos_personales.En_qué_tipo_área_o_departamentos_te_interesa_trabajar} required />
          </div>

          {/* ¿En qué tipo área o departamentos te interesa trabajar?  */}
          <div>
            <label htmlFor="En_qué_tipo_de__empresa_te_ves_desarrollándote_profesionalmente" className="block mb-2 text-lg font-medium text-gray-900">¿En qué tipo de  empresa te ves desarrollándote profesionalmente? *</label>
            <input onChange={handleChange} type="text" id="En_qué_tipo_de__empresa_te_ves_desarrollándote_profesionalmente" name="En_qué_tipo_de__empresa_te_ves_desarrollándote_profesionalmente" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={storage?.datos_personales.En_qué_tipo_de__empresa_te_ves_desarrollándote_profesionalmente} required />
          </div>

          {/* Cuánto tiempo llevas desempleado */}
          <div className="mb-6">
            <label htmlFor="Cuánto_tiempo_llevas_desempleado" className="block mb-2 text-lg font-medium text-gray-900">¿Cuánto tiempo llevas desempleado (a)? *</label>
            <input onChange={handleChange} type="text" id="Cuánto_tiempo_llevas_desempleado" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={storage?.datos_personales.Cuánto_tiempo_llevas_desempleado} required />
          </div>

          {/* Cómo_te_sientes_en_esta_búsqueda_de_empleo */}
          <div>
            <label htmlFor="Cómo_te_sientes_en_esta_búsqueda_de_empleo" className="block mb-2 text-lg font-medium text-gray-900">¿Cómo te sientes en esta búsqueda de empleo?  Puedes elegir varias opciones. *</label>

            {/* Motivado */}
            <div className="flex items-center">
              <input onChange={handleChangeChecbox} id="Cómo_te_sientes_en_esta_búsqueda_de_empleo" type="checkbox" value="Motivado" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" defaultChecked={results.Cómo_te_sientes_en_esta_búsqueda_de_empleo.includes("Motivado") ? true : false} />
              <label htmlFor="Motivado" className="ml-2 text-sm font-medium text-gray-900">Motivado (a).</label>
            </div>

            {/* Enojado */}
            <div className="flex items-center">
              <input onChange={handleChangeChecbox} defaultChecked={results.Cómo_te_sientes_en_esta_búsqueda_de_empleo.includes("Enojado") ? true : false} id="Cómo_te_sientes_en_esta_búsqueda_de_empleo" type="checkbox" value="Enojado" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="Enojado" className="ml-2 text-sm font-medium text-gray-900">Enojado (a).</label>
            </div>

            {/* Desesperado */}
            <div className="flex items-center">
              <input onChange={handleChangeChecbox} defaultChecked={results.Cómo_te_sientes_en_esta_búsqueda_de_empleo.includes("Desesperado") ? true : false} id="Cómo_te_sientes_en_esta_búsqueda_de_empleo" type="checkbox" value="Desesperado" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="Desesperado" className="ml-2 text-sm font-medium text-gray-900">Desesperado (a).</label>
            </div>

            {/* Entusiasta */}
            <div className="flex items-center">
              <input onChange={handleChangeChecbox} defaultChecked={results.Cómo_te_sientes_en_esta_búsqueda_de_empleo.includes("Entusiasta") ? true : false} id="Cómo_te_sientes_en_esta_búsqueda_de_empleo" type="checkbox" value="Entusiasta" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="Entusiasta" className="ml-2 text-sm font-medium text-gray-900">Entusiasta.</label>
            </div>

            {/* Otro */}
            <div>
              <label htmlFor="otro" className="block mb-2 text-lg font-medium text-gray-900">Otro.</label>
              <input name="Cómo_te_sientes_en_esta_búsqueda_de_empleo" type="text" id="Cómo_te_sientes_en_esta_búsqueda_de_empleo" placeholder="especificar..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            </div>
          </div>

          {/* ¿Qué buscas en un empleo?  */}

          <div>
            <label htmlFor="Qué_buscas_en_un_empleo" className="block mb-2 text-lg font-medium text-gray-900">¿Qué buscas en un empleo? Puedes escoger varias. *</label>

            {/* Aprender */}
            <div className="flex items-center">
              <input onChange={handleChangeChecbox} defaultChecked={results.Qué_buscas_en_un_empleo.includes("Aprender") ? true : false} name="Qué_buscas_en_un_empleo" id="Qué_buscas_en_un_empleo" type="checkbox" value="Aprender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="Aprender" className="ml-2 text-sm font-medium text-gray-900">Aprender.</label>
            </div>

            {/* Crecer profesionalmente */}
            <div className="flex items-center">
              <input onChange={handleChangeChecbox} defaultChecked={results.Qué_buscas_en_un_empleo.includes("Crecer_profesionalmente") ? true : false} name="Qué_buscas_en_un_empleo" id="Qué_buscas_en_un_empleo" type="checkbox" value="Crecer_profesionalmente" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="Crecer_profesionalmente" className="ml-2 text-sm font-medium text-gray-900">Crecer profesionalmente.</label>
            </div>

            {/* Mejor sueldo */}
            <div className="flex items-center">
              <input onChange={handleChangeChecbox} defaultChecked={results.Qué_buscas_en_un_empleo.includes("Mejor_sueldo") ? true : false} name="Qué_buscas_en_un_empleo" id="Qué_buscas_en_un_empleo" type="checkbox" value="Mejor_sueldo" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="Mejor_sueldo" className="ml-2 text-sm font-medium text-gray-900">Mejor sueldo.</label>
            </div>

            {/* Mejor ambiente laboral */}
            <div className="flex items-center">
              <input onChange={handleChangeChecbox} defaultChecked={results.Qué_buscas_en_un_empleo.includes("Mejor_ambiente_laboral") ? true : false} name="Qué_buscas_en_un_empleo" id="Qué_buscas_en_un_empleo" type="checkbox" value="Mejor_ambiente_laboral" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="Mejor_ambiente_laboral" className="ml-2 text-sm font-medium text-gray-900">Mejor ambiente laboral.</label>
            </div>

            {/* Mejores prestaciones */}
            <div className="flex items-center">
              <input onChange={handleChangeChecbox} defaultChecked={results.Qué_buscas_en_un_empleo.includes("Mejores_prestaciones") ? true : false} name="Qué_buscas_en_un_empleo" id="Qué_buscas_en_un_empleo" type="checkbox" value="Mejores_prestaciones" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="Mejores_prestaciones" className="ml-2 text-sm font-medium text-gray-900">Mejores prestaciones.</label>
            </div>

            {/* Cambio de giro */}
            <div className="flex items-center">
              <input onChange={handleChangeChecbox} defaultChecked={results.Qué_buscas_en_un_empleo.includes("Cambio_de_giro") ? true : false} name="Qué_buscas_en_un_empleo" id="Qué_buscas_en_un_empleo" type="checkbox" value="Cambio_de_giro" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="Cambio_de_giro" className="ml-2 text-sm font-medium text-gray-900">Cambio de giro.</label>
            </div>

            {/* Estabilidad */}
            <div className="flex items-center">
              <input onChange={handleChangeChecbox} defaultChecked={results.Qué_buscas_en_un_empleo.includes("Estabilidad") ? true : false} name="Qué_buscas_en_un_empleo" id="Qué_buscas_en_un_empleo" type="checkbox" value="Estabilidad" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="Estabilidad" className="ml-2 text-sm font-medium text-gray-900">Estabilidad.</label>
            </div>

            {/* Otro */}
            <div>
              <label htmlFor="otro" className="block mb-2 text-lg font-medium text-gray-900">Otro.</label>
              <input onChange={handleChangeChecbox} type="text" name="Qué_buscas_en_un_empleo" id="Qué_buscas_en_un_empleo" placeholder="especificar..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-5">
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Siguiente</button>
        </div>
      </form>
    </div>
  )
}