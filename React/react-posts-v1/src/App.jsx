import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import AppRouter from './app/router/AppRouter';
// Styles
import './app/styles/scss/styles.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}
