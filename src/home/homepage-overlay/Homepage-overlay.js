import React from 'react';
import './Homepage-overlay.scss';

const HomepageOverlay = () => {
   return (
    <div className="header">
        <div className="header-sub">
            <img id="truconnect_logo" src="/images/trumpf_logo.JPG" alt="" />
        </div>
        <div className="header-sub2">
            <ul>
                <li className="language-switch">
                    <a>CN</a>|<a>EN</a>
                </li>
                <li className="tabs">
                    <div className="nav-site">
                        <div className="nav-menu">
                            <a className="hoverBold">
                                Machine Overview
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
   );
}

export default HomepageOverlay;