import React from 'react';
import './Home.scss';
import MachineOverview from './machine-overview/Machine-overview';

class Home extends React.Component{
  // constructor(props){
  //   super(props);
  // }

  render(){
    return (
      <div>
        <MachineOverview machineList={this.props.machineList} wsCall={this.props.wsCall} />
      </div>
    );
  }
}

export default Home;


