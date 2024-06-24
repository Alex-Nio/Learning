import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
// Styles
import About from './pages/About';
import Posts from './pages/Posts';
import Error from './pages/Error';
import './app/styles/scss/styles.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        {/* Error page */}
        <Route path="*" element={<Error />} />
        {/* Redirect */}
        {/* <Route path="*" element={<Navigate to="/posts" replace />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
