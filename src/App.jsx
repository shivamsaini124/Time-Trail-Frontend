import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import IntroPage from './Components/Intro/Intro'; // Add this import
import Home from './Pages/Home/Home';
import StorySelection from './Components/StorySelection/StorySelection';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import StoryPage from './Components/StoryPage/StoryPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    // Check auth status without automatic redirect
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
    setAuthChecked(true);
  }, []);

  if (!authChecked) {
    return <div className="loading-screen">Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        {/* Intro Page (Always accessible) */}
        <Route path="/" element={<IntroPage />} />
        
        {/* Public routes */}
        <Route path="/login" element={
          false ? <Navigate to="/home" replace /> : <Login setIsAuthenticated={setIsAuthenticated} />
        } />
        <Route path="/signup" element={
          isAuthenticated ? <Navigate to="/home" replace /> : <Signup setIsAuthenticated={setIsAuthenticated} />
        } />
        
        {/* Protected routes */}
        <Route path="/home" element={
          isAuthenticated ? <Home /> : <Navigate to="/login" replace />
        } />
        <Route path="/:era/stories" element={
          isAuthenticated ? <StorySelection /> : <Navigate to="/login" replace />
        } />

        <Route path="/:era/stories/:storyId" element={
          isAuthenticated ? <StoryPage /> : <Navigate to="/login" replace />
        } />

        {/* Fallback */}
        <Route path="*" element={<Navigate to={isAuthenticated ? "/home" : "/"} replace />} />
      </Routes>
    </Router>
  );
}

export default App;