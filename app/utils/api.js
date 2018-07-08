import axios from 'axios';

const apiKey    = 'b714ec74bbab5650795063cb0fdf5fbe';
const baseURL   =  'http://api.openweathermap.org/data/2.5/';

function getCurrentWeather(cityName){
    axios.get(`${baseURL}weather?q=${cityName}&type=accurate&APPID=${apiKey}`)
        .then(function(response){
            return response.data;
        })

}

function getFiveDayForcast(cityName) {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&type=accurate&APPID=${apiKey}&cnt=5`)
        .then(function(response){
            return response.data;
        })
}

module.exports = {
    getCurrentWeather: getCurrentWeather,
    getFiveDayForcast: getFiveDayForcast
}