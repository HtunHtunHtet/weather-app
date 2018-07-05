import React from 'react';
class Home extends React.Component{
    render(){
        return(
            <div className="home-container" style={{backgroundImage: "url('app/images/pattern.svg')"}}>
                <h1 className="header">Enter a City and State</h1>
                <div className="zip-container"  style={{flexDirection: this.props.direction}}>
                    <form className="main-form">
                        <div>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Malaysia"
                            />
                        </div>
                        <div style={{textAlign:'center' , marginBottom: 10, marginTop: 10}}>
                            <button className="btn btn-success">
                                Get Weather
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Home;