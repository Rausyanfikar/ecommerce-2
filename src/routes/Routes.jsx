import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePages from '../pages/HomePages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
