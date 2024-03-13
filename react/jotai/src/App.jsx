// App.js
import React from 'react';
import { useAuth } from './auth';

function App() {
  const { isAuthenticated, userProfile, login, logout } = useAuth();

  const handleLogin = () => {
    // Simulated login action, replace with your actual authentication logic
    const user = { username: 'exampleUser', email: 'user@example.com' };
    login(user);
  };

  const handleLogout = () => {
    // Simulated logout action, replace with your actual logout logic
    logout();
  };

  return (
    <div className='App'>
      <h1>User Authentication</h1>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {userProfile.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please login to continue.</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
