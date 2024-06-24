import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './navigation.module.scss';

const Navigation = () => {
  return (
    <div className={cl.navigation}>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isActive ? 'active' : isPending ? 'pending' : ''
        }
      >
        Главная
      </NavLink>
      <NavLink
        to="/answers"
        className={({ isActive, isPending }) =>
          isActive ? 'active' : isPending ? 'pending' : ''
        }
      >
        Ответы
      </NavLink>
    </div>
  );
};

export default Navigation;
