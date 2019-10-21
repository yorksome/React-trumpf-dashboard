import React from 'react';
import './Home.scss';
import MachineOverview from './machine-overview/Machine-overview';

class Home extends React.Component{
  // constructor(props){
  //   super(props);
  // }

  render(){
    if(this.props.wsCall && this.props.wsCall.length > 0)
    {
      return (
        <div>
          <MachineOverview machineList={this.props.machineList} wsCall={this.props.wsCall} />
        </div>
      );
    } else {
       console.log(`wscall not built-up`)
       return null;
    }
  }
}

export default Home;


