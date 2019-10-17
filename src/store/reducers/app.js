import { REQUEST_MACHINELIST_SUCCESS, REQUEST_MACHINELIST_PENDING, REQUEST_MACHINELIST_ERROR } from '../action-types';

const initialState = {
    pending: false,
    machineList: [],
    error: null
}

function app(state = initialState, action){
    switch(action.type){
        case REQUEST_MACHINELIST_SUCCESS: 
            return {
                ...state,
                machineList: action.payload
            }
        case REQUEST_MACHINELIST_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case REQUEST_MACHINELIST_PENDING:
            return {
                ...state,
                pending: true
            }
        default:
            return state;
    }
}

export default app;