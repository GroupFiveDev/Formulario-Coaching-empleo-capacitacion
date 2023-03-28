'use client'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from "react";

export default function HomePage() {
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
      datos_personales: {
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

  return (
    // <form>
    //   <div className="space-y-12">
    //     <div className="border-b border-gray-900/10 pb-12">
    //       <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
    //       <p className="mt-1 text-sm leading-6 text-gray-600">
    //         This information will be displayed publicly so be careful what you share.
    //       </p>

    //       {/* correo */}
    //       <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    //         <div className="sm:col-span-4">
    //           <label htmlFor="correo" className="block text-sm font-medium leading-6 text-gray-900">
    //             Dirección de correo electrónico *
    //           </label>
    //           <div className="mt-2">
    //             <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
    //               <input
    //                 type="text"
    //                 name="correo"
    //                 id="correo"
    //                 className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
    //               />
    //             </div>
    //           </div>
    //         </div>

    //         {/* Nombre completo */}
    //         <div className="sm:col-span-4">
    //           <label htmlFor="nombre_completo" className="block text-sm font-medium leading-6 text-gray-900">
    //             Nombre completo *
    //           </label>
    //           <div className="mt-2">
    //             <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
    //               <input
    //                 type="text"
    //                 name="nombre_completo"
    //                 id="nombre_completo"
    //                 className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
    //               />
    //             </div>
    //           </div>
    //         </div>

    //         {/* numero_telefonico */}
    //         <div className="sm:col-span-4">
    //           <label htmlFor="numero_telefonico" className="block text-sm font-medium leading-6 text-gray-900">
    //             Número telefónico (con lada), especificando ciudad y país. *
    //           </label>
    //           <div className="mt-2">
    //             <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
    //               <input
    //                 type="text"
    //                 name="numero_telefonico"
    //                 id="numero_telefonico"
    //                 className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
    //               />
    //             </div>
    //           </div>
    //         </div>

    //         {/* fecha_de_nacimiento */}
    //         <div className="sm:col-span-4">
    //           <label htmlFor="numero_telefonico" className="block text-sm font-medium leading-6 text-gray-900">
    //             Fecha de nacimiento *
    //           </label>
    //           <div className="mt-2">
    //             <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
    //               <input
    //                 type="text"
    //                 name="numero_telefonico"
    //                 id="numero_telefonico"
    //                 className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
    //               />
    //             </div>
    //           </div>
    //         </div>

    //         <div className="col-span-full">
    //           <label htmlFor="numero_telefonico" className="block text-sm font-medium leading-6 text-gray-900">
    //             Número telefónico (con lada), especificando ciudad y país. *
    //           </label>
    //           <div className="mt-2">
    //             <textarea
    //               id="numero_telefonico"
    //               name="numero_telefonico"
    //               className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>

    //         <div className="col-span-full">
    //           <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
    //             Photo
    //           </label>
    //           <div className="mt-2 flex items-center gap-x-3">
    //             <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
    //             <button
    //               type="button"
    //               className="rounded-md bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    //             >
    //               Change
    //             </button>
    //           </div>
    //         </div>

    //         <div className="col-span-full">
    //           <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
    //             Cover photo
    //           </label>
    //           <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
    //             <div className="text-center">
    //               <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
    //               <div className="mt-4 flex text-sm leading-6 text-gray-600">
    //                 <label
    //                   htmlFor="file-upload"
    //                   className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
    //                 >
    //                   <span>Upload a file</span>
    //                   <input id="file-upload" name="file-upload" type="file" className="sr-only" />
    //                 </label>
    //                 <p className="pl-1">or drag and drop</p>
    //               </div>
    //               <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="border-b border-gray-900/10 pb-12">
    //       <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
    //       <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

    //       <div className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6">
    //         <div className="sm:col-span-3">
    //           <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
    //             First name
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               type="text"
    //               name="first-name"
    //               id="first-name"
    //               autoComplete="given-name"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>

    //         <div className="sm:col-span-3">
    //           <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
    //             Last name
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               type="text"
    //               name="last-name"
    //               id="last-name"
    //               autoComplete="family-name"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>

    //         <div className="sm:col-span-4">
    //           <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
    //             Email address
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               id="email"
    //               name="email"
    //               type="email"
    //               autoComplete="email"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>

    //         <div className="sm:col-span-3">
    //           <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
    //             Country
    //           </label>
    //           <div className="mt-2">
    //             <select
    //               id="country"
    //               name="country"
    //               autoComplete="country-name"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
    //             >
    //               <option>United States</option>
    //               <option>Canada</option>
    //               <option>Mexico</option>
    //             </select>
    //           </div>
    //         </div>

    //         <div className="col-span-full">
    //           <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
    //             Street address
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               type="text"
    //               name="street-address"
    //               id="street-address"
    //               autoComplete="street-address"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>

    //         <div className="sm:col-span-2 sm:col-start-1">
    //           <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
    //             City
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               type="text"
    //               name="city"
    //               id="city"
    //               autoComplete="address-level2"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>

    //         <div className="sm:col-span-2">
    //           <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
    //             State / Province
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               type="text"
    //               name="region"
    //               id="region"
    //               autoComplete="address-level1"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>

    //         <div className="sm:col-span-2">
    //           <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
    //             ZIP / Postal code
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               type="text"
    //               name="postal-code"
    //               id="postal-code"
    //               autoComplete="postal-code"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="border-b border-gray-900/10 pb-12">
    //       <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
    //       <p className="mt-1 text-sm leading-6 text-gray-600">
    //         We'll always let you know about important changes, but you pick what else you want to hear about.
    //       </p>

    //       <div className="mt-10 space-y-10">
    //         <fieldset>
    //           <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
    //           <div className="mt-6 space-y-6">
    //             <div className="relative flex gap-x-3">
    //               <div className="flex h-6 items-center">
    //                 <input
    //                   id="comments"
    //                   name="comments"
    //                   type="checkbox"
    //                   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //                 />
    //               </div>
    //               <div className="text-sm leading-6">
    //                 <label htmlFor="comments" className="font-medium text-gray-900">
    //                   Comments
    //                 </label>
    //                 <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
    //               </div>
    //             </div>
    //             <div className="relative flex gap-x-3">
    //               <div className="flex h-6 items-center">
    //                 <input
    //                   id="candidates"
    //                   name="candidates"
    //                   type="checkbox"
    //                   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //                 />
    //               </div>
    //               <div className="text-sm leading-6">
    //                 <label htmlFor="candidates" className="font-medium text-gray-900">
    //                   Candidates
    //                 </label>
    //                 <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
    //               </div>
    //             </div>
    //             <div className="relative flex gap-x-3">
    //               <div className="flex h-6 items-center">
    //                 <input
    //                   id="offers"
    //                   name="offers"
    //                   type="checkbox"
    //                   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //                 />
    //               </div>
    //               <div className="text-sm leading-6">
    //                 <label htmlFor="offers" className="font-medium text-gray-900">
    //                   Offers
    //                 </label>
    //                 <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
    //               </div>
    //             </div>
    //           </div>
    //         </fieldset>
    //         <fieldset>
    //           <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
    //           <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
    //           <div className="mt-6 space-y-6">
    //             <div className="flex items-center gap-x-3">
    //               <input
    //                 id="push-everything"
    //                 name="push-notifications"
    //                 type="radio"
    //                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //               />
    //               <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
    //                 Everything
    //               </label>
    //             </div>
    //             <div className="flex items-center gap-x-3">
    //               <input
    //                 id="push-email"
    //                 name="push-notifications"
    //                 type="radio"
    //                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //               />
    //               <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
    //                 Same as email
    //               </label>
    //             </div>
    //             <div className="flex items-center gap-x-3">
    //               <input
    //                 id="push-nothing"
    //                 name="push-notifications"
    //                 type="radio"
    //                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //               />
    //               <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
    //                 No push notifications
    //               </label>
    //             </div>
    //           </div>
    //         </fieldset>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="mt-6 flex items-center justify-end gap-x-6">
    //     <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
    //       Cancel
    //     </button>
    //     <button
    //       type="submit"
    //       className="rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //     >
    //       Save
    //     </button>
    //   </div>
    // </form>

    <form>
      <div class="grid gap-6 mb-6 md:grid-cols-2">

        {/* correo */}
        <div>
          <label for="correo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dirección de correo electrónico *</label>
          <input type="text" id="correo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        {/* Nombre completo */}
        <div>
          <label for="nombre_completo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre completo *</label>
          <input type="text" id="nombre_completo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        {/* numero_telefonico */}
        <div>
          <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número telefónico (con lada), especificando ciudad y país. *</label>
          <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>

        {/* fecha_de_nacimiento */}
        <div>
          <label for="fecha_de_nacimiento" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha *</label>
          <input type="text" id="fecha_de_nacimiento" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="dia/mes/año" required />
        </div>

        {/* edad */}
        <div>
          <label for="edad" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edad</label>
          <input type="text" id="edad" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        {/* ¿Qué puesto o empleo buscas? * */}
        <div>
          <label for="Qué_puesto_o_empleo_buscas" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">¿Qué puesto o empleo buscas? *</label>
          <input type="text" id="Qué_puesto_o_empleo_buscas" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>

        {/* ¿En qué tipo área o departamentos te interesa trabajar?  */}
        <div>
          <label for="En_qué_tipo_área_o_departamentos_te_interesa_trabajar" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">¿En qué tipo área o departamentos te interesa trabajar?  *</label>
          <input type="text" id="En_qué_tipo_área_o_departamentos_te_interesa_trabajar" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        {/* ¿En qué tipo área o departamentos te interesa trabajar?  */}
        <div>
          <label for="En_qué_tipo_de__empresa_te_ves_desarrollándote_profesionalmente" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">¿En qué tipo de  empresa te ves desarrollándote profesionalmente? *</label>
          <input type="text" id="En_qué_tipo_de__empresa_te_ves_desarrollándote_profesionalmente" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        {/* Cómo_te_sientes_en_esta_búsqueda_de_empleo */}
        <div>
          <label for="En_qué_tipo_de__empresa_te_ves_desarrollándote_profesionalmente" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">¿Cómo te sientes en esta búsqueda de empleo?  Puedes elegir varias opciones. *</label>

          {/* Motivado */}
          <div class="flex items-center">
            <input id="checkbox1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="Motivado" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Motivado (a).</label>
          </div>

          {/* Enojado */}
          <div class="flex items-center">
            <input id="checkbox2" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="Enojado" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enojado (a).</label>
          </div>

          {/* Desesperado */}
          <div class="flex items-center">
            <input id="checkbox4" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="Desesperado" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Desesperado (a)</label>
          </div>

          {/* Entusiasta */}
          <div class="flex items-center">
            <input id="checkbox5" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="Entusiasta" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Entusiasta.</label>
          </div>

          {/* Otro */}
          <div>
            <label for="otro" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Otro</label>
            <input type="text" id="otro" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
        </div>

        {/* ¿Qué buscas en un empleo?  */}
        <div>
          <label for="Qué_buscas_en_un_empleo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">¿Qué buscas en un empleo? Puedes escoger varias. *</label>

          {/* Aprender */}
          <div class="flex items-center">
            <input id="checkbox1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="Aprender" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Aprender</label>
          </div>

          {/* Crecer profesionalmente */}
          <div class="flex items-center">
            <input id="checkbox2" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="Crecer_profesionalmente" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Crecer profesionalmente</label>
          </div>

          {/* Mejor sueldo */}
          <div class="flex items-center">
            <input id="checkbox4" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="Mejor_sueldo" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mejor sueldo</label>
          </div>

          {/* Mejor ambiente laboral */}
          <div class="flex items-center">
            <input id="checkbox5" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="Mejor_ambiente_laboral" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mejor ambiente laboral</label>
          </div>

          {/* Mejores prestaciones */}
          <div class="flex items-center">
            <input id="checkbox6" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="Mejores_prestaciones" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mejores prestaciones</label>
          </div>

          {/* Cambio de giro */}
          <div class="flex items-center">
            <input id="checkbox7" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="Cambio_de_giro" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cambio de giro</label>
          </div>

          {/* Estabilidad */}
          <div class="flex items-center">
            <input id="checkbox8" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="Estabilidad" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Estabilidad</label>
          </div>


          {/* Otro */}
          <div>
            <label for="otro" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Otro</label>
            <input type="text" id="otro" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
        </div>
      </div>


      {/* Cuánto_tiempo_llevas_desempleado */}
      {/* Cuánto tiempo llevas desempleado */}
      <div class="mb-6">
        <label for="Cuánto_tiempo_llevas_desempleado" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">¿Cuánto tiempo llevas desempleado (a)? *</label>
        <input type="text" id="Cuánto_tiempo_llevas_desempleado" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>

      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Siguiente</button>
    </form>

  )
}