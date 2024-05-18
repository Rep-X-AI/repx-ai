import axios from "axios";
import React, { useState } from 'react';
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Alert from "../../Components/Alert";
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

export default function JoinAssignment() {

  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [alertt,setAlertt] = useState(false);
  const [title,settitle] = useState("");
  const [desc,setdesc] = useState("");

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const nodeEnv = process.env.REACT_APP_NODE_ENV;
    const baseUrl =nodeEnv === "production"? "https://repx-ai-backend.vercel.app": "http://localhost:8080";

    try {
      const info ={code:code ,uid:currentUser.uid, name:currentUser.displayName}
    
      const response = await axios.post(`${baseUrl}/api/assignments/joinAssignment`,info)
      settitle("Redirecting To Dashboard When Assignment Joined.");
      setdesc("Your assignment has been found and almost joined. Hold Tight !")
      console.log(response);
      if(response && response.data.message){
        setAlertt(true);
        console.log("Joined Successfully")
        setCode("")
        setTimeout(() => {
          setAlertt(false);
          navigate('/dashboard')
        }, 1000);
      }
      
    } catch (error) {
      settitle("Not Valid !");
      setdesc("Try Entering A Valid Code Provided By Teacher !")
      setAlertt(true);
      setTimeout(() => {
        setAlertt(false);
      }, 2000);
    }
  }

  const handleChange = (e) =>{
    setCode(e.target.value);
  }

  return (
    
    <div className="w-full h-screen  justify-center items-center">
      <h1 className="text-3xl mb-1 text-left font-bold leading-none md:text-4xl lg:text-5xl pb-2 bg-gradient-to-bl from-purple-300 via-pink-300 to-purple-500 bg-clip-text text-transparent">
        {" "}
        Join Assignment{" "}
      </h1>
      <p className="mb-3 mt-2 text-lg font-normal text-purple-300 lg:text-xl text-left">
        Fill in the student code here to access the assignment.
      </p>
      <hr className="h-px my-8 mt-1 bg-gray-700 border-0" />

      <div className="w-full overflow-hidden h-96 max-w-3xl bg-transparent m-auto p-6 rounded-lg">
        <form className="mt-4" onSubmit={handleSubmit}>
          <p 
          data-aos="fade-in" data-aos-duration="700" data-aos-offset="2"
          className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
            Enter class code provided by teacher.
          </p>
          <input data-aos="fade-in" data-aos-duration="700" data-aos-offset="2"
            className="w-full bg-gradient-to-b text-center font-semibold from-purple-100 to-purple-300 text-violet-800 rounded-lg outline-none p-4 border-2 placeholder-gray-700 focus:ring-1 focus:ring-purple-400 focus:ring-offset-1 focus:ring-offset-transparent mb-1"
            type="text"
            placeholder="Assignment Code"
            value={code}
            onChange={handleChange}
          />

        {alertt && (
          <Alert title={title} desc={desc}/>
        )}

        {!alertt && (
          <button
          data-aos="fade-in" data-aos-duration="700" data-aos-offset="2"
          type="submit" className="hero-button-gradient mt-3 rounded-lg py-4 px-7 text-white font-medium tracking-wide transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-95 m-auto w-full">
            Join Assignment
          </button>

        )}

        </form>
      </div>
    </div>
  );
}
