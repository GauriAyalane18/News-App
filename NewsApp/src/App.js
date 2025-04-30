import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';

const App = () => {
  const pageSize = 16; 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<News key="general" pageSize={pageSize} category="general" />} />
        <Route path="/business" element={<News key="business" pageSize={pageSize} category="business" />} />
        <Route path="/entertainment" element={<News key="entertainment" pageSize={pageSize} category="entertainment" />} />
        <Route path="/general" element={<News key="general" pageSize={pageSize} category="general" />} />
        <Route path="/health" element={<News key="health" pageSize={pageSize} category="health" />} />
        <Route path="/science" element={<News key="science" pageSize={pageSize} category="science" />} />
        <Route path="/sports" element={<News key="sports" pageSize={pageSize} category="sports" />} />
        <Route path="/technology" element={<News key="technology" pageSize={pageSize} category="technology" />} />
      </Routes>
    </Router>
  );
};

export default App;
