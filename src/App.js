import React from 'react';
import Home from './home/Home';
import './App.css';
import getDummyMachines from './services/dummy.data';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestMachineList } from './store/actions/app';


class App extends React.Component{
  constructor(props){
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
    const {requestMachineList} = this.props;
    requestMachineList();
  }

  shouldComponentRender() {
    const {pending} = this.props;
    // if pending, do not render machines
    if(pending === true){
      return false;
    }

    //else render
    return true;
  }

  render() {
    // const machines = getDummyMachines();
    const { machineList } = this.props;
    if(!this.shouldComponentRender()){
      return null;
    }

    return (
        <div className="App">
           <Home machineList={machineList} />
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.app.error,
    machineList: state.app.machineList,
    pending: state.app.pending
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  requestMachineList: requestMachineList
}, dispatch)

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
