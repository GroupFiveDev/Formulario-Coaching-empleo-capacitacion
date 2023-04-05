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

  const labels = ["CV creativo", "Entrevista Laboral", "Busqueda de empleo", "Proyecto de vida", "LinkedIn", "Esperado"];
  const data = {
    labels: labels,
    datasets: [{
      label: 'Puntajes',
      data: [amount?.cv -1, amount?.entrevista -1, amount?.empleo -1, amount?.linkedin -1, amount?.objetivos -1, 100],
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

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  )
}

export default Chart;