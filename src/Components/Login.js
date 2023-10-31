import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // You can implement the login logic here, e.g., send a request to a server.
    navigate("/homepage")
    // For this example, let's just print the entered username and password.
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-page">
        <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
        />
      <h1>Login</h1>
        <form className='login-form'>
        <div className='userinput'>
            <span><i class='bx bxs-user'></i></span>
            <input
            type="text"
            placeholder="Username"
            value={username}
            className='username'
            onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div className='passwordInput'>
            <span><i class='bx bxs-lock-alt'></i></span>
            <input
            type="password"
            placeholder="Password"
            value={password}
            className='password'
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button type="button" onClick={handleLogin} className='btn'>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
