import React from 'react';
import Home from './home/Home';
import './App.css';
import getDummyMachines from './services/dummy.data';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestMachineList, connectWsCall } from './store/actions/app';


class App extends React.Component{
  constructor(props){
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
    const { requestMachineList, connectWsCall} = this.props;
    requestMachineList();
    connectWsCall();
  }

  shouldComponentRender() {
    const {pending, wsCall} = this.props;
    // if pending, do not render machines
    if(pending || wsCall.close){
      return false;
    }

    //else render
    return true;
  }

  render() {
    // const machines = getDummyMachines();
    const { machineList, wsCall } = this.props;
    if(!this.shouldComponentRender()){
      return null;
    }

    return (
        <div className="App">
           <Home machineList={machineList} wsCall={wsCall.message}/>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.app.error,
    machineList: state.app.machineList,
    wsCall: {
      open: state.app.wsCall.open,
      message: state.app.wsCall.message,
      close: state.app.wsCall.close
    },
    pending: state.app.pending
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  requestMachineList: requestMachineList,
  connectWsCall: connectWsCall
}, dispatch)

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
