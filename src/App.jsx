import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroAnimation from './components/IntroAnimation';
import Home from './pages/Home';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 300000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {showIntro ? (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      ) : (
        <Routes>
          <Route path="/" element={<Loading/>} />
        </Routes>

      )}
    </Router>
  );
}

export default App;