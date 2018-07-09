import React from 'react';
import FindCountry from './FindCountry';
import {Route, BrowserRouter} from 'react-router-dom';
import Forecast from './Forecast';
import Details from './Details';

class App extends  React.Component {
    render(){
        return(
            <BrowserRouter>
                <div className='container'>
                    <Route render = {function(props){
                            return(
                                <div className="nav-container">
                                    <div>
                                        <h1 className="header"> Weather App </h1>
                                    </div>

                                    <div className="navbar-zip-container">
                                        <FindCountry  onSubmitZipCode={(city)=>{props.history.push({
                                                                                    pathname: '/forecast',
                                                                                    search: '?city=' + city
                                                                                })
                                                                                }
                                                                        }
                                                      zipcode={123}/>
                                    </div>
                                </div>
                            )
                    }} />
                    <Route exact path="/" render={function(props) {
                        return (
                            <div className="home-container" style={{backgroundImage: "url('app/images/pattern.svg')"}}>
                                <h1 className="header">Enter a City and State</h1>
                                <FindCountry  onSubmitZipCode={(city)=>{
                                                                    props.history.push({
                                                                        pathname: '/forecast',
                                                                        search: '?city=' + city
                                                                    })
                                                             }}
                                                zipcode={123}/>
                            </div>
                            )
                        }
                    }/>
                    <Route path='/forecast' component={Forecast} />

                    <Route path='/details/:city' component={Details} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;