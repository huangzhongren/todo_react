import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route,IndexRoute,browserHistory } from 'react-router';
import Layout from './components/Layout';
import Task from './components/Task';
import Notes from './components/Notes';
import Category from './components/Category';
import Address from './components/Address';
import Tags from './components/Tags'
const MOUNT_ROOT = document.getElementById('main');

ReactDOM.render(<Router history={browserHistory}>
    <Route exact path="/" component={Layout}>
        <IndexRoute component={Task}/>
        <Route path="notes" component={Notes}/>
        <Route path="task" component={Task}/>
        <Route path="category" component={Category}/>
        <Route path="address" component={Address}/>
        <Route path="tags" component={Tags}/>
    </Route>
</Router>, MOUNT_ROOT)