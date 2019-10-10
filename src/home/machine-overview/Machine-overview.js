import React from 'react';
import './Machine-overview.scss';
import SingleMachine from './single-machine-dashboard/Single-machine-dashboard';


class MachineOverview extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="machine-overview">
                <SingleMachine info={this.props.machineList[0]} />
            </div>
        );
    }
}

export default MachineOverview;