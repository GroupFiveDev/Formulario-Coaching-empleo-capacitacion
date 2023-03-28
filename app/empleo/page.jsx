'use client'
import { useEffect, useState } from "react";

export default function EmpleoPage() {
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


  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Entrevista laboral</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              We'll always let you know about important changes, but you pick what else you want to hear about.
            </p>

            {/* pregunta 1 */}
            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                ¿Tienes perfil de Linkedin? 
                </legend>
                <div className="mt-6 space-y-6">

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
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="pregunta1b" className="font-medium text-gray-900">
                        No
                      </label>
                      {results.Pregunta1 === "no" && <p className="text-gray-500">
                      Hay ciertos perfiles profesionales (operativos o algunos técnicos) para los que no es necesario tener un perfil de Linkedin pero si  el tuyo sí lo es y no  lo tienes, considera abrir uno. 
                      </p>}
                    </div>
                  </div>
                </div>
              </fieldset>

            </div>

            {/* pregunta 2 */}
            <div className="mt-10 space-y-10">
              <fieldset>

                <legend className="text-sm font-semibold leading-6 text-gray-900">
                 ¿Tu perfil de Linkedin está actualizado? 
                </legend>

                <div className="mt-6 space-y-6">
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
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="Pregunta2" className="font-medium text-gray-900">
                        No
                      </label>
                      {results.Pregunta2 === "no" && <p className="text-gray-500">
                      No solamente necesitas tener un perfil que te venda y esté actualizado (con tu foto e información). Normalmente, después de haber  trabajado con tu C.V. ya es más  fácil que utilices tu perfil y tus logros bien redactados para mejorar tu Linkedin.
                      </p>}

                    </div>
                  </div>
                </div>
              </fieldset>

            </div>

            {/* pregunta 3 */}
            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                ¿Eres miembro activo en Linkedin? Lo revisas y/o publicas al menos 3 veces por semana.
                </legend>
                <div className="mt-6 space-y-6">

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
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="Pregunta3" className="font-medium text-gray-900">
                        No
                      </label>
                      {results.Pregunta3 === "no" && <p className="text-gray-500">
                      Si no revisas tu perfil, no publicas, no contactas con nadie, de nada sirve que lo tengas actualizado. Es como tener una herramienta guardada y no ocuparla.
                      </p>}

                    </div>
                  </div>
                </div>
              </fieldset>

            </div>

            {/* pregunta 4 */}
            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                ¿Eres visible en Linkedin? Es decir, ¿te piden contactar contigo y has incrementado tu lista de contactos?
                </legend>
                <div className="mt-6 space-y-6">

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
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="Pregunta4" className="font-medium text-gray-900">
                        No
                      </label>
                      {results.Pregunta4 === "no" && <p className="text-gray-500">
                      Si no contactas de manera deliberada con personas que te ayuden a conseguir el empleo que quieres y no estás incrementando tu red, entonces no estás ocupando tu perfil de manera adecuada para cumplir  tu objetivo, debes tener una actitud más activa frente a tu búsqueda de empleo.
                      </p>}

                    </div>
                  </div>
                </div>
              </fieldset>

            </div>

            {/* pregunta 5 */}
            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                 ¿Sabes usar Linkedin para buscar empleo? 
                </legend>
                <div className="mt-6 space-y-6">

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
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="Pregunta5" className="font-medium text-gray-900">
                        No
                      </label>
                      {results.Pregunta5 === "no" && <p className="text-gray-500">
                      Si no sabes qué debes hacer para estar más visible  para  los reclutadores y/ o lo sabes pero no lo estás  haciendo,  ahí tienes una gran área de oportunidad.
                      </p>}
                    </div>
                  </div>
                </div>
              </fieldset>

            </div>

          </div>
        </div>
      </div>
    </form>
  )
}


