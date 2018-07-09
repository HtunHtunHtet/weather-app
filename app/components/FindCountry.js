import React  from 'react';
import api from '../utils/api';
import PropTypes from 'prop-types';
import ReactRouter from 'react-router-dom'

class FindCountry extends React.Component {
    static propTypes = {
        zipcode:PropTypes.string.isRequired
    }

    state = {
        zipcode:''
    }

    handleSubmit = () => {
        //get props
        this.props.onSubmitZipCode(this.state.zipcode);
        let test = api.getCurrentWeather(this.state.zipcode);
        let test2 = api.getFiveDayForcast(this.state.zipcode);

    }

    handleChanges = (event) => {
        event.preventDefault();
        const value=event.target.value;
        this.setState(() => ({zipcode: value}))
        console.log(this.state);
    }
    render(){
        const {zipcode} = this.state;
        return(
            <div className="zip-container"  style={{flexDirection: this.props.direction}}>
                <input
                    id='zipcodeInput'
                    className="form-control"
                    type="text"
                    placeholder="Malaysia"
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