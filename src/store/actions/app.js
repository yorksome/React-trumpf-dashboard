import { REQUEST_MACHINELIST_SUCCESS, REQUEST_MACHINELIST_PENDING, REQUEST_MACHINELIST_ERROR, WEBSOCKET_OPEN, WEBSOCKET_MESSAGING, WEBSOCKET_CLOSE } from '../action-types';
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
         axios.get(`https://localhost:44395/dt/api/MS/GetAllMachines`)
           .then(
               response => {
                   console.log(response.request.status? response.request.status : 'response unknown');
                   dispatch(requestMachineListSuccess(response.data));
                   connectWs(response.data, dispatch);
               }
           ).catch(
               error => {
                   dispatch(requestMachineListError(error));
               }
           )
     }
}

function connectWs(data, dispatch){
    const ws = new WebSocket('wss://localhost:44395/dt/wscall');
    const machineList = data;
    let macUuids = [];
    const collectUuid = (arr) => {
        let macUuids = [];
        for(let i=0; i< arr.length; i++){
            if(arr[i].Machines && Array.isArray(arr[i].Machines))
            {
                macUuids = macUuids.concat(collectUuid(arr[i].Machines))
            }
            else {
                macUuids.push(arr[i].MachineUuid)
            }
        }
        return macUuids;
    }
    
    ws.onopen = () => {
        // send machine uuids, otherwise no data back in message
        // relative to backend 
        macUuids = collectUuid(machineList);

        if(macUuids.length > 0)
        {
            ws.send(JSON.stringify(macUuids));
            dispatch(openWebsocket());
            console.log(`ws connected`);
        }else{
            dispatch(closeWebsocket());
            console.log(`Ws didn't received macUuids.`)
        }
    }

    ws.onmessage = (evt) => {
        if(evt) {
            dispatch(onMessageWebSocket(JSON.parse(evt.data)));
        }
    }

    ws.onclose = (e) => {
        dispatch(closeWebsocket());
        console.log(`ws closed`);
    }
}

