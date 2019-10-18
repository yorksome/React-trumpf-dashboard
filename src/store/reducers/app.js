import { REQUEST_MACHINELIST_SUCCESS, REQUEST_MACHINELIST_PENDING, REQUEST_MACHINELIST_ERROR, WEBSOCKET_OPEN, WEBSOCKET_MESSAGING, WEBSOCKET_CLOSE } from '../action-types';

const initialState = {
    pending: false,
    machineList: [],
    wsCall: {
        open: false,
        message: [],
        close: false
    },
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
        case WEBSOCKET_OPEN:
            return {
                ...state,
                wsCall: {
                    ...state.wsCall,
                    open: true,
                    close: false
                }
            }
        case WEBSOCKET_MESSAGING:
            return {
                ...state,
                wsCall: {
                   open: true,
                   message: action.payload,
                   close: false
                }

            }
        case WEBSOCKET_CLOSE:
            return {
                ...state,
                wsCall: {
                    ...state.wsCall,
                   open: false,
                   close: true
                }
            }
        default:
            return state;
    }
}

export default app;