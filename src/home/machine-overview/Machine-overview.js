import React from 'react';
import './Machine-overview.scss';
import SingleMachine from './single-machine-dashboard/Single-machine-dashboard';

const MachineOverview = () => {
    return (
        <div class="machine-overview">
           <SingleMachine />
           <SingleMachine />
           <SingleMachine />
           <SingleMachine />
           <SingleMachine />
           <SingleMachine />
           <SingleMachine />
        </div>
    );
}

export default MachineOverview;