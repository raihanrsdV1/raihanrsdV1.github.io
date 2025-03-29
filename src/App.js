import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/research" element={<Research />} />
      </Routes>
    </Router>
  );
}

export default App;
