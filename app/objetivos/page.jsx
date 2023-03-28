'use client'
import { useEffect, useState } from "react";

export default function ObjetivosPage() {
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
      storage.cv.results[e.target.name] = e.target.value
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
                  ¿Consideras que tu C.V. te ayuda a vender lo mejor de ti? Es decir, te ayuda a conseguir entrevistas. *
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
                        defaultChecked={storage?.cv.results.Pregunta1 === "si" ? true : ""}
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
                        defaultChecked={storage?.cv.results.Pregunta1 === "no" ? true : ""}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="pregunta1b" className="font-medium text-gray-900">
                        No
                      </label>
                      {results.Pregunta1 === "no" && <p className="text-gray-500">
                        Si estás mandando tu C.V. y no te están llamando a entrevistas es porque  tal vez no estás utilizando un C.V. específico sino uno general (con toda tu experiencia) y/o no estás poniendo la información que le interesa al reclutador saber de ti.
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
                  ¿Tu C.V. consta de una cuartilla (dos, si tienes nivel gerencial o directivo)? *
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
                        defaultChecked={storage?.cv.results.Pregunta2 === "si" ? true : ""}
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
                        defaultChecked={storage?.cv.results.Pregunta2 === "no" ? true : ""}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="Pregunta2" className="font-medium text-gray-900">
                        No
                      </label>
                      {results.Pregunta2 === "no" && <p className="text-gray-500">
                        Si tu C.V. tiene  tres cuartillas o más es demasiado largo para lo que se considera hoy profesional. Si tienes nivel gerencial y/o directivo puede tener máximo dos cuartillas, si no, una sola hoja es más que suficiente para vender lo mejor de ti.
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
                  ¿Tu C.V. contiene tus mejores logros y fortalezas? *
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
                        defaultChecked={storage?.cv.results.Pregunta3 === "si" ? true : ""}
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
                        defaultChecked={storage?.cv.results.Pregunta3 === "no" ? true : ""}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="Pregunta3" className="font-medium text-gray-900">
                        No
                      </label>
                      {results.Pregunta3 === "no" && <p className="text-gray-500">
                        Si en tu currículum hay funciones o actividades en lugar de logros bien redactados, eso es un error muy común; y si además no contiene  tus mejores fortalezas, no lo estás aprovechando al máximo.
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
                  ¿Sabes cómo adaptar tu C.V. a una vacante de tu interés? *
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
                        defaultChecked={storage?.cv.results.Pregunta4 === "si" ? true : ""}
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
                        defaultChecked={storage?.cv.results.Pregunta4 === "no" ? true : ""}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="Pregunta4" className="font-medium text-gray-900">
                        No
                      </label>
                      {results.Pregunta4 === "no" && <p className="text-gray-500">
                        Si no sabes cómo adaptar tu C.V. a una vacante de tu interés, no estás ni siquiera entrando al proceso de reclutamiento; si lo haces bien y cubres el perfil de la vacante puedes ser considerado (a) en el proceso de selección e inclusive ser parte de la terna final.
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
                  ¿Sabes cómo redactar una carta de presentación que llame la atención de manera positiva a quien se la envíes? *
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
                        defaultChecked={storage?.cv.results.Pregunta5 === "si" ? true : ""}
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
                        defaultChecked={storage?.cv.results.Pregunta5 === "no" ? true : ""}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="Pregunta5" className="font-medium text-gray-900">
                        No
                      </label>
                      {results.Pregunta5 === "no" && <p className="text-gray-500">
                        Si copias y pegas el mismo texto en el correo para cualquier persona a la que le mandas tu currículum y si no redactas una carta de presentación INTERESANTE para quien la recibe, es muy factible que ni siquiera estén abriendo tu C.V. que va como archivo adjunto.
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

