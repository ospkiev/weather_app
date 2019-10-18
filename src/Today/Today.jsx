import React from 'react';
import styles from './Today.css';

const Today = ({ pressure, temp, cityName, condition, data }) => {
    return (
        <div className={styles.oneDay}>
            <div className={styles.oneDayWrapper}>
                <p className={styles.pressure}> City : {cityName}</p>
                <p className={styles.pressure}>Temperature : {temp} &deg; C</p>
                {/* <p className={styles.pressure}>Wind:{data.wind.speed} m/s</p> */}
                <p className={styles.pressure}>Pressure : {(pressure / 1.33).toFixed(2)} mm Hg</p>
                <p className={styles.condition}>Condition : {condition} <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="" /></p>
            </div>
        </div >
    );
};

export default Today; 