export default function puntuacion() {
  let storage;
  if (process.browser) {
    storage = JSON.parse(localStorage.getItem("form"));
  }

  let amount;
  if (storage) {
    amount = {
      cv: Object.values(storage.cv.results).reduce(
        (acumulador, valorActual) => {
          if (valorActual === "si") {
            return acumulador + 20;
          } else {
            return acumulador;
          }
        },
        0
      ),
      entrevista: Object.values(storage.entrevista.results).reduce(
        (acumulador, valorActual) => {
          if (valorActual === "si") {
            return acumulador + 20;
          } else {
            return acumulador;
          }
        },
        0
      ),
      empleo: Object.values(storage.empleo.results).reduce(
        (acumulador, valorActual) => {
          if (valorActual === "si") {
            return acumulador + 20;
          } else {
            return acumulador;
          }
        },
        0
      ),
      linkedin: Object.values(storage.linkedin.results).reduce(
        (acumulador, valorActual) => {
          if (valorActual === "si") {
            return acumulador + 20;
          } else {
            return acumulador;
          }
        },
        0
      ),
      objetivos: Object.values(storage.objetivos.results).reduce(
        (acumulador, valorActual) => {
          if (valorActual === "si") {
            return acumulador + 20;
          } else {
            return acumulador;
          }
        },
        0
      ),
    };
  }
  return amount;
}
