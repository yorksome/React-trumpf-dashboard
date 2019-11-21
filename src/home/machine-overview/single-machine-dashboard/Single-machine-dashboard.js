import React from 'react';
import './Single-machine-dashboard.scss';
import { withRouter } from "react-router";

class SingleMachineDashboard extends React.Component{
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         ProgramName: null,
    //         Status: 2 //offline as default
    //     };
    // }

    getImageUri = (machineId) => {
      switch(machineId){
        case "A0455C0265":
            return '/images/TruLaserRobot.jpg';
        case "B0101J0002":
            return '/images/TruBend1100.jpg';
        case "A2242J0001":
            return '/images/TruLaser3030fiber.jpg';
        case "A2242J0002":
            return '/images/TruPunch3000.jpg';
        case "A2242J0003":
            return '/images/TruBend1100.jpg';
        case "B0504A0919":
            return '/images/TruBend5130.jpg';
        case "B0509A0549":
            return '/images/TruBend5320.jpg';
        case "A1221J0001":
            return '/images/TruLaser3030fiber.jpg';
        case "A1221J2222":
            return '/images/TruBendCell.jpg';
        default:
            return '/images/WeldingMachine.jpg';
      }
    }

    render(){
        const { info, ws, history } = this.props;
        const getStatusClass = () => {
            switch(ws.Status){
                case 0: return `status-bar InPause`;
                case 1: return `status-bar Running`;
                case 2: return `status-bar Offline`;
                case 3: return `status-bar Error`;
                default: return `status-bar`;
            }
        }

        return (
            <div className="machine-container" onClick={()=>{ history.push(info.Id) }}>
                <div className={getStatusClass()} />
                <div className="machine_info">
                    <div className="machine_name">
                        <span>{info.Name}</span>
                    </div>
                    <div className="machine_number">
                        <span>{info.Id}</span>
                    </div>
                </div>
                <div className="machine_img">
                    <img src={this.getImageUri(info.Id)} alt="" />
                </div>
                <div className="running-status">
                    <div className="program_status_icon">
                        <img className={ws.Status === 1? "running" : "pause"} src={ws.Status === 1? "/images/icon.JPG" : "/images/icon2.JPG"} alt="" />
                    </div>
                    <div className="program_name">
                        <span>{ws.ProgramName? ws.ProgramName : "Prog.No.: ----"}</span>
                    </div>
                    <div className="program_time">
                    </div>
                </div>
            </div>
        )
    }
}

const SingleMachine = withRouter(SingleMachineDashboard);

export default SingleMachine;