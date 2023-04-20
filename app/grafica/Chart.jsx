import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { useEffect } from 'react';
import puntuacion from './puntuacion';

const Chart = () => {


  let storage;
  if (process.browser) {
    storage = JSON.parse(localStorage.getItem("form"))
  }

  let amount = puntuacion()

  useEffect(() => {
    if (storage) {
      console.log(amount)
    }
  })

  const labels = ["CV creativo", "Entrevista Laboral", "Búsqueda de empleo", "Proyecto de vida", "LinkedIn", "Esperado"];
  const data = {
    labels: labels,
    datasets: [{
      label: 'Puntajes',
      data: [amount?.cv -1, amount?.entrevista -1, amount?.empleo -1, amount?.linkedin -1, amount?.objetivos -1, 100],
      backgroundColor: [
        'rgb(209, 213, 219)',
        'rgb(107, 114, 128)',
        'rgb(38, 38, 220)',
        'rgb(38, 38, 150)',
        'rgb(220, 38, 38)',
        'rgb(150, 38, 38)',
      ],
      borderColor: [
        'rgb(0,0,0)',
        'rgb(0,0,0)',
        'rgb(0,0,0)',
        'rgb(0,0,0)',
        'rgb(0,0,0)',
        'rgb(0,0,0)',
      ],
      borderWidth: 1
    }]
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false
  }

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  )
}

export default Chart;