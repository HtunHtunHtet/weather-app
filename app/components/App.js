import React from 'react';
import FindCountry from './FindCountry';
import {Route, BrowserRouter} from 'react-router-dom';
import Nav from './Nav';
import Forecast from './Forecast';

class App extends  React.Component {
    render(){
        return(
            <BrowserRouter>
                <div className='container'>
                    <Nav/>
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
                                                zipcode={123}
                                />
                            </div>
                            )
                        }
                    }/>
                    <Route path='/forecast' component={Forecast} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;