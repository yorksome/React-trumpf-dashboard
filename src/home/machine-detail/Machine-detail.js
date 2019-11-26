import React from 'react';
import './Machine-detail.scss';
import MachineSearch from '../shared/components/machine-search/Machine-search';

// const OeeDataLoader = (props) => {
//    return (
//         <div className="OeeDataLoader">
            
//         </div>
//    );
// }

class MachineDetail extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return (
            <div className='machine-detail'>
                <div className="machine_search">
                   <MachineSearch machineList={this.props.machineList} wsCall={this.props.wsCall} />
                </div>
                <div className="machine_content">
                   
                </div>
            </div>
        );
    }
}

export default MachineDetail;