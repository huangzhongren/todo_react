import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router, Route,IndexRoute,browserHistory } from 'react-router';
import Layout from './components/Layout';
import Task from './components/Task';
import Notes from './components/Notes';
import Category from './components/Category';
import Address from './components/Address';
import Tags from './components/Tags'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
const MOUNT_ROOT = document.getElementById('main');

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Task}/>
                <Route path="notes" component={Notes}/>
                <Route path="task" component={Task}/>
                <Route path="category" component={Category}/>
                <Route path="address" component={Address}/>
                <Route path="tags" component={Tags}/>
            </Route>
        </Router>
    </MuiThemeProvider>, MOUNT_ROOT);