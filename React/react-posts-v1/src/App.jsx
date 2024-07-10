import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './app/router/AppRouter';
import Navbar from './components/navbar/navbar';
import { AuthContext } from './app/context';
// Styles
import './app/styles/scss/styles.scss';

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) setIsAuth(true);
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
