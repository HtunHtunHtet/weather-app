import axios from 'axios';
const apiKey    = 'b714ec74bbab5650795063cb0fdf5fbe';
const baseURL   =  'http://api.openweathermap.org/data/2.5/';

function getCurrentWeather(cityName){
    return axios.get(`${baseURL}weather?q=${cityName}&type=accurate&APPID=${apiKey}`)
        .then((response) => (response.data))
        .catch((error) => (error));

}

function getFiveDayForecast(cityName) {
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&type=accurate&APPID=${apiKey}&cnt=5`)
        .then((response) => (response.data))
        .catch((error) => (error));
}

module.exports = {
    getCurrentWeather: getCurrentWeather,
    getFiveDayForecast: getFiveDayForecast
}