const SET_DAYS = 'my-app/app/SET_DAYS';
const SET_HOURS = 'my-app/app/SET_HOURS';
const SET_MINUTES = 'my-app/app/SET_MINUTES';
const SET_SECONDS = 'my-app/app/SET_SECONDS';


let initialState = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_DAYS:
      return {
        ...state,
        days: action.days
      }
    case SET_HOURS:
      return {
        ...state,
        hours: action.hours
      }
    case SET_MINUTES:
      return {
        ...state,
        minutes: action.minutes
      }
    case SET_SECONDS:
      return {
        ...state,
        seconds: action.seconds
      }
    
    default:
      return state;
  }
}

// action

export const setDays = (days) => ({ type: SET_DAYS, days});
export const setHours = (hours) => ({ type: SET_HOURS, hours});
export const setMinutes = (minutes) => ({ type: SET_MINUTES, minutes});
export const setSeconds = (seconds) => ({ type: SET_SECONDS, seconds});

export default reducer;