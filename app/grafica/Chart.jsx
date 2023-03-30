import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { useEffect } from 'react';

const Chart = () => {

    
    let storage;
    if (process.browser) {
        storage = JSON.parse(localStorage.getItem("form"))
    }

    let amount;
    if(storage){
        amount = {
            cv: Object.values(storage.cv.results).reduce((acumulador, valorActual) => {
                if (valorActual === "si") {
                  return acumulador + 20;
                } else {
                  return acumulador;
                }
              }, 0),
            entrevista: Object.values(storage.entrevista.results).reduce((acumulador, valorActual) => {
                if (valorActual === "si") {
                  return acumulador + 20;
                } else {
                  return acumulador;
                }
              }, 0),
            empleo: Object.values(storage.empleo.results).reduce((acumulador, valorActual) => {
                if (valorActual === "si") {
                  return acumulador + 20;
                } else {
                  return acumulador;
                }
              }, 0),
            linkedin: Object.values(storage.linkedin.results).reduce((acumulador, valorActual) => {
                if (valorActual === "si") {
                  return acumulador + 20;
                } else {
                  return acumulador;
                }
              }, 0),
            objetivos: Object.values(storage.objetivos.results).reduce((acumulador, valorActual) => {
                if (valorActual === "si") {
                  return acumulador + 20;
                } else {
                  return acumulador;
                }
              }, 0),
        }
    }

    useEffect(()=>{
        if(storage){
            console.log(amount)
        }
    })

    const labels = ["CV creativo", "Entrevista Laboral", "Busqueda de empleo", "Proyecto de vida", "LinkedIn", "Esperado"];
    const data = {
    labels: labels,
    datasets: [{
        label: 'Puntajes',
        data: [amount?.cv, amount?.entrevista, amount?.empleo, amount?.linkedin, amount?.objetivos, 100],
        backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 205, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        ],
        borderWidth: 1
    }]
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false
    }

    return(
        <div>
            <Bar data={data} options={options}/>
        </div>
    )
}

export default Chart;