import React from 'react';
import './Machine-overview.scss';
import SingleMachine from './single-machine-dashboard/Single-machine-dashboard';


class MachineOverview extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        if(this.props.machineList && this.props.machineList.length>0) {
            let group = (mg) => {
                if(mg.Machines && mg.Machines.length>0)
                   return (
                       <div className="group" key={mg.GroupName+mg.GroupOrder}>
                        {
                            mg.Machines.map((item,index) => {
                                return <SingleMachine info={item} ws={this.props.wsCall[index]} key={item.MachineUuid} />
                            })
                        }
                       </div>
                   ); 
                   
            }

            return (
                <div className="machine-overview">
                    {
                        this.props.machineList.map((item) => {
                            return group(item);
                        })
                    }
                </div>
            );
        }
        else {
            // console.log(`No received machines`);
            return null;
        }
        
    }
}

export default MachineOverview;