import React, { useEffect, useState } from 'react'
import { useAuth } from '../Context/AuthContext';


const DashboardHome = ({ loginDays }) => {
  const { currentUser } = useAuth();
  let x = currentUser.uid;

  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = 'Good morning';
  } else if (currentHour < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  const dynamicGreeting = `${greeting}, ${currentUser.displayName}. 👋`;


  return (
    <>
      <div className="p-6 pt-24 min-h-screen lg:ml-64">
        <div className='bg-gradient-to-tr to-purple-600 from-indigo-800 overflow-hidden p-4 md:p-6 rounded mb-8 relative'>
          <div className='hidden lg:block mr-16 -mt-4 top-0 right-0 absolute pointer-events-none'>
            <img src="/idk.webp" alt="Illustration of a person working on a computer" className="w-64 h-64 object-cover placeholder pb-28" />
          </div>
          <div className='relative'>
            <h1 className='text-white font-bold text-2xl md:text-3xl leading-snug mb-2'>
              {dynamicGreeting}
            </h1>
            <p className='text-slate-100'>Welcome to your dashboard. Scroll to see what's happening with your projects today:</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardHome