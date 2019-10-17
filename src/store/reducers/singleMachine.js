import { UPDATE_SINGLE_MACHINE } from '../action-types';

const initialState = {};

const newState = {};

function singleMachine(state=initialState, action){
    switch(action.type){
        case UPDATE_SINGLE_MACHINE:
            return Object.assign({}, state, newState);
        default:
            return state;
    }
}

export default singleMachine;