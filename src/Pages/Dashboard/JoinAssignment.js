import axios from "axios";
import React, { useState } from 'react';
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function JoinAssignment() {

  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [code, setCode] = useState("");

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const nodeEnv = process.env.REACT_APP_NODE_ENV;
    const baseUrl =nodeEnv === "production"? "https://repx-ai-backend.vercel.app": "http://localhost:8080";
    try {
      const info ={code:code ,uid:currentUser.uid}
      console.log(info)
      const response = await axios.post(`${baseUrl}/api/assignments/joinAssignment`,info)
      console.log(response);
      if(response && response.data.message){
        console.log("Joined Successfully")
        setCode("")
        setTimeout(() => {
          navigate('/dashboard')
        }, 2000);
      }
      
    } catch (error) {
      alert("Invalid")
    }
  }

  const handleChange = (e) =>{
    setCode(e.target.value);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full h-96 max-w-3xl bg-transparent p-6 rounded-lg shadow-lg shadow-violet-950 shadow-2xl ">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold leading-none mb-2 text-transparent bg-gradient-to-bl from-purple-300 via-pink-300 to-purple-500 bg-clip-text p-4 m-6">
          Join Assignment
        </h1>
        <form className="mt-4" onSubmit={handleSubmit}>
          <p className="text-lg font-semibold text-transparent bg-gradient-to-bl from-purple-300 via-pink-300 to-purple-500 bg-clip-text py-2">
            Enter Assignment Code
          </p>
          <input
            className="w-full bg-gradient-to-b from-purple-100 to-purple-300 text-black rounded-lg outline-none p-6 border-2 border-[#030017] placeholder-gray-700 focus:ring-1 focus:ring-purple-400 focus:ring-offset-1 focus:ring-offset-transparent"
            type="text"
            placeholder="Assignment Code"
            value={code}
            onChange={handleChange}
          />
          <button type="submit" className="mt-4 w-full bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-white text-xl font-semibold p-6  rounded-lg shadow-md hover:from-purple-600 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400 ">
            Join
          </button>
        </form>
      </div>
    </div>
  );
}
