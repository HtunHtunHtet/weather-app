import React from 'react';
import {convertTemp} from '../utils/helpyCopy';
import Details from "./Details";

class DateDetails extends React.Component{
    render(){
        let items       = this.props.location.state.items;
        let temperature = items.temp;
        console.log ("Prop inside Date Details",items);
        return(
            <div className="date-detail-container">
                {/*<h2 className='forecast-header'>{cityName}</h2>*/}
                <Details itemProps = {items}/>
                <div>Min Temperature :  {convertTemp(temperature.min)} degrees</div>
                <div>Max Temperature : {convertTemp (temperature.max)} degrees </div>
                <div>Humidity: {items.humidity}</div>
            </div>
        )
    }
}

export default DateDetails
