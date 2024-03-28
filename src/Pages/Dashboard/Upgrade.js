import React from 'react'
import { Link } from 'react-router-dom'

export default function Upgrade() {
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-3xl mb-1 text-left font-bold leading-none md:text-4xl lg:text-5xl pb-2 bg-gradient-to-bl from-purple-300 via-pink-300 to-purple-500 bg-clip-text text-transparent">
          {" "}Upgrade To Pro{" "}
      </h1>
      <p className="mb-3 mt-2 text-lg font-normal text-purple-300 lg:text-xl text-left">
      Unlock a world of enhanced features by upgrading to Pro.
      </p>
      <hr className="h-px my-8 mt-1 bg-gray-700 border-0" />

      <section className="bg-transparent dark:bg-transparent">
          <div className="py-8 px-6 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                  <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">Effortless Engagement & Organization For Pros</h2>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0"> 
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center bg-gradient-to-b from-purple-100 to-purple-400 text-black border-2 rounded-lg">
                <h3 className="mb-4 text-2xl font-bold">Monthly</h3>
                <p className="font-light text-gray-900 sm:text-lg dark:text-gray-900">Ditch the chaos : Stay organized & connected with your class with this monthly plan.</p>
                <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">₹300</span>
                    <span className="text-gray-900 dark:text-gray-900">/month</span>
                </div>
                
                <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                      
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Faster : <span className="font-semibold">AI Evaluation</span></span>
                    </li>
                    <li className="flex items-center space-x-3">
                      
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>More Accurate : <span className="font-semibold">Text Evaluation</span></span>
                    </li>
                    <li className="flex items-center space-x-3 mb-5">
                      
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Premium support : <span className="font-semibold">1 month</span></span>
                    </li>
                </ul>
                <Link to='/' className="hero-button-gradient rounded-lg py-3 px-7 text-white font-medium tracking-wide transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-95 mt-16">Get started</Link>
            </div>
            
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center bg-gradient-to-b from-purple-100 to-purple-400 text-black border-2 rounded-lg">
                <h3 className="mb-4 text-2xl font-semibold">Yearly</h3>
                <p className="font-light text-gray-900 sm:text-lg dark:text-gray-900">Ditch the chaos : Stay organized & connected with your class with this yearly plan.</p>
                <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">₹3200</span>
                    <span className="text-gray-900 dark:text-gray-900">/year</span>
                </div>
                
                <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                      
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Faster : <span className="font-semibold">AI Evaluation</span></span>
                    </li>
                    <li className="flex items-center space-x-3">
                      
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>More Accurate : <span className="font-semibold">Text Evaluation</span></span>
                    </li>
                    <li className="flex items-center space-x-3">
                      
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>More Accurate : <span className="font-semibold">Image Evaluation</span></span>
                    </li>
                    <li className="flex items-center space-x-3">
                      
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Premium support: <span className="font-semibold">12 months</span></span>
                    </li>
                </ul>
                <Link to='/' className="hero-button-gradient mt-4 rounded-lg py-3 px-7 text-white font-medium tracking-wide transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-95">Get started</Link>
            </div>     
          </div>
          </div>
      </section>
    </div>
  )
}
