import React from 'react'
import { Link } from 'react-router-dom'

export default function Documentation() {
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-3xl mb-1 text-left font-bold leading-none md:text-4xl lg:text-5xl pb-2 bg-gradient-to-bl from-purple-300 via-pink-300 to-purple-500 bg-clip-text text-transparent">
          {" "}Documentation{" "}
      </h1>
      <p className="mb-3 mt-2 text-lg font-normal text-purple-300 lg:text-xl text-left">
        Unveiling a website's secrets and unlocking its full potential lie within its documented wisdom.
      </p>
      <hr className="h-px my-8 mt-1 bg-gray-700 border-0" />

      <section className="bg-transparent dark:bg-transparent">
          <div className="py-8 px-6 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                  <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">Here's a documentation to help you out.</h2>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0"> 
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center bg-gradient-to-b from-purple-100 to-purple-400 text-black border-2 rounded-lg">
                <h3 className="mb-4 text-2xl font-bold">Using as a teacher ?</h3>
                <p className="font-light text-gray-900 sm:text-lg dark:text-gray-900">After one signs up as a teacher role they must follow the steps ...</p>
                <img src='../tead.svg' className='h-44 mt-5 opacity-70'/>
                <Link to='/dashboard/documentation/teachdoc' className="hero-button-gradient rounded-lg py-3 px-7 text-white font-medium tracking-wide transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-95 mt-4">Teacher Docs</Link>
            </div>
            
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center bg-gradient-to-b from-purple-100 to-purple-400 text-black border-2 rounded-lg">
                <h3 className="mb-4 text-2xl font-bold">Using as a student ?</h3>
                <p className="font-light text-gray-900 sm:text-lg dark:text-gray-900">After one signs up as a student role they must follow the steps ...</p>
                <img src='../stud.svg' className='h-44 mt-5 opacity-70'/>
                <Link to='/dashboard/documentation/studoc' className="hero-button-gradient mt-4 rounded-lg py-3 px-7 text-white font-medium tracking-wide transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-95">Student Docs</Link>
            </div>     
          </div>
          </div>
      </section>
    </div>
  )
}
