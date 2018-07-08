import React from 'react'
import FindCountry from './FindCountry';

class Nav extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <div>
                    <h1 className="header"> Weather App </h1>
                </div>
                <div className="navbar-zip-container">
                    <FindCountry
                        handleSubmit={function () {
                        }}
                        zipcode={123}
                    />
                </div>
            </div>
        )
    }
}

export default Nav;