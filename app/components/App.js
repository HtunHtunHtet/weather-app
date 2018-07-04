import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';


class App extends  React.Component {
    render(){
        return(
            <BrowserRouter>
                <div className='container'>
                    <Nav/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;