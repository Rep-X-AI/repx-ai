import React from "react";
import { useNavigate } from "react-router-dom";

const AssignmentCard = ({ code, deadline, title, desc, role, createdBy }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dashboard/assignment/${code}`);
  }

    return (
      <div
        className="bg-gradient-to-br from-fuchsia-400 to-purple-900 text-white rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:shadow-lg hover:scale-105 m-3"
        style={{ height: "200px" }}
        onClick={handleClick}
      >
        <div className="p-6">
          <p className="text-sm mb-2">Assignment Code : {code}</p>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <h2 className="text-l  mb-2">
            {desc.split(" ").slice(0, 15).join(" ")}...
          </h2>
          <p className="text-sm text-gray-200">
            Deadline: {new Date(deadline).toLocaleDateString("en-GB")}
          </p>
        </div>
      </div>
    );
  };


export default AssignmentCard;
