import React from 'react';
import styles from './FavoriteCities.css';

const FavoriteCities = ({ favoritList, deleteFavoriteCityFromListFunction, getWeatherFromFavList, getWeatherFiveDays }) => {
    return (
        <div>
            <ul className={styles.citylist}>
                {favoritList.map(el => <li className={styles.liStyle} key={el.id} onClick={getWeatherFromFavList}
                    data-id={el.id}>{el.favoriteCityName} < span data-id={el.id} onClick={deleteFavoriteCityFromListFunction}
                        className={styles.delete} >X</span> </li>)}
            </ul>
        </div>
    );
};

export default FavoriteCities;