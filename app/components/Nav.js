import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav(){
    return(
        <div>
            <div className="nav-container">
                <div>
                    <h1 className="header"> Weather App </h1>
                </div>
                <div className="navbar-zip-container">
                    <form  className="main-form-header">
                        <div>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Malaysia"
                            />
                        </div>
                        <div>
                            <button className="btn btn-success">
                                Get Weather
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}
