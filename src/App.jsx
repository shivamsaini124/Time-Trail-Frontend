import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import StorySelection from './Components/StorySelection/StorySelection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:era/stories" element={<StorySelection />} />
        {/* Add your story pages route later */}
      </Routes>
    </Router>
  );
}

export default App;