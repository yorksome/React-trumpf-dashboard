import React from 'react';
import Home from './home/Home';
import './App.css';


class App extends React.Component{
  // constructor(props){
  //   super(props);
  // }

  render(){
    return (
        <div className="App">
           <Home machineList={this.props.machineList} />
        </div>
    );
  }
}

export default App;
