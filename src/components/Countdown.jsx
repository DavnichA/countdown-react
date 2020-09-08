import React from 'react';


const Countdown = ({days, hours, minutes, seconds}) => {

    return (
        <div className="countdown-container">
            <div className="count-down days-container">
                <p className="big-text days">{days}</p>
                <span>Days</span>
            </div>
            <div className="count-down hours-container">
                <p className="big-text hours">{hours}</p>
                <span>Hours</span>
            </div>
            <div className="count-down minutes-container">
                <p className="big-text minutes">{minutes}</p>
                <span>Mins</span>
            </div>
            <div className="count-down seconds-container">
                <p className="big-text seconds">{seconds}</p>
                <span>Seconds</span>
            </div>
        </div>
    );
}

export default Countdown;