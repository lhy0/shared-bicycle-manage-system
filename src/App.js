import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './pages/login';
import PrimaryLayout from './components/PrimaryLayout';
import AuthorizedRoute from './components/AuthorizedRoute';
import './style/common.less';

class App extends React.Component {
    componentDidMount() {

    }

    render() {
        const { logged } = this.props;
        return (
            <Switch>
                <Route path="/login" exact component={Login}/>
                <AuthorizedRoute path="/" component={PrimaryLayout} logged={logged}/>
            </Switch>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        logged: state.logged
    }
}

export default connect(mapStateToProps)(App)