import React from 'react';
import './Single-machine-dashboard.scss';

class SingleMachine extends React.Component{
    render(){
        return (
            <div class="machine-container">
                <div class="status-bar">
                </div>
                <div class="machine_info">
                    <div class="machine_name">
                        <span>TruLaser 3030</span>
                    </div>
                    <div class="machine_number">
                        <span>A1221J0001</span>
                    </div>
                </div>
                <div class="machine_img">
                    <img src="/images/TruLaser3030.jpg" alt="" />
                </div>
                <div class="running-status">
                    <div class="program_status_icon">
                        <img src="/images/icon.JPG" alt="" />
                    </div>
                    <div class="program_name">
                        <span>MIX1447_6</span>
                    </div>
                    <div class="program_time">
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleMachine;