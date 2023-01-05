import React from "react";
import "../styles/header.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faMagnifyingGlass,faAngleLeft,faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {format} from "date-fns";
// import { Routes, Route } from "react-router-dom";
function Header(props){
    const onChange = props.onChange;
    const value = props.value;
    const prevMonth = props.prevMonth;
    const nextMonth = props.nextMonth;
    function iconClick(){
        props.view()
    }
    function handleSetToday(){
        onChange(new Date())
    }
    return(
        <div className="header">
            {/* <div className="left-side"> */}
            <div className="bar-icon" onClick={()=>iconClick()}>
                <FontAwesomeIcon icon={faBars}/>
            </div>
            <div className="calendar">Calendar</div>
            <button className="today-button" onClick={()=>handleSetToday()}>Today</button>
            <div className="calendar-angle" onClick={()=>prevMonth()}><FontAwesomeIcon icon={faAngleLeft}/></div>
            <div className="calendar-month">{format(value,"LLLL")}</div>
            <div className="calendar-angle" onClick={()=>nextMonth()}><FontAwesomeIcon icon={faAngleRight}/></div>
            {/* </div> */}
            
            {/* <div className="right-side"> */}
            <div className="search-box">
                <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass}/>
                <input className="text-area" type="text" placeholder="Search"></input>
            </div>
            <div className="year">{format(value,"yyyy")}</div>
            {/* </div> */}
        </div>
    );
}

export default Header;