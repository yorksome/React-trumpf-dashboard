import { REQUEST_MACHINELIST_SUCCESS, REQUEST_MACHINELIST_PENDING, REQUEST_MACHINELIST_ERROR } from '../action-types';
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

export function requestMachineListPending(){
    return {
        type: REQUEST_MACHINELIST_PENDING,
    }
}



export function requestMachineList(){
     return (dispatch, getState) => {
         axios.get(`https://localhost:44395/dt/api/MS/GetAllMachines`)
           .then(
               response => {
                   console.log(response.request.status? response.request.status : 'response unknown');
                   dispatch(requestMachineListSuccess(response.data));
               }
           ).catch(
               error => {
                   dispatch(requestMachineListError(error));
               }
           )
     }
}