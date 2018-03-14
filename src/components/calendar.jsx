import React from 'react';
import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

const days = ['一','二','三','四','五','六','日'];
const style = {
    dragArea:{
        cursor:"move",
        height:30,
        userSelect:"none"
    },
    selectYear:{
        width:100,
        lineHeight:'30px',
        height:30,
    },
    iconStyle:{
        height:30,
        padding:0,
        width:28,
        right:2
    },
    labelStyle:{
        lineHeight:'30px',
        height:30,
        paddingLeft:15,
        paddingRight:30,
        border:'1px solid #333',
    },
    selectMonth:{
        width:90,
        lineHeight:'30px',
        height:30
    },
    flatButton:{
        height:34
    }
}
const yearItems = [],
      monthItems = [];
for(let i=1900;i<=2060;i++){
    yearItems.push(<MenuItem value={i} primaryText={`${i}年`} key={i}/>)
}
for(let i=1;i<=12;i++){
    monthItems.push(<MenuItem value={i} primaryText={`${i}月`} key={i}/>)
}
/*
* 思路：
*   1、得到当前月份或选中时间月份，*/
export default class Calendar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectDate:new Date().getDate(),
            selectYear:new Date().getFullYear(),
            selectMonth: new Date().getMonth(),
            calendarLeft:0,
            calendarTop:0,
            startx:0,
            starty:0,
            isDragging:false,
        };
        this.handleClick=this.handleClick.bind(this);
        this.handleYearChange=this.handleYearChange.bind(this);
        this.handleMonthChange=this.handleMonthChange.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
    }
    componentWillMount(){

    }
    componentDidMount(){
        this.setState({
            calendarLeft:this.refs.calendar.offsetLeft,
            calendarTop:this.refs.calendar.offsetTop
        })
    }
    handleClick(e){
        let date = new Date(e.target.getAttribute('date'));
        this.setState({selectDate:date.getDate(),selectYear:date.getFullYear(),selectMonth:date.getMonth()})
    }
    handleYearChange = (e,i,value)=>{
        this.setState({selectYear:value})
    }
    handleMonthChange = (e,i,value)=>{
        this.setState({selectMonth:value})
    }
    handleDateChange = (e,i,value)=>{
        this.setState({selectDate:value})
    }
    handleMouseDown = (e)=>{
        this.setState({
            isDragging:true,
            startx:e.pageX,
            starty:e.pageY,
        })
    };

    handleMoveEnd = (e)=>{
        this.setState({
            isDragging:false,
            calendarLeft:this.refs.calendar.offsetLeft,
            calendarTop:this.refs.calendar.offsetTop
        })
    };
    calendarMove = (e)=>{
        if(e.preventDefault){
            e.preventDefault();
        }
        let calendar = this.refs.calendar;
        if(this.state.isDragging){
            calendar.style.left = this.state.calendarLeft+e.pageX-this.state.startx +'px';
            calendar.style.top = this.state.calendarTop+e.pageY-this.state.starty+'px';
        }
    }
    render() {
        let calTrs = [],
            calTds = [];
        let currentTime = new Date(),
            today = new Date(currentTime.getFullYear(),currentTime.getMonth(),currentTime.getDate());
        let baseMonth = this.state.selectMonth,
            bd = this.state.selectDate,
            baseYear = this.state.selectYear;
        for(let i=-5;i<=37;i++){
            let date = new Date(baseYear,baseMonth,i),
                day = date.getDay(),
                dom;
            if(day===1){
                calTds  = [];
            }
            dom = <td key={i} className={(bd===i?'selected':'')+" "+(date.getTime()===today.getTime()?'current':'')}  onClick={this.handleClick}><a href="javascript:void(0)" date={date}>{date.getDate()}</a></td>;
            calTds.push(dom);
            if(day===0&&calTds.length===7){
                calTrs.push(calTds)
            }
        }
        return (
            <div className='calendar' onMouseMove={this.calendarMove} ref="calendar">
                <div onMouseDown={this.handleMouseDown} onMouseUp = {this.handleMoveEnd} ref="dragArea" onMouseLeave={this.handleMoveEnd} style={style.dragArea}>sssssdddddddddd</div>
                <div className="flex-between">
                    <DropDownMenu
                        maxHeight={300}
                        value={this.state.selectYear}
                        onChange={this.handleYearChange}
                        style={style.selectYear}
                        labelStyle={style.labelStyle}
                        iconStyle={style.iconStyle}
                    >
                        {yearItems}
                    </DropDownMenu>
                    <DropDownMenu
                        maxHeight={300}
                        value={this.state.selectMonth+1}
                        onChange={this.handleMonthChange}
                        style={style.selectMonth}
                        labelStyle={style.labelStyle}
                        iconStyle={style.iconStyle}
                    >
                        {monthItems}
                    </DropDownMenu>
                    <FlatButton
                        primary={true}
                        label="返回今天"
                        style={style.flatButton}
                    />
                </div>
                <div className="line-blue margin-10"></div>
                <table cellSpacing='0'>

                    <tbody>
                    <tr>
                        {days.map((day, index) => <td key={index}>{day}</td>)}
                    </tr>
                    {calTrs.map((trDom, idx) => <tr key={idx}>
                        {trDom}
                    </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }

}
