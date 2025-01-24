import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Auth/authSlice';

const Signup = () => {
  const dispatch = useDispatch();

  const handleSignup = () => {
    const username = 'New User'; // For simplicity, auto-generate user
    dispatch(login({ name: username }));
  };

  return (
    <div>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
