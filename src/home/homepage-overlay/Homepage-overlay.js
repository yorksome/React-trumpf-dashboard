import React from 'react';
import './Homepage-overlay.scss';

const HomepageOverlay = () => {
   return (
    <div class="header">
        <div class="header-sub">
            <img id="truconnect_logo" src="/images/trumpf_logo.JPG" alt="" />
        </div>
        <div class="header-sub2">
            <ul>
                <li class="language-switch">
                    <a>CN</a>|<a>EN</a>
                </li>
                <li class="tabs">
                    <div class="nav-site">
                        <div class="nav-menu">
                            <a class="hoverBold">
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