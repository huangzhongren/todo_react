import React, {Component}from 'react';
import {Link} from 'react-router-dom';
const Links = [
    '<li><Link to="/task"></li>',
    '<li><Link to="/notes"></li>',
    '<li><Link to="/project"></li>'
]
export default class Layout extends Component {
    render() {
        return (
            <div className="app-container">
                <ul className="side-bar">
                    {Links}
                </ul>
                <div className="app-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}