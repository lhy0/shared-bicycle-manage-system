import React from 'react';
import { Route, Redirect } from "react-router-dom";

const AuthorizedRoute = ({ component: Component, logged, ...rest }) => {
    return (
        <Route {...rest} render={props => {
            return logged
            ? <Component {...props} />
            : <Redirect to="/login" />
        }} /> 
    ) 
}

export default AuthorizedRoute;