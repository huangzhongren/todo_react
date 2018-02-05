import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Layout from './components/Layout';
import Task from './components/Task';
import Notes from './components/Notes';
const MOUNT_ROOT = document.getElementById('main');

ReactDOM.render(<Router history={browserHistory}>
    <Route exact path="/" component={Layout}/>
    <Route path="task" component={Task}/>
    <Route path="notes" component={Notes}/>
</Router>, MOUNT_ROOT)