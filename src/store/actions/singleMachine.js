import * as actionTypes from '../action-types';

export function requestMachineDetail(id){
    return{
        type: actionTypes.REQUEST_MACHINEDETAIL,
        payload: id
    }
}

