import React from 'react';
import Home from './home/Home';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestMachineList } from './store/actions/app';


class App extends React.Component{
  constructor(props){
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
    const { requestMachineList } = this.props.actions;
    requestMachineList();
  }

  shouldComponentRender() {
    const {success, wsCall} = this.props;
    let shouldRender = success && wsCall.open;

    return shouldRender? true: false;
  }

  render() {
    // const machines = getDummyMachines();
    const { machineList, wsCall } = this.props;
    if(!this.shouldComponentRender()){
      return (
          null
      );
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
    success: state.app.success,
    error: state.app.error,
    machineList: state.app.machineList,
    wsCall: {
      open: state.app.wsCall.open,
      message: state.app.wsCall.message,
      close: state.app.wsCall.close
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      requestMachineList: requestMachineList,
      //other actions
    }, dispatch)
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
