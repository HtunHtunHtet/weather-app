import axios from 'axios';

const apiKey    = '52b9988eb4739afe0485fe7f94aabd14';
const baseURL   =  'http://api.openweathermap.org';

function getCurrentWeather(cityName){
    axios.get(`${baseURL}/data/2.5/weather?q=${cityName}&type=accurate&APPID=${apiKey}`)
        .then(function(response){
            return response.data;
        })

}

module.exports = {
    getCurrentWeather: getCurrentWeather
}