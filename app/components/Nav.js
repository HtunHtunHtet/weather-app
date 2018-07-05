import React from 'react';
import FindCountry from './FindCountry';

export default function Nav(){
    return(
        <div>
            <div className="nav-container">
                <div>
                    <h1 className="header"> Weather App </h1>
                </div>
                <div className="navbar-zip-container">
                    <FindCountry/>
                </div>
            </div>
        </div>
    )

}
