import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>Страница для логина</h1>
      <form className="login-form">
        <input type="text" placeholder="Введите логин" />
        <input type="password" placeholder="Введите пароль" />
        <button>Войти</button>
      </form>
    </div>
  );
};

export default Login;
