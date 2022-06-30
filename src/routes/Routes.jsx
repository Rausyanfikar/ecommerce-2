import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePages from '../pages/HomePages';
import Login from '../pages/Login';
import Detail from '../pages/Detail';
import Testimoni from '../pages/Testimoni';
import AddProduct from '../pages/AddProduct';
import EditProduct from '../pages/EditProduct';
import MyProduct from '../pages/MyProduct';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:detail_id" element={<Detail />} />
        <Route path="/testimoni" element={<Testimoni />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/myproduct" element={<MyProduct />} />
        <Route path="/myproduct/:product_id" element={<EditProduct />} />

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
