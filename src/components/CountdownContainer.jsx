import React from 'react';
import { connect } from 'react-redux';
//actions
import {setDays, setHours, setMinutes, setSeconds } from './redux/reducer';
//components
import Countdown from './Countdown';


const CountdownContainer = (props) => {

    const setDate = '1 Jan 2021';

    const countdown = () => {
        const newYearsDate = new Date(setDate);
        const currentDate = new Date();
        const totalSeconds = (newYearsDate - currentDate) / 1000;

        props.setDays(Math.floor(totalSeconds / 3600 / 24));
        props.setHours(formatDate(Math.floor(totalSeconds / 3600) % 24));
        props.setMinutes(formatDate(Math.floor(totalSeconds / 60) % 60 ));
        props.setSeconds(formatDate (Math.floor(totalSeconds) % 60));
    }
    
    const formatDate = (time) => {
        return time < 10 ? `0${time}` : time;
    }
    setInterval(countdown, 1000);

    return (
        <Countdown 
        days={props.days}
        hours={props.hours}
        minutes={props.minutes}
        seconds={props.seconds}/>
    );
}


let mapStateToProps = (state) => {
    return {
        days: state.countdownPage.days,
        hours: state.countdownPage.hours,
        minutes: state.countdownPage.minutes,
        seconds: state.countdownPage.seconds
    }
}

export default connect(mapStateToProps, {setDays, setHours, setMinutes, setSeconds})(CountdownContainer);