'use client'
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import emailjs from 'emailjs-com';
import puntuacion from "../grafica/puntuacion";
import Image from 'next/image'

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
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push("/grafica");
    const templateParams = {
      to: storage?.datos_personales.correo,
      name: storage?.datos_personales.nombre_completo,
      cv: amount?.cv -1,
      entrevista: amount?.entrevista -1,
      empleo: amount?.empleo -1,
      linkedin: amount?.linkedin -1,
      objetivos: amount?.objetivos -1,
    }
    emailjs.send("service_mt30tnq", "template_iu00azr", templateParams, "c-_sUDTDmZAJi6E_o")
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });

  }

  return (
    <div className="h-full bg-gradient-to-tr from-gray-500 to-gray-100 p-10">
    <form onSubmit={handleSubmit}>
    <Image width='100' height='100' src="/logo2.png" alt="logo" className="position: fixed top-0 left-0"/>
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

