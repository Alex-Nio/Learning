import About from './../../pages/About';
import Posts from './../../pages/Posts';
import PostId from '../../pages/PostId';
import Login from '../../pages/Login';
import { Navigate } from 'react-router-dom';

export const privateRoutes = [
  { path: '/about', element: <About />, exact: true },
  { path: '/posts', element: <Posts />, exact: true },
  { path: '/posts/:id', element: <PostId />, exact: true },
  { path: '/', element: <Posts />, exact: true },
  { path: '*', element: <Navigate to="/posts" replace />, exact: true }, // Redirect
];

export const publicRoutes = [
  { path: '/login', element: <Login />, exact: true },
  { path: '*', element: <Navigate to="/login" replace />, exact: true }, // Redirect
];
