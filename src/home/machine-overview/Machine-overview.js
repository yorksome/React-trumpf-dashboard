import React from 'react';
import './Machine-overview.scss';
import SingleMachine from './single-machine-dashboard/Single-machine-dashboard';


class MachineOverview extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        if(this.props.machineList && this.props.machineList.length>0) {
            return (
                <div className="machine-overview">
                    {
                        this.props.machineList.map((item) => {
                            return <SingleMachine info={item} key={item.MachineUuid} />
                        })
                    }
                </div>
            );
        }
        else {
            console.log(`No received machines`);
            return null;
        }
        
    }
}

export default MachineOverview;