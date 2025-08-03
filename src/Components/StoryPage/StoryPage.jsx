import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './StoryPage.css';

const StoryPage = () => {
  const { era, storyId } = useParams();
  const [storyData, setStoryData] = useState({
    picture: '',
    summary: '',
    question: '',
    choices: []
  });

  // Mock data - replace with your actual data fetching
  useEffect(() => {
    const stories = {
      medieval: {
        'the-siege-of-dragonskeep': {
          picture: 'dragonskeep.jpg',
          initialSummary: 'The kingdom is under siege by dragon forces...',
          question: 'How will you defend the castle?',
          choices: ['Build stronger walls', 'Train dragon slayers']
        },
        // Add other medieval stories
      },
      mythological: {
        'the-game-of-dice': {
          picture: 'dice-game.jpg',
          initialSummary: 'A high-stakes game that changes destinies...',
          question: 'Will you accept the challenge?',
          choices: ['Play the game', 'Refuse and walk away']
        },
        // Add other mythological stories
      }
    };

    const data = stories[era]?.[storyId];
    if (data) {
      setStoryData({
        picture: data.picture,
        summary: data.initialSummary,
        question: data.question,
        choices: data.choices
      });
    }
  }, [era, storyId]);

  const handleChoiceSelect = (choiceIndex) => {
    // Update story state based on choice
    const newSummary = `After choosing "${storyData.choices[choiceIndex]}", the story develops...`;
    setStoryData(prev => ({
      ...prev,
      summary: newSummary,
      // Update other states as needed
    }));
  };

  return (
    <div className={`story-page ${era}-bg`}>
      <div className="dark-overlay"></div>
      
      <div className="story-layout">
        {/* Picture Box (Top Left) */}
        <div className="story-box picture-box">
          <img 
            src={`/assets/${storyData.picture}`} 
            alt={storyId.replace(/-/g, ' ')} 
            className="story-image"
          />
        </div>
        
        {/* Summary Box (Right Side) */}
        <div className="story-box summary-box">
          <h3>Summary</h3>
          <p>{storyData.summary}</p>
        </div>
        
        {/* Question Box (Bottom Left) */}
        <div className="story-box question-box">
          <h3>Question</h3>
          <p>{storyData.question}</p>
        </div>
        
        {/* Choices Box (Bottom Right) */}
        <div className="story-box choices-box">
          <h3>Choices</h3>
          <div className="choices-list">
            {storyData.choices.map((choice, index) => (
              <div 
                key={index}
                className="choice-item"
                onClick={() => handleChoiceSelect(index)}
              >
                {choice}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;