import React, { useEffect, useState} from 'react'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { FiBluetooth } from 'react-icons/fi';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



const BarChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                   label: 'Sales $',
                   data: [17000,25478,23698,25879,30245,27895,35698],
                   borderColor: 'rgb(53, 162, 235)',
                   backgroundColor: 'rgb(53, 162, 235, 0.4)',
                },
            ]
        })
        setChartOptions({
            plugins: {
                legend: {
                   position: 'top',
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                }
            },
            maintainAspectRatio: false,
            responsive: true,
        })
    }, [])

  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
        <Bar
           options={chartOptions}
           data={chartData}
        />
      </div>
    </>
  )
}

export default BarChart