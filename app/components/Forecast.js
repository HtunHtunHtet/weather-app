import React from 'react';
import queryString from 'query-string';
import api from '../utils/api';


class Forecast extends React.Component {

    state= {
        forecastData : [],
        loading: false
    }

    componentDidMount(){
        let  city = queryString.parse(this.props.location.search).city;
        this.makeRequest(city);
    }

    makeRequest =(city) => {
        //set loading false
        this.setState(()=> ({loading:false}));
        api.getFiveDayForecast(city).then((response) => {
            console.log("check response",response)
        })

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