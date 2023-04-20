'use client'
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Image from 'next/image'

export default function EmpleoPage() {

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
      storage.empleo.results[e.target.name] = e.target.value
      localStorage.setItem("form", JSON.stringify(storage))
    }
  }

  useEffect(() => {
    const obj = {
      datos_personales: {
        correo: "",
        nombre_completo: "",
        numero_telefonico: "",
        ciudad_pais: "",
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
    router.push("/linkedin");
  }

  return (
    <div className="h-full bg-gradient-to-tr from-gray-500 to-gray-100 p-10">
      <form onSubmit={handleSubmit}>
        <Image width='100' height='100' src="/logo2.png" alt="logo" className="position: absolute top-0 left-0" />
        <div className="space-y-12">
          <div className="flex flex-col items-center text-center border-gray-900/10">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-blue-800 md:text-5xl lg:text-1">Búsqueda de empleo</h1>
            <div className="border-gray-900/10 pb-12">
              {/* pregunta 1 */}
              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-lg font-semibold leading-6 text-gray-900">
                    ¿Sabes cuál es tu empleo ideal actual? *
                  </legend>
                  <div className="mt-6 space-y-6 flex flex-col items-center">

                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="Pregunta1A"
                          name="Pregunta1"
                          type="radio"
                          value="Sí."
                          onChange={handleChange}
                          defaultChecked={storage?.empleo.results.Pregunta1 === "Sí." ? true : ""}
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
                          value="No."
                          onChange={handleChange}
                          defaultChecked={storage?.empleo.results.Pregunta1 === "No." ? true : ""}
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
                    {results.Pregunta1 === "No." && <p className="text-blue-800">
                      Es importante saber qué es lo que quieres y para ello definimos tu empleo ideal actual objetivo con 12 variables y también de manera subjetiva, estos elementos  te permitirán evaluar las propuestas laborales que se te vayan presentando en tu proceso de búsqueda.
                    </p>}
                  </div>
                </fieldset>

              </div>

              {/* pregunta 2 */}
              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-lg font-semibold leading-6 text-gray-900">
                    ¿Tienes un objetivo y un plan de búsqueda de empleo? *
                  </legend>

                  <div className="mt-6 space-y-6 flex flex-col items-center">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="Pregunta2A"
                          name="Pregunta2"
                          type="radio"
                          value="Sí."
                          onChange={handleChange}
                          defaultChecked={storage?.empleo.results.Pregunta2 === "Sí." ? true : ""}
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
                          value="No."
                          onChange={handleChange}
                          defaultChecked={storage?.empleo.results.Pregunta2 === "No." ? true : ""}
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
                    {results.Pregunta2 === "No." && <p className="text-blue-800">
                      Una vez definido tu empleo ideal actual, lo que sigue es ponerte un objetivo claro en tiempo, qué y cómo vas a hacer para conseguirlo con un plan.  En el coaching de búsqueda de empleo te daré un plan de 14 días de preparación para que sepas todo lo que debes de considerar y hacerlo de ahí en adelante hasta ser contratado (a).
                    </p>}
                  </div>
                </fieldset>

              </div>

              {/* pregunta 3 */}
              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-lg font-semibold leading-6 text-gray-900">
                    ¿Sabes cómo usar tu networking (red de contactos) para buscar empleo? *
                  </legend>
                  <div className="mt-6 space-y-6 flex flex-col items-center">

                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="Pregunta3A"
                          name="Pregunta3"
                          type="radio"
                          value="Sí."
                          onChange={handleChange}
                          defaultChecked={storage?.empleo.results.Pregunta3 === "Sí." ? true : ""}
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
                          value="No."
                          onChange={handleChange}
                          defaultChecked={storage?.empleo.results.Pregunta3 === "No." ? true : ""}
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
                    {results.Pregunta3 === "No." && <p className="text-blue-800">
                      La mejor fuente de  búsqueda de empleo es tu red de contactos pero si no la estás  usando o lo estás haciendo de manera ineficiente, no te dará  los resultados correctos.
                    </p>}
                  </div>
                </fieldset>

              </div>

              {/* pregunta 4 */}
              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-lg font-semibold leading-6 text-gray-900">
                    ¿Sabes dónde buscar empleo? (diferentes fuentes, no sólo las bolsas de trabajo)? *
                  </legend>
                  <div className="mt-6 space-y-6 flex flex-col items-center">

                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="Pregunta4A"
                          name="Pregunta4"
                          type="radio"
                          value="Sí."
                          onChange={handleChange}
                          defaultChecked={storage?.empleo.results.Pregunta4 === "Sí." ? true : ""}
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
                          value="No."
                          onChange={handleChange}
                          defaultChecked={storage?.empleo.results.Pregunta4 === "No." ? true : ""}
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
                    {results.Pregunta4 === "No." && <p className="text-blue-800">
                      La mayoría de las personas que buscan empleo únicamente consideran darse de alta en bolsas de trabajo y postularse a vacantes con un C.V. general,  sin poderle dar seguimiento y no se enfocan en otras fuentes más efectivas.
                    </p>}
                  </div>
                </fieldset>

              </div>

              {/* pregunta 5 */}
              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-lg font-semibold leading-6 text-gray-900">
                    ¿Has hecho un estudio FODA personal y lo ocupas para vender tus fortalezas en tu currrículum y entrevista? *
                  </legend>
                  <div className="mt-6 space-y-6 flex flex-col items-center">

                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="Pregunta5A"
                          name="Pregunta5"
                          type="radio"
                          value="Sí."
                          onChange={handleChange}
                          defaultChecked={storage?.empleo.results.Pregunta5 === "Sí." ? true : ""}
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
                          value="No."
                          onChange={handleChange}
                          defaultChecked={storage?.empleo.results.Pregunta5 === "No." ? true : ""}
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
                    {results.Pregunta5 === "No." && <p className="text-blue-800">
                      Si no has hecho un estudio FODA, te recomiendo que lo hagas para que  identifiques las fortalezas que venderás en tu C.V. (nunca en lista) y en tu entrevista laboral.
                    </p>}
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="flex justify-center gap-5">
              {/* <button type="button" onClick={() => router.push("/entrevista")} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Atras</button> */}
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Siguiente</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}


