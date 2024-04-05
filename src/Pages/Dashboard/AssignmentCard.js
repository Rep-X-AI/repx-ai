import React from "react";
import { useNavigate } from "react-router-dom";

const AssignmentCard = ({ code, deadline, title, desc, role , createdBy }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dashboard/assignment/${code}`, {
      state: {
        code,
        deadline,
        title,
        desc,
        role,
        createdBy
      }
    });
  };


  return (
    <div
      className="bg-gradient-to-br from-purple-400 to-purple-700 text-white rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:shadow-lg hover:scale-105 m-3"
      style={{ height: "200px" }}
      onClick={handleClick}
    >
      <div className="p-6">
        <p className="text-sm mb-2">{code}</p>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <h2 className="text-xl font-semibold mb-2">{desc.split(' ').slice(0, 15).join(' ')}...</h2>
        <p className="text-sm text-gray-200">Deadline: {deadline}</p>
      </div>
    </div>
  );
};

export default AssignmentCard;
