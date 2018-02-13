import React, {Component}from 'react';
import SideBar from './SideBar'

export default class Layout extends Component {
    render() {
        return (
            <div className="app-container">
                <SideBar/>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}