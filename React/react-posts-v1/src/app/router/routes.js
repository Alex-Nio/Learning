import About from './../../pages/About';
import Posts from './../../pages/Posts';
import Error from './../../pages/Error';
import PostId from '../../pages/PostId';
import Login from '../../pages/Login';

export const privateRoutes = [
  { path: '/about', element: <About />, exact: true },
  { path: '/posts', element: <Posts />, exact: true },
  { path: '/posts/:id', element: <PostId />, exact: true },
  { path: '/', element: <Posts />, exact: true },
  { path: '*', element: <Error />, exact: true },
];

export const publicRoutes = [
  { path: '/login', element: <Login />, exact: true },
];

//* Redirect
/* <Route path="*" element={<Navigate to="/posts" replace />} /> */
