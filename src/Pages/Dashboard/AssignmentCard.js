import React from "react";
import { useNavigate } from "react-router-dom";

const AssignmentCard = ({ code, deadline, title, desc, role, createdBy }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dashboard/assignment/${code}`);
  }

    return (
      <div
        className="bg-gradient-to-br from-fuchsia-400 to-violet-900 text-white rounded-lg overflow-hidden shadow-md transition duration-300 transform m-3 emnie items-center justify-center"
        
      >
        <div className="p-6">
          <p className="text-xl text-left block bg-transparent py-2 px-2 rounded text-white font-bold mb-1">Assignment Code :<span className="text-black font-semibold text-md lg:ml-3">" {code} "</span></p>
          <h2 className="text-xl block text-left bg-transparent py-2 px-2 rounded text-white font-bold mb-1">Assignment Title :<span className="text-black font-semibold mt-0 lg:ml-7">" {title} "</span></h2>
          <h2 className="mb-2 text-center flex flex-col">
            <span className="text-black block py-2 w-3/4 rounded bg-white mb-2 font-semibold text-xl mt-2 m-auto">Description</span>
            <span className="text-center">" {desc.split(" ").slice(0, 8).join(" ")} ... "</span>
            <p className="text-lg font-bold text-gray-200 text-center">
            Deadline : <span className="text-violet-200 font-semibold">{new Date(deadline).toLocaleDateString("en-GB")}</span>
          </p>
            <button className="font-semibold hover:scale-95 transition-all duration-300 ease-in-out hover:opacity-80 text-center hero-button-gradient p-2 rounded mt-3 m-auto" onClick={handleClick}>View Assignment</button>
          </h2>
        </div>
      </div>
    );
  };


export default AssignmentCard;
