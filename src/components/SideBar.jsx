import React from 'react';
import {Link} from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';

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
];

export default class SideBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {open:true};
    }
    render(){
        return (
            <Drawer open={this.state.open}>
                <MenuItem
                    containerElement={<Link to="task"/>}
                    primaryText="任务"
                    leftIcon = {
                        <FontIcon className="material-icons">people</FontIcon>
                    }
                />
                <MenuItem
                    containerElement={<Link to="notes"/>}
                    primaryText="便签"
                    leftIcon = {
                        <FontIcon className="material-icons">home</FontIcon>
                    }
                />
            </Drawer>
        )
    }
}
