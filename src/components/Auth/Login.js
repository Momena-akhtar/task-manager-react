import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Auth/authSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username) {
      dispatch(login({ name: username }));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
