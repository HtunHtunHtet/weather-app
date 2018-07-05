import React from 'react';
import ZipCode from './ZipCode';

class Home extends React.Component{
    render(){
        return(
            <div className="home-container" style={{backgroundImage: "url('app/images/pattern.svg')"}}>
                <h1 className="header">Enter a City and State</h1>
                <div className="zip-container"  style={{flexDirection: this.props.direction}}>
                        <ZipCode/>
                </div>
            </div>
        )
    }
}

export default Home;