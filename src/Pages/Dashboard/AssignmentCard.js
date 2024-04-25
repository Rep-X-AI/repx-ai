import React from "react";
import { useNavigate } from "react-router-dom";

const AssignmentCard = ({ code, deadline, title, desc, role, createdBy }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dashboard/assignment/${code}`);
  }

    return (
      <>
      {/* <div
        className="bg-gradient-to-br from-fuchsia-400 to-violet-900 text-white rounded-lg overflow-hidden shadow-md transition duration-300 transform m-3 emnie items-center justify-center"
        
      >
        <div className="p-6">
          <div className="grid">
          <p className="text-lg text-center block bg-transparent py-2 px-2 rounded text-white font-bold mb-1">: Assignment Code :</p><span className="try text-center text-white ty px-5 tracking-wide py-2 font-bold text-md ml-3">{code}</span></div>
          <div className="grid">
          <h2 className="text-lg block text-center bg-transparent py-2 px-2 rounded text-white font-bold mb-1">: Assignment Title :</h2><span className="try text-center text-white ty px-5 tracking-wide py-2 font-bold text-md ml-3">{title} </span></div>
          <h2 className="mb-2 text-center flex flex-col">
            <span className="text-lg text-left block bg-transparent py-2 px-2 rounded text-white font-bold mb-1">Description :</span>
            <span className="text-center">" {desc.split(" ").slice(0, 8).join(" ")} ... "</span>
            <p className="mt-2 text-lg font-bold text-gray-200 text-center mb-2">
            : Deadline : </p> <span className="text-violet-200 ty p-2 ml-3 font-semibold">{new Date(deadline).toLocaleDateString("en-GB")}</span>
         
            <button className="font-semibold hover:scale-95 transition-all duration-300 ease-in-out hover:opacity-80 text-center hero-button-gradient p-2 rounded mt-3 m-auto" onClick={handleClick}>View Assignment</button>
          </h2>
        </div>
      </div> */}
      
    <div className="max-w-sm p-6 bg-gradient-to-br from-fuchsia-400 to-violet-900 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title} :</h5>
        <p className="mb-3 font-normal text-lg text-violet-700 dark:text-violet-800">{desc.split(" ").slice(0, 15).join(" ")} ... </p>
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Assignment Code :</h1>
        <p className="mb-3 font-normal text-lg text-violet-700 dark:text-violet-800">{code}</p>
        <hr/>
        <h1 className="mb-2 text-2xl font-bold mt-5 tracking-tight text-gray-900 dark:text-white">Due Date :</h1>
        <p className="mb-3 font-normal text-lg text-violet-800 dark:text-violet-800">{new Date(deadline).toLocaleDateString("en-GB")}</p>
        <button href="#" className="flex text-white font-semibold hover:scale-95 transition-all duration-300 ease-in-out hover:opacity-80 text-center hero-button-gradient p-2 rounded mt-3" onClick={handleClick}>
            View Assignment
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
    </div>
</>
    );
  };


export default AssignmentCard;
