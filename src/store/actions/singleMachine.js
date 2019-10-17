import * as actionTypes from '../action-types';

const singleMachine = {
    updateUI(machine){
        return{
            type: actionTypes.UPDATE_SINGLE_MACHINE,
            machine
        }
    }
}

export default singleMachine;