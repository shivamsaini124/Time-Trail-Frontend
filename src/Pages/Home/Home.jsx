import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import backgroundImage from '../../assets/background.png';

const Home = () => {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="era-selection">
        <h1 className="title">Choose Your Adventure Era</h1>
        
        <div className="era-options">
          <div className="era-card">
            <div className="card-image medieval"></div>
            <div className="card-content">
              <h2>Medieval Events</h2>
              <p>Knights, castles, and political intrigue</p>
              <Link to="/medieval/stories" className="play-button">Play</Link>
            </div>
          </div>
          
          <div className="era-card">
            <div className="card-image mythological"></div>
            <div className="card-content">
              <h2>Mythological Events</h2>
              <p>Gods, monsters, and ancient prophecies</p>
              <Link to="/mythological/stories" className="play-button">Play</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;