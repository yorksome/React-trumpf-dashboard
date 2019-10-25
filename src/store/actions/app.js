import { REQUEST_MACHINELIST_SUCCESS, REQUEST_MACHINELIST_ERROR, WEBSOCKET_OPEN, WEBSOCKET_MESSAGING, WEBSOCKET_CLOSE } from '../action-types';
import { ws_connect } from '../../services/websocket.service';
import axios from 'axios';

export function requestMachineListSuccess(data){
    return {
        type: REQUEST_MACHINELIST_SUCCESS,
        payload: data
    }
}

export function requestMachineListError(error){
    return {
        type: REQUEST_MACHINELIST_ERROR,
        error: error
    }
}

// export function requestMachineListPending(){
//     return {
//         type: REQUEST_MACHINELIST_PENDING,
//     }
// }

export function openWebsocket(){
    return {
        type: WEBSOCKET_OPEN
    }
}

export function onMessageWebSocket(data){
    return {
        type: WEBSOCKET_MESSAGING,
        payload: data
    }
}

export function closeWebsocket(){
    return {
        type: WEBSOCKET_CLOSE
    }
}


export function requestMachineList(){
     return (dispatch, getState) => {
         axios.get(`${process.env.REACT_APP_API_URL}/MS/GetAllMachines`)
           .then(
               response => {
                   console.log(response.request.status? response.request.status : 'response unknown');
                   dispatch(requestMachineListSuccess(response.data));
                   ws_connect(response.data, dispatch);
               }
           ).catch(
               error => {
                   dispatch(requestMachineListError(error));
               }
           )
     }
}

