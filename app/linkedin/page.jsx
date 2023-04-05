'use client'
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Image from 'next/image'

export default function LinkedinPage() {

  const router = useRouter();

  let storage
  if (process.browser) {
    storage = JSON.parse(localStorage.getItem("form"))
  }

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
      storage.linkedin.results[e.target.name] = e.target.value
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

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/objetivos");
  }

  return (
    <div className="h-full bg-gradient-to-tr from-gray-500 to-gray-100 p-10">
    <form onSubmit={handleSubmit}>
    <Image width='100' height='100' src="/logo2.png" alt="logo" className="position: fixed top-0 left-0"/>
      <div className="space-y-12">
        <div className="flex flex-col items-center text-center border-gray-900/10">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-blue-800 md:text-5xl lg:text-1">Linkedin</h1>
          <div className="border-gray-900/10 pb-12">
            {/* pregunta 1 */}
            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-lg font-semibold leading-6 text-gray-900">
                  ¿Tienes perfil de Linkedin? *
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
                        defaultChecked={storage?.linkedin.results.Pregunta1 === "si" ? true : ""}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        required
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="pregunta1a" className="font-medium text-gray-900">
                        Si
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
                        defaultChecked={storage?.linkedin.results.Pregunta1 === "no" ? true : ""}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        required
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="pregunta1b" className="font-medium text-gray-900">
                        No
                      </label>
                    </div>
                  </div>
                      {results.Pregunta1 === "no" && <p className="text-blue-800">
                        Hay ciertos perfiles profesionales (operativos o algunos técnicos) para los que no es necesario tener un perfil de Linkedin pero si  el tuyo sí lo es y no  lo tienes, considera abrir uno.

                      </p>}
                </div>
              </fieldset>

            </div>

            {/* pregunta 2 */}
            <div className="mt-10 space-y-10">
              <fieldset>

                <legend className="text-lg font-semibold leading-6 text-gray-900">
                  ¿Tu perfil de Linkedin está actualizado? *
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
                        defaultChecked={storage?.linkedin.results.Pregunta2 === "si" ? true : ""}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        required
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="Pregunta2" className="font-medium text-gray-900">
                        Si
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
                        defaultChecked={storage?.linkedin.results.Pregunta2 === "no" ? true : ""}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        required
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="Pregunta2" className="font-medium text-gray-900">
                        No
                      </label>

                    </div>
                  </div>
                      {results.Pregunta2 === "no" && <p className="text-blue-800">
                        No solamente necesitas tener un perfil que te venda y esté actualizado (con tu foto e información). Normalmente, después de haber  trabajado con tu C.V. ya es más  fácil que utilices tu perfil y tus logros bien redactados para mejorar tu Linkedin.
                      </p>}
                </div>
              </fieldset>

            </div>

            {/* pregunta 3 */}
            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-lg font-semibold leading-6 text-gray-900">
                  ¿Eres miembro activo en Linkedin? Lo revisas y/o publicas al menos 3 veces por semana. *
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
                        defaultChecked={storage?.linkedin.results.Pregunta3 === "si" ? true : ""}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        required
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="Pregunta3" className="font-medium text-gray-900">
                        Si
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
                        defaultChecked={storage?.linkedin.results.Pregunta3 === "no" ? true : ""}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        required
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="Pregunta3" className="font-medium text-gray-900">
                        No
                      </label>

                    </div>
                  </div>
                      {results.Pregunta3 === "no" && <p className="text-blue-800">
                        Si no revisas tu perfil, no publicas, no contactas con nadie, de nada sirve que lo tengas actualizado. Es como tener una herramienta guardada y no ocuparla.

                      </p>}
                </div>
              </fieldset>

            </div>

            {/* pregunta 4 */}
            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-lg font-semibold leading-6 text-gray-900">
                  ¿Eres visible en Linkedin? Es decir, ¿te piden contactar contigo y has incrementado tu lista de contactos? *
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
                        defaultChecked={storage?.linkedin.results.Pregunta4 === "si" ? true : ""}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        required
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="Pregunta4" className="font-medium text-gray-900">
                        Si
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
                        defaultChecked={storage?.linkedin.results.Pregunta4 === "no" ? true : ""}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        required
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="Pregunta4" className="font-medium text-gray-900">
                        No
                      </label>

                    </div>
                  </div>
                      {results.Pregunta4 === "no" && <p className="text-blue-800">
                        Si no contactas de manera deliberada con personas que te ayuden a conseguir el empleo que quieres y no estás incrementando tu red, entonces no estás ocupando tu perfil de manera adecuada para cumplir  tu objetivo, debes tener una actitud más activa frente a tu búsqueda de empleo.

                      </p>}
                </div>
              </fieldset>

            </div>

            {/* pregunta 5 */}
            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-lg font-semibold leading-6 text-gray-900">
                  ¿Sabes usar Linkedin para buscar empleo? *
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
                        defaultChecked={storage?.linkedin.results.Pregunta5 === "si" ? true : ""}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        required
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="Pregunta5" className="font-medium text-gray-900">
                        Si
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
                        defaultChecked={storage?.linkedin.results.Pregunta5 === "no" ? true : ""}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        required
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="Pregunta5" className="font-medium text-gray-900">
                        No
                      </label>
                    </div>
                  </div>
                      {results.Pregunta5 === "no" && <p className="text-blue-800">
                        Si no sabes qué debes hacer para estar más visible  para  los reclutadores y/ o lo sabes pero no lo estás  haciendo,  ahí tienes una gran área de oportunidad.
                      </p>}
                </div>
              </fieldset>

            </div>

          </div>
          <div className="flex justify-center gap-5">
            <button type="button" onClick={() => router.push("/empleo")} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Atras</button>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Siguiente</button>
          </div>
        </div>
      </div>
    </form>
    </div>
  )
}

