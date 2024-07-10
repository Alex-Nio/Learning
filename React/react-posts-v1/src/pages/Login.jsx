import React, { useContext } from 'react';
import { AuthContext } from '../app/context';

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', true);
  };

  return (
    <div>
      <h1>Страница для логина</h1>
      <form className="login-form" onSubmit={login}>
        <input type="text" placeholder="Введите логин" />
        <input type="password" placeholder="Введите пароль" />
        <button>Войти</button>
      </form>
    </div>
  );
};

export default Login;
