import React from 'react';
import styles from './Header.css';
import star from '../img/Harwen-Simple-Favorites.ico';

const Header = ({ input, fetchData, pressure, temp, date, city, favoriteCityListFunction, condition }) => {
    // console.log(data.main.temp);
    return (
        <div className={styles.oneDay}>
            <form action="" onSubmit={fetchData}>
                <div className={styles.input_wrapper}>
                    <input type="text" placeholder=" Enter name of city..." className={styles.input} onChange={input} required />
                    <img src={star} alt="Add to favorite" className={styles.img_star} onClick={favoriteCityListFunction} />
                </div>
                <p className={styles.date}>{date}</p>
            </form>

        </div >
    );
};

export default Header; 