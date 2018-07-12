import React  from 'react';
import api from '../utils/api';
import PropTypes from 'prop-types';

class FindCountry extends React.Component {
    static propTypes = {
        zipcode:PropTypes.string.isRequired
    }

    state = {
        zipcode:''
    }

    handleSubmit = () => {
        this.props.onSubmitZipCode(this.state.zipcode);
        api.getCurrentWeather(this.state.zipcode)
            .then((response) => (console.log(response)));
        api.getFiveDayForecast(this.state.zipcode)
            .then((response) => (console.log(response)));
    }

    handleChanges = (event) => {
        event.preventDefault();
        const value=event.target.value;
        this.setState(() => ({zipcode: value}))
    }
    render(){
        const {zipcode} = this.state;
        return(
            <div className="zip-container"  style={{flexDirection: this.props.direction}}>
                <input
                    id='zipcodeInput'
                    className="form-control"
                    type="text"
                    placeholder="Example: Yangon"
                    onChange={this.handleChanges}
                    value={this.state.zipcode}
                />
                <button className="btn btn-success" onClick={this.handleSubmit}>
                    Get Weather
                </button>
            </div>
        )
    }
}

export default FindCountry;