import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Intro from './components/Intro';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Intro />} bg="dark" />
      <Route path="/*" element={<Layout />} bg="dark" />
    </Routes>
  </BrowserRouter>
);
export default App;
