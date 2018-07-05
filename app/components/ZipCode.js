import React from 'react';
import PropTypes from 'prop-types';

class ZipCode extends React.Component{
    static propTypes = {
        id: PropTypes.string.isRequired,
        zipCode:PropTypes.string.isRequired,
        onSubmit: PropTypes.func.isRequired
    }

     state = {
        zipCode : ' '
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(
            this.props.id,
            this.state.zipCode
        )
    }

    render(){
        const {zipCode} = this.state
        console.log(this.state);
        return(
            <form className="main-form" onSubmit={this.handleSubmit}>
                <div>
                    <input
                        id='zipcode'
                        className="form-control"
                        type="text"
                        placeholder="Malaysia"
                        value= {zipCode}
                    />
                </div>
                <div style={{textAlign:'center' , marginBottom: 10, marginTop: 10}}>
                    <button className="btn btn-success">
                        Get Weather
                    </button>
                </div>
            </form>
        )
    }
}

export default ZipCode;