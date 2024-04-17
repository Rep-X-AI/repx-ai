import React, { useState, useEffect } from "react";
import AssignmentCard from './AssignmentCard';
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AllAssignments({ role }) {
  
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [assignments, setAssignments] = useState([]);
   
    useEffect(() => {
        const nodeEnv = process.env.REACT_APP_NODE_ENV;
        const baseUrl =
          nodeEnv === "production"
            ? "https://repx-ai-backend.vercel.app"
            : "http://localhost:8080";

            const getAssignments = async () => {
              try {
                  const response = await axios.get(
                      `${baseUrl}/api/assignments/${role}s/${currentUser?.uid}`
                  );
                  if (response.data.assignments && response.data.assignments.length > 0) {
                      console.log("Assignments Data:", response.data.assignments); 
                      setAssignments(response.data.assignments);
                      console.log(response.data.assignments)
                  } else {
                      console.log("No assignments data found.");
                  }
              } catch (error) {
                  console.log("Error fetching assignments:", error);
              }
          };


        if (currentUser) {
          getAssignments();
        }
    }, [currentUser, navigate, role]); 
    

    return (
      <>
      {(!assignments.length) ? <h2 className="text-white text-3xl text-center font-thin m-auto">... No Assignments Found ...</h2>

      :
 <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
        
          {assignments.map((assignment, index) => (
            <AssignmentCard key={index} code={assignment.code}  title={assignment.title} desc={assignment.desc} role={role} createdBy={assignment.teacher} deadline={assignment.deadline}/>
          ))}
      </div>
      }
      </>
    );
}
