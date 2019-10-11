import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HomepageOverlay from './home/homepage-overlay/Homepage-overlay';
import getDummyMachines from './services/dummy.data';

const getMachineList = getDummyMachines;

let machines = getMachineList(); // machine array


ReactDOM.render(<HomepageOverlay />,document.getElementById('overlay'));
ReactDOM.render(<App machineList={machines} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
