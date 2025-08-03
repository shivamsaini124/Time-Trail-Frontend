import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './StorySelection.css';

const StorySelection = () => {
  const { era } = useParams();
  const [selectedStory, setSelectedStory] = useState(null);

  const stories = {
    medieval: [
      "The Siege of Dragonskeep",
      "The Black Plague Conspiracy",
      "The King's Assassin"
    ],
    mythological: [
      "The Game of Dice",
      "Bhagavad Gita's Revelation",
      "The Kurukshetra War"
    ]
  };

  const handleGenerate = () => {
    const randomIndex = Math.floor(Math.random() * stories[era].length);
    setSelectedStory(stories[era][randomIndex]);
  };

  return (
    <div className={`selection-container ${era}-bg`}>
      <div className="dark-overlay"></div>
      
      <h1 className="selection-title">{era === 'medieval' ? 'Medieval' : 'Mythological'} Events</h1>
      
      <div className="stories-grid">
        {stories[era].map((story, index) => (
          <div key={index} className="story-item">
            <div 
              className={`story-blur-box ${selectedStory === story ? 'selected' : ''}`}
              onClick={() => setSelectedStory(story)}
            ></div>
            <div className="story-text">{story}</div>
          </div>
        ))}
      </div>

      <div className="generate-wrapper">
        <button className="generate-btn" onClick={handleGenerate}>
          <div className="oval-blur-box"></div>
          <span className="btn-text">Generate</span>
        </button>
        {selectedStory && (
          <Link 
            to={`/${era}/story/${selectedStory.replace(/\s+/g, '-').toLowerCase()}`} 
            className="play-btn"
          >
            Play {selectedStory}
          </Link>
        )}
      </div>
    </div>
  );
};

export default StorySelection;