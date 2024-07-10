import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../app/context';

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <div className="navbar">
      <button onClick={logout}>Выйти</button>
      <div className="navbar__links" style={{ alignItems: 'center' }}>
        <Link to="/login">Войти</Link>
        <Link to="/about">О сайте</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </div>
  );
};

export default Navbar;
