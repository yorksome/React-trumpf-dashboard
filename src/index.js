import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HomepageOverlay from './home/homepage-overlay/Homepage-overlay';

const getMachineList = () =>{
   return [{
    DataType: 1,
    DisplayOrder: 2,
    Entity: "11f410f2773d447bae322283ea498d54",
    From: "0001-01-01T00:00:00",
    Id: "A1221J0001",
    MachineImg: "Not implenment yet",
    MachineStatusResult: {
        MachineUuid: "00000000-0000-0000-0000-000000000000",
        Status: 1,
        Time: "2019-09-18T08:32:42.91Z",
        UpdateAt: "2019-09-18T08:35:34.952Z",
    },
    MachineUuid: "31c2139a-bdb6-4ad6-9fa5-9bc90b94f3ab",
    Name: "TruLaser 3030",
    PropertySetName: "M_125UHBNP_Machine_Aspect",
    To: "0001-01-01T00:00:00",
   }];
}

let machines = getMachineList(); // machine array


ReactDOM.render(<HomepageOverlay />,document.getElementById('overlay'));
ReactDOM.render(<App machineList={machines} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
