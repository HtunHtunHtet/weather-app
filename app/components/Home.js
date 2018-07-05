import React from 'react';
import FindCountry from './FindCountry';

class Home extends React.Component{

    render(){
        return(
            <div className="home-container" style={{backgroundImage: "url('app/images/pattern.svg')"}}>
                <h1 className="header">Enter a City and State</h1>
                <FindCountry/>
            </div>
        )
    }
}

export default Home;