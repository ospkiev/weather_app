import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from './Chart.css';

const Chart = ({ allweatherArr }) => {
    const data = {
        labels: (allweatherArr[9]),
        datasets: [
            {
                label: 'Morning',
                borderColor: `#0000ff`,
                data: allweatherArr[0],

            },
            {
                label: 'Afternoon',
                borderColor: `#00ff00`,
                data: allweatherArr[3],
            },
            {
                label: 'Evening',
                borderColor: `#ff0000`,
                data: allweatherArr[6],
            },
        ]
    }
    const options = {
        tooltips: {
            mode: 'index'
        },
        legend: {
            position: 'top',
            display: true,
            labels: {
                fontColor: 'white',
                fontSize: 10,
            }
        },

        title: {
            display: true,
            text: 'Temp Chart ',
            position: 'top',
            fontColor: 'white',
            fontSize: 20,
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    fontFamily: 'Yarta',
                    display: true,
                    labelString: 'Temp C',
                    fontColor: 'white',
                    fontSize: 15,
                },
                gridLines: {
                    color: 'white'
                },
                ticks: {
                    fontFamily: 'Yarta',
                    fontSize: 12,
                    fontColor: 'white',

                }
            }],
            xAxes: [{
                scaleLabel: {
                    fontFamily: 'Yarta',
                    display: true,
                    fontColor: 'white',
                    fontSize: 15,
                },
                gridLines: {
                    color: 'white'
                },
                ticks: {
                    fontFamily: 'Arial',
                    fontSize: 12,
                    fontColor: 'white',
                }

            }]
        }

    }
    return (
        <div className={styles.main}>
            <div>
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default Chart;