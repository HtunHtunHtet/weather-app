import React from 'react';
import FindCountry from './FindCountry';


class App extends  React.Component {
    render(){
        return(
            <div className='container'>
                <div className="nav-container">
                    <div>
                        <h1 className="header"> Weather App </h1>
                    </div>
                    <div className="navbar-zip-container">
                        <FindCountry
                            handleSubmit={function(){}}
                            zipcode={123}
                        />
                    </div>
                </div>
                <div className="home-container" style={{backgroundImage: "url('app/images/pattern.svg')"}}>
                    <h1 className="header">Enter a City and State</h1>
                    <FindCountry
                        handleSubmit={function(){}}
                        zipcode={123}
                    />
                </div>
            </div>
        )
    }
}

export default App;