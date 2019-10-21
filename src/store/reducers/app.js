import { REQUEST_MACHINELIST_SUCCESS, REQUEST_MACHINELIST_ERROR, WEBSOCKET_OPEN, WEBSOCKET_MESSAGING, WEBSOCKET_CLOSE } from '../action-types';

const initialState = {
    success: false,
    error: null,
    machineList: [],
    wsCall: {
        open: false,
        message: [],
        close: false
    },
}

function app(state = initialState, action){
    switch(action.type){
        case REQUEST_MACHINELIST_SUCCESS: 
            return {
                ...state,
                success: true,
                error: null,
                machineList: action.payload
            }
        case REQUEST_MACHINELIST_ERROR:
            return {
                ...state,
                success: false,
                error: action.error,
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