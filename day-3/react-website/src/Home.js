// Home.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/counter');
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Welcome to the Home Page!</h2>
      <button className="bg-green-500 text-white py-2 px-4 mr-2" onClick={handleRedirect}>
        Go to Counter Page
      </button>
      <p className="text-gray-700">Or you can use the navigation link: <Link to="/counter" className="text-blue-500">Counter Page</Link></p>
    </div>
  );
};

export default Home;
