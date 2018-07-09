import React from 'react';
import queryString from 'query-string';
import api from '../utils/api';

class Forecast extends React.Component {
    state= {
        forecastData : [],
        loading: false
    }

    componentDidMount(){
        let city = queryString.parse(this.props.location.search).city;
        this.makeRequest(city);
    }

    makeRequest =(city) => {
        api.getFiveDayForecast(city).then((response) => {
            this.setState(() =>({
                forecastData:response,
                loading: false
            }))
        })
    }

    render(){
        const {forecastData,loading} = this.state;
        console.log(forecastData);
        return loading === true
            ? <h1 className='header' > Loading.. </h1>
            : <div>Forecast Module</div>
    }
}

export default Forecast;