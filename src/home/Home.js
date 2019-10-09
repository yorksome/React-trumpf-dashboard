import React from 'react';
import HomepageOverlay from './homepage-overlay/Homepage-overlay'
import './Home.scss';
import MachineOverview from './machine-overview/Machine-overview';

const Home = () => {
  return (
      <div>
          <HomepageOverlay />
          <MachineOverview />
      </div>
  );
}

export default Home;


