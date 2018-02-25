import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Layout from './components/Layout';
import Task from './components/Task';
import Notes from './components/Notes';
import Category from './components/Category';
import Address from './components/Address';
import Tags from './components/Tags'
import Landing from './components/Landing'
import User from './components/User'
import Login from './components/Login'
import Register from './components/Register'
const MOUNT_ROOT = document.getElementById('main');

ReactDOM.render(
    <MuiThemeProvider>
        <Router history={browserHistory}>
            <Route path='/' component={Landing}/>
            <Route path='user' component={User}>
                <Route path='login' component={Login}/>
                <Route path='register' component={Register}/>
            </Route>
            <Route path="home" component={Layout}>
                <IndexRoute component={Task}/>
                <Route path="notes" component={Notes}/>
                <Route path="task" component={Task}/>
                <Route path="category" component={Category}/>
                <Route path="address" component={Address}/>
                <Route path="tags" component={Tags}/>
            </Route>
        </Router>
    </MuiThemeProvider>, MOUNT_ROOT);