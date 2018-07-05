import React  from 'react';
class FindCountry extends React.Component {
    state = {
        zipcode:''
    }

    handleSubmit = () => {
        console.log(this.state);
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
                />
                <button className="btn btn-success" onClick={this.handleSubmit}>
                    Get Weather
                </button>
            </div>
        )
    }
}

export default FindCountry;