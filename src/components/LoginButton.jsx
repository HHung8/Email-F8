// LoginButton.js
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = ({ onLogin }) => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect();
    onLogin();
  };

  return (
    <div className='formLogin'>
      <p>Cảm ơn bạn đã sử dụng dịch vụ của F8</p>
      <p>Nếu có bất kỳ câu hỏi hay trợ giúp nào, hãy đăng <br /> nhập và đặt câu hỏi tại đây!</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginButton;
