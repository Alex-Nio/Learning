import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';

const AppRouter = () => {
  return (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
