import React from 'react';
import './Single-machine-dashboard.scss';

class SingleMachine extends React.Component{
    render(){
        return (
            <div className="machine-container">
                <div className="status-bar">
                </div>
                <div className="machine_info">
                    <div className="machine_name">
                        <span>TruLaser 3030</span>
                    </div>
                    <div className="machine_number">
                        <span>A1221J0001</span>
                    </div>
                </div>
                <div className="machine_img">
                    <img src="/images/TruLaser3030.jpg" alt="" />
                </div>
                <div className="running-status">
                    <div className="program_status_icon">
                        <img src="/images/icon.JPG" alt="" />
                    </div>
                    <div className="program_name">
                        <span>MIX1447_6</span>
                    </div>
                    <div className="program_time">
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleMachine;