import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../Images/matrix.webp';

const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black" style={{backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}}>
      <p className="text-white font-bold text-2xl sm:text-5xl" style={{fontSize:"250px"}}>404</p>
      <h1 className="text-white mb-6 text-3xl font-bold sm:text-5xl xl:text-5xl"> Page Not Found</h1>
      <button type="button" className="hero-button-gradient inline-flex rounded-lg py-3 px-7 my-3 text-white font-medium ease-in duration-300 hover:opacity-80" onClick={handleNavigate}>Back To Home</button>
    </div>
  );
};

export default NotFound;
