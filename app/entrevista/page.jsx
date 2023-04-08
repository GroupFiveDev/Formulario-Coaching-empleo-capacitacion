'use client'
import { useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image'



export default function EntrevistaPage() {
  const router = useRouter()
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
      storage.entrevista.results[e.target.name] = e.target.value
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

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/empleo");
  }

  return (
    <div className="h-full bg-gradient-to-tr from-gray-500 to-gray-100 p-10">
    <form onSubmit={handleSubmit}>
          <Image width='100' height='100' src="/logo2.png" alt="logo" className="position: fixed top-0 left-0"/>
      <div className="space-y-12">
        <div className="flex flex-col items-center text-center border-gray-900/10">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-blue-800 md:text-5xl lg:text-1">Entrevista laboral</h1>
          <div className="border-gray-900/10 pb-12">
            {/* pregunta 1 */}
            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-lg font-semibold leading-6 text-gray-900">
                  ¿Sabes qué debes hacer antes, durante y después de una entrevista laboral?
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
                        defaultChecked={storage?.entrevista.results.Pregunta1 === "si" ? true : ""}
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
                        defaultChecked={storage?.entrevista.results.Pregunta1 === "no" ? true : ""}
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
                        Si no sabes qué hacer en alguno de estos tiempos,  en el coaching  de Preparación de entrevista laboral te explico 45 actividades  específicas que debes de llevar a cabo antes, durante y después;  tal vez, no estés llevando a cabo varias de ellas.
                      </p>}
                </div>
              </fieldset>

            </div>

            {/* pregunta 2 */}
            <div className="mt-10 space-y-10">
              <fieldset>

                <legend className="text-lg font-semibold leading-6 text-gray-900">
                  ¿Logras mantenerte en el proceso de selección después de una entrevista?
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
                        defaultChecked={storage?.entrevista.results.Pregunta2 === "si" ? true : ""}
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
                        defaultChecked={storage?.entrevista.results.Pregunta2 === "no" ? true : ""}
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
                        Es posible que estés teniendo errores en tus lenguajes, contestaste de manera inadecuada,   te  faltó venderte como el /la  mejor candidato (a) posible o alguna otra razón que no te estás percatando. Podemos saberlo a través de una simulación de entrevista.
                      </p>}
                </div>
              </fieldset>

            </div>

            {/* pregunta 3 */}
            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-lg font-semibold leading-6 text-gray-900">
                  ¿Sientes confianza al contestar las preguntas del reclutador?
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
                        defaultChecked={storage?.entrevista.results.Pregunta3 === "si" ? true : ""}
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
                        defaultChecked={storage?.entrevista.results.Pregunta3 === "no" ? true : ""}
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
                        Si no tienes confianza, en el coaching de preparación te compartiré  un archivo con las  50 preguntas más comunes de una entrevista laboral para que las contestes todas, elijas las 10 más complicadas para ti y  trabajaremos con ellas en una parte de la sesión.  Además, te enseñaré a contestar de manera adecuada a cualquier pregunta que te hagan.
                      </p>}
                </div>
              </fieldset>

            </div>

            {/* pregunta 4 */}
            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-lg font-semibold leading-6 text-gray-900">
                  ¿Realizas el seguimiento correspondiente después de la entrevista?
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
                        defaultChecked={storage?.entrevista.results.Pregunta4 === "si" ? true : ""}
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
                        defaultChecked={storage?.entrevista.results.Pregunta4 === "no" ? true : ""}
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
                        Es importante que después de la entrevista le des seguimiento constante a los procesos en los que estés participando (de manera activa - proactiva) y no te esperes a que te llamen para darte alguna respuesta (eso es reactivo- pasivo).
                      </p>}
                </div>
              </fieldset>

            </div>

            {/* pregunta 5 */}
            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-lg font-semibold leading-6 text-gray-900">
                  ¿Eres consciente de tus lenguajes verbal, paraverbal y corporal, durante la entrevista?
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
                        defaultChecked={storage?.entrevista.results.Pregunta5 === "si" ? true : ""}
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
                        defaultChecked={storage?.entrevista.results.Pregunta5 === "no" ? true : ""}
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
                        En la entrevista laboral, no solamente es importante contestar de manera adecuada (lo que dices) sino cómo lo dices (calidad y cualidad de tu voz), los gestos que  haces con tu cara y la postura de tu cuerpo.  Es posible que si no los estás usando de manera consciente entonces estén jugando en tu contra.
                      </p>}
                </div>
              </fieldset>

            </div>

          </div>
          <div className="flex justify-center gap-5">
            <button type="button" onClick={() => router.push("/cv")} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Atras</button>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Siguiente</button>
          </div>
        </div>
      </div>
    </form>
    </div>
  )
}

//Para  la gráfica:
//•	Cada pregunta  vale  20 puntos  si contesta “SÍ”, dando un total de 100 puntos (100%).
//•	Si contesta   NO en la pregunta 6  recomendarle el :Coaching de Preparación de Entrevista Laboral.
//•	Sí  contesta de 20  a 60  (3 preguntas) incluir en la propuesta el: Coaching de Preparación de Entrevista Laboral.
//•	Si contesta 80 (4 preguntas) incluir en la propuesta: Coaching de Simulación de entrevista laboral.
//•	Si contesta 100 %  Sí (5 preguntas)  poner: ¡Felicidades, este es un tema que ya tienes dominado!
