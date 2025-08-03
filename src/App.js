import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import StoryGame from './pages/StoryGame/StoryGame'; // You'll need to create this

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story/:id" element={<StoryGame />} />
      </Routes>
    </Router>
  );
}