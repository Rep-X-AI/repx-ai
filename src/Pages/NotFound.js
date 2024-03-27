import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <>
    <div className="flex flex-col justify-center items-center bg-black blur-[1px] -z-[1] absolute w-full h-screen" style={{ backgroundImage: `url(/matrix.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }}>
    </div>
      <div className='flex flex-col gap-2 items-center min-h-screen justify-center pb-10'>
        <h1 className="text-white font-bold text-9xl h-32 sm:text-[16rem] sm:h-64" style={{ textShadow: '0 0 12px rgba(255, 255, 255, 0.36)' }}>404</h1>
        <p className="text-white text-2xl mb-5 text-center font-semibold" style={{ textShadow: '0 0 12px rgba(255, 255, 255, 0.36)' }}>Oops! Page Not Found</p>
        <button type="button" className="hero-button-gradient inline-flex rounded-lg py-3 px-7 my-3 text-white font-medium ease-in duration-300 hover:opacity-80" onClick={handleNavigate}>Back To Home</button>
      </div>
    </>
  );
};

export default NotFound;