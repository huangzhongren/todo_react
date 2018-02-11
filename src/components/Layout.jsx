import React, {Component}from 'react';
import {Router,Route,Link,browserHistory} from 'react-router';
const sidebarLinks = [
    {
        name:'任务',
        path:'task',
    },
    {
        name:'便签',
        path:'notes',
    },
    {
        name:'分类',
        path:'category',
    },
    {
        name:'地点',
        path:'address',
    },
    {
        name:'标签',
        path:'tags',
    }
]
export default class Layout extends Component {
    render() {
        return (
            <div className="app-container">
                <ul className="side-bar">
                    {sidebarLinks.map(link => <li key={link.name}><Link to={link.path}>{link.name}</Link></li>)}
                </ul>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}