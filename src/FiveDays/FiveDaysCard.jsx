import moment from 'moment';
import styles from './FiveDaysCard.css';
import axios from 'axios';
import React, { Component } from 'react';
import Chart from '../Chart/Chart';

class FiveDaysCard extends Component {
    state = {
        fiveDaysData: [],
        // inputFromInput: this.props.inputMain,
        data: {},
        isLoadingFivedays: true,
        modalStatus: false,
        toggleStatus: false,
        allweatherArr: [],
        toggleChart: false,
    }


    getWeatherFiveDays = () => {
        let q = this.props.input;
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?APPID=8defc985a5e2c764076c53bf90c6c44e&units=metric&lang=ru&q=${q || 'Kiev'}`)
            .then(res => res.data.list)
            .then(list => {
                let morningTemp = list.filter(el => el.dt_txt.includes('06:00:00')).map(el => el.main.temp);
                let morningWeather = list.filter(el => el.dt_txt.includes('06:00:00')).map(el => el.weather);
                let morningHumidity = list.filter(el => el.dt_txt.includes('06:00:00')).map(el => el.main.humidity);

                let afterTemp = list.filter(el => el.dt_txt.includes('15:00:00')).map(el => el.main.temp);
                let afterWeather = list.filter(el => el.dt_txt.includes('15:00:00')).map(el => el.weather);
                let afterHumidity = list.filter(el => el.dt_txt.includes('15:00:00')).map(el => el.main.humidity);

                let eveningTemp = list.filter(el => el.dt_txt.includes('21:00:00')).map(el => el.main.temp);
                let eveningWeather = list.filter(el => el.dt_txt.includes('21:00:00')).map(el => el.weather);
                let eveningHumidity = list.filter(el => el.dt_txt.includes('21:00:00')).map(el => el.main.humidity);
                let date = list.filter(el => el.dt_txt.includes('21:00:00')).map(el => moment.unix(el.dt).format('MMM Do YY'));

                let allweatherArr = [];
                allweatherArr.push(morningTemp, morningWeather, morningHumidity, afterTemp, afterWeather,
                    afterHumidity, eveningTemp, eveningWeather, eveningHumidity, date);
                // console.log(allweatherArr);

                let weatherArr = [];
                for (let i = 0; i < 5; i++) {
                    let obj = {};
                    allweatherArr.map((el, idx) => {
                        switch (idx) {
                            case 0: obj.morningTemp = el[i];
                                break;
                            case 1: obj.morningWeather = el[i];
                                break;
                            case 2: obj.morningHumidity = el[i];
                                break;
                            case 3: obj.afterTemp = el[i];
                                break;
                            case 4: obj.afterWeather = el[i];
                                break;
                            case 5: obj.afterHumidity = el[i];
                                break;
                            case 6: obj.eveningTemp = el[i];
                                break;
                            case 7: obj.eveningWeather = el[i];
                                break;
                            case 8: obj.eveningHumidity = el[i];
                                break;
                            case 9: obj.date = el[i];
                                weatherArr.push(obj);
                                break;
                            default: break;
                        }
                    })
                }
                this.setState({
                    fiveDaysData: weatherArr,
                    isLoadingFivedays: false,
                    allweatherArr: allweatherArr,
                })
            })
            .catch(error => {
                console.log(error);
            })
    }


    componentDidMount = () => {
        this.getWeatherFiveDays();
        // this.getCity();
    }

    componentDidUpdate(prevProps) {
        // console.log(prevProps);
        if (prevProps.input !== this.props.input) {
            this.getWeatherFiveDays()
        }
    }

    toggleChartFunction = () => {
        this.setState(prev => ({
            toggleChart: !prev.toggleChart
        }))
    }

    render() {
        const { fiveDaysData, allweatherArr, toggleChart } = this.state;
        // console.log(fiveDaysData)
        // console.log(allweatherArr);
        return (
            <div>
                {this.state.isLoadingFivedays ?
                    <p>Loading</p> :
                    <div className={styles.card}>

                        {fiveDaysData.map(el => <div className={styles.card_column}>
                            <p>City : {this.props.cityName} </p>
                            <p>{el.date}</p>
                            {/* <p>{moment.unix(el.date).format("MM Do YY")}</p> */}
                            <p>Morning t : {el.morningTemp} &deg; C</p>
                            {/* <p>Afternoon temp: {el.afterTemp} &deg; C</p> */}
                            <p>Evening t : {el.eveningTemp} &deg; C</p>
                            <p>{el.morningWeather[0].main}</p>
                            {/* <p>{el.morningWeather[0].icon}</p> */}
                            <p className={styles.condition}><img className={styles.icon_img}
                                src={`http://openweathermap.org/img/w/${el.morningWeather[0].icon}.png`} alt="" /></p>
                        </div>
                        )}
                    </div >
                }
                <p className={styles.chart} onClick={this.toggleChartFunction}>Temperature Chart</p>
                {toggleChart ? <Chart allweatherArr={allweatherArr} /> : null}
            </div>
        );

    }
}

export default FiveDaysCard;

