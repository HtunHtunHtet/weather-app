import React from 'react';
import queryString from 'query-string';
import api from '../utils/api';
import Details from './Details';

class Forecast extends React.Component {
    state= {
        forecastData : [],
        loading: true,
        city: [],
        list: []
    }

    componentDidMount(){
        let city = queryString.parse(this.props.location.search).city;
        this.makeRequest(city);
    }

    makeRequest =(city) => {
        api.getFiveDayForecast(city).then((response) => {
            console.log(response);
            this.setState(() =>({
                forecastData:response,
                loading: false,
                city: response.city,
                list : response.list
            }));
        })
    }

    render(){
        const {loading, city, list} = this.state;
        console.log("state before return",this.state);
        return loading === true
            ? <h1 className='header' > Loading.. </h1>
            : <div>
                    <h2 className='forecast-header'>{city.name}</h2>
                    <div className="forecast-body">
                        {
                            list.map((items) =>(
                                <Details itemProps={items} onClick={()=>(
                                    this.props.history.push({
                                        pathname: `/dateDetails/${city.name}`,
                                        state: city.name
                                    })
                                )} />
                            ))
                        }
                    </div>
              </div>
    }
}

export default Forecast;