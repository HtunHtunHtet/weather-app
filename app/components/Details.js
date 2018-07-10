import React from 'react';
import utility from '../utils/helpyCopy';
let getDate = utility.getDate;

class Details extends React.Component{
    render(){
        const itemProperties = this.props.itemProps;
        const icon = itemProperties.weather[0].icon;
        const date = getDate(itemProperties.dt);
        return(
            <div className="detailContainer">
               <img src={`app/images/weather-icons/${icon}.svg`} alt='weather-icon'/>
                <p>{date}</p>
            </div>
        )
    }
}

export default Details;