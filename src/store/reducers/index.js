import singleMachine from './singleMachine';
import app from './app';
import { combineReducers } from 'redux';

export default combineReducers({
    app,
    singleMachine
});