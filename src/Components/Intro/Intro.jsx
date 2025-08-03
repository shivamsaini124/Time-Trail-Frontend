import { useNavigate } from 'react-router-dom';
import './Intro.css';

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="intro-container">
      <div className="title-blur-box">
        <h1>TIME TRAIL</h1>
        <p className="subtitle">Where history becomes your adventure...</p>
      </div>

      <button 
        className="start-button" 
        onClick={() => navigate('/login')}
      >
        START
      </button>
    </div>
  );
};

export default IntroPage;