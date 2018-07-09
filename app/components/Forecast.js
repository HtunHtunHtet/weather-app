import React from 'react';
import queryString from 'query-string';
import api from '../utils/api';


class Forecast extends React.Component {

    state= {
        forecastData : [],
        loading: false
    }

    componentDidMount(){
        var city = queryString.parse(this.props.location.search).city;
        this.makeRequest(city);
    }

    makeRequest(city){
        this.setState(()=>
            ({
                loading: true
            })
        )

        api.getCurrentWeather(city)
            .then((res) => console.log(res))
    }

    render(){
        return(
            <div>
                <h1>Forecast module</h1>
            </div>
        )
    }
}

export default Forecast;