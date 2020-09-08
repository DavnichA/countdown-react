import {createStore, combineReducers} from 'redux';
import reducer from './reducer';

const reducers = combineReducers({countdownPage: reducer});

let store = createStore(reducers);


export default store;