import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import Questions from './pages/Questions';
import Answers from './pages/Answers';
import QuestionId from './pages/QuestionId';
import Error from './pages/Error';
import './app/scss/global.scss';

export default function App() {
  return (
    <div className="app">
      <div className="app__container">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Questions />} />
            <Route path="/questions/:category/:id" element={<QuestionId />} />
            <Route path="/answers" element={<Answers />} />
            {/* Error page */}
            {/* <Route path="*" element={<Error />} /> */}
            {/* Redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
