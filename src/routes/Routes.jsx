import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePages from '../pages/HomePages';
import Login from '../pages/Login';
import Detail from '../pages/Detail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
