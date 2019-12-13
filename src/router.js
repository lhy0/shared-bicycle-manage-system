import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
// import Login from './pages/login';

export default class Router extends React.Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    {/* <Route path="/login" component={Login} /> */}
                </Switch>
            </div>
        )
    }
}