import React, { useState } from 'react';
import FizzBuzz from './FizzBuzz'; // Assuming FizzBuzz is in the same directory
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (email === 'boss@test.com' && password === '1234') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (isLoggedIn) {
    return <FizzBuzz />;
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
