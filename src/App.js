import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Entry from './pages/Entry';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Entry />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
