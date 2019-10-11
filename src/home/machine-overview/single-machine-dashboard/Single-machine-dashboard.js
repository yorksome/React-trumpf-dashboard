import React from 'react';
import './Single-machine-dashboard.scss';

class SingleMachine extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            ProgramName: null,
            Status: 2 //offline as default
        };
    }

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
        const machineStatus = this.state.Status;
        const getStatusClass = () => {
            switch(machineStatus){
                case 0: return `status-bar inpause`;
                case 1: return `status-bar running`;
                case 2: return `status-bar offline`;
                case 3: return `status-bar error`;
            }
        }

        return (
            <div className="machine-container">
                <div className={getStatusClass()}>
                </div>
                <div className="machine_info">
                    <div className="machine_name">
                        <span>{this.props.info.Name}</span>
                    </div>
                    <div className="machine_number">
                        <span>{this.props.info.Id}</span>
                    </div>
                </div>
                <div className="machine_img">
                    <img src={this.getImageUri(this.props.info.Id)} alt="" />
                </div>
                <div className="running-status">
                    <div className="program_status_icon">
                        <img src="/images/icon.JPG" alt="" />
                    </div>
                    <div className="program_name">
                        <span>{this.state.ProgramName}</span>
                    </div>
                    <div className="program_time">
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleMachine;