import { REQUEST_MACHINEDETAIL } from '../action-types';

const initialState = {
    success: false
};


function singleMachine(state = initialState, action){
    switch(action.type){
        case REQUEST_MACHINEDETAIL:
            return {
                ...state,
                success: true
            }
        default:
            return state;
    }
}

export default singleMachine;