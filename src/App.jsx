// import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import styles from './App.css';
import { Switch, Route } from 'react-router-dom';
import Menu from './Menu/Menu.jsx';
import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header/Header';
import moment from 'moment';
import uuidv4 from 'uuid/v4';
import FiveDaysCard from './FiveDays/FiveDaysCard';
import Today from './Today/Today';
import FavoriteCities from './FavoriteCities/FavoriteCities';

class App extends Component {
  state = {
    input: '',
    data: {},
    picturesCity: {},
    cityName: '',
    condition: '',
    pressure: '',
    temp: '',
    favoritList: JSON.parse(localStorage.getItem('favoritList')) || [],
    isLoaded: true,
    modalStatus: false,
    toggleStatus: false,
    cityNameFromFavList: '',
  };

  toggleStatusFunction = () => {
    this.setState(prev => ({
      toggleStatus: !prev.toggleStatus
    }))
  };

  favoriteCityListFunction = (e) => {
    e.preventDefault();

    let cityItem = {
      id: uuidv4(),
      favoriteCityName: this.state.input,
    }
    this.setState(prev => ({
      favoritList: [...prev.favoritList, cityItem]
    }))

    let result = JSON.parse(localStorage.getItem('favoritList')) || [];
    result.push(cityItem);
    localStorage.setItem('favoritList', JSON.stringify(result));
  };

  deleteFavoriteCityFromListFunction = (e) => {
    let id = e.target.dataset.id;
    this.setState({
      favoritList: this.state.favoritList.filter(el => el.id !== id)
    })
    let deletItem = JSON.parse(localStorage.getItem('favoritList'));
    let filterDeletItem = deletItem.filter(el => el.id !== id);
    localStorage.setItem('favoritList', JSON.stringify(filterDeletItem));
  };

  inputFunction = (e) => {
    let inputForm = e.target.value;
    this.setState({
      input: inputForm,
    })
  };

  timeFunction = () => {
    setInterval(() => {
      let date = moment().format('LLLL');
      this.setState({
        date: date,
      })
    }, 1000)
  };

  getWeatherFromFavList = (e) => {
    let id = e.target.dataset.id;
    let nameCity = this.state.favoritList.filter(el => el.id === id)[0].favoriteCityName;
    let q = nameCity;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?APPID=8defc985a5e2c764076c53bf90c6c44e&units=metric&lang=ru&q=${q || 'Kiev'}`)
      .then(res => {
        this.setState({
          data: res.data,
          pressure: res.data.main.pressure,
          temp: res.data.main.temp,
          cityName: res.data.name,
          condition: res.data.weather[0].main,
          isLoaded: false,
          cityNameFromFavList: nameCity
        })
      })
      .catch(error => {
        console.log(error);
      })
    axios.get(`https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=${q || 'Kiev'}`)
      .then(res => {
        this.setState({
          picturesCity: res.data.hits[Math.floor(Math.random() * res.data.hits.length)].largeImageURL,
        })
      })
      .catch(error => {
        console.log(error);
      })
  };

  getWeather = () => {
    let q = this.state.input;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?APPID=8defc985a5e2c764076c53bf90c6c44e&units=metric&lang=ru&q=${q || 'Kiev'}`)
      // .then(console.log(this))
      .then(res => {
        this.setState({
          data: res.data,
          pressure: res.data.main.pressure,
          temp: res.data.main.temp,
          cityName: res.data.name,
          condition: res.data.weather[0].main,
          isLoaded: false,
        })
      })
      .catch(error => {
        console.log(error);
      })
  };

  fetchDataFunction = (e) => {
    e.preventDefault();
    this.getWeather();
    this.getCity();
  };

  componentDidMount = () => {
    this.getWeather();
    this.getCity();
    this.timeFunction();
    // this.someFunc();
  };

  someFunc = () => {
    console.log(this);
  };

  getCity = () => {
    let q = this.state.input;
    axios.get(`https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=${q || 'Kiev'}`)
      .then(res => {
        this.setState({
          picturesCity: res.data.hits[Math.floor(Math.random() * res.data.hits.length)].largeImageURL,
          // picturesCity: res.data.photos.photo[(Math.floor(Math.random() * 99))]
        })
      })
      // .then(console.log(this))
      .catch(error => {
        console.log(error);
      })
  };


  render() {
    const { picturesCity, data, pressure, temp, isLoaded,
      date, cityName, favoritList, toggleStatus, condition, nameCityState, cityNameFromFavList } = this.state;

    return (
      <div className={styles.wrapper}>
        <div className={styles.main_img} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${picturesCity})` }} >
          <button className={styles.favorite__button} onClick={this.toggleStatusFunction}>Favorite list</button>
          {toggleStatus ?
            <FavoriteCities favoritList={favoritList} getWeatherFromFavList={this.getWeatherFromFavList}
              deleteFavoriteCityFromListFunction={this.deleteFavoriteCityFromListFunction} /> : null
          }
          {isLoaded ? <Loader type="Puff" color="#00BFFF" height="100" width="100" className={styles.puff} />
            : <div className={styles.card_wrapper}><Header input={this.inputFunction} fetchData={this.fetchDataFunction} data={data}
              pressure={pressure} temp={temp} date={date} city={cityName} condition={condition} favoriteCityListFunction={this.favoriteCityListFunction} />

              <Menu />
              <Switch>
                <Route exact path='/' render={() => <Today temp={temp}
                  pressure={pressure} cityName={cityName} condition={condition} data={data} />} />
                <Route path='/fivedays' render={() => <FiveDaysCard input={cityNameFromFavList} cityName={cityName} favoritList={favoritList} nameCityState={nameCityState} />} />
              </Switch>
            </div>
          }
        </div>
      </div >
    );
  }
}

export default App;