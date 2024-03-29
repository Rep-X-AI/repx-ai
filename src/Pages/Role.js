import React, { useEffect, useState } from 'react'
import { useAuth } from "../Context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from '../Components/Loading/Loading';

const Role = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!currentUser) {
      navigate("/signup");
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    const nodeEnv = process.env.REACT_APP_NODE_ENV;
    console.log(nodeEnv);
    const baseUrl =
      nodeEnv === "production"
        ? "https://repx-ai-backend.vercel.app"
        : "http://localhost:8080";
    const getUser = async () => {
      try {
        const response = await axios.get(
          baseUrl + "/api/users/fetchuser/" + currentUser?.uid,
          {
            withCredentials: true,
          }
        );
        console.log(response.data);
        if (!response.data.exists) {
          console.log("User not present in database");
        }
        else {
          console.log("User role is already set");
          navigate("/dashboard");
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (currentUser) {
      getUser();
    }
  }, [currentUser, navigate]);


  const createUser = async ({ role }) => {
    const nodeEnv = process.env.REACT_APP_NODE_ENV;
    console.log(nodeEnv);
    const baseUrl =
      nodeEnv === "production"
        ? "https://repx-ai-backend.vercel.app"
        : "http://localhost:8080";
    try {
      const response = await axios.post(
        baseUrl + "/api/users/signup",
        {
          useruid: currentUser?.uid,
          email: currentUser?.email,
          name: currentUser?.displayName,
          role: role
        },
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  }

  if (showLoading) {
    return <Loading />;
  }

  return (
    <main className="grid min-h-screen place-items-center p-6">
      <div className="text-center">
        <h1 className="mt-4 text-2xl font-bold tracking-tight head-p sm:text-4xl">
          Welcome to Repx AI
        </h1>
        <p className="mt-2 text-sm leading-7 text-gray-500">
          To get started, please select your role
        </p>
        <div className="mt-10 flex items-center flex-wrap justify-center gap-6 md:gap-16">
          <button
            onClick={() => createUser({ role: "student" })}
            className="rounded-xl p-4 gap-y-4 border-4 font-semibold shadow-sm hover:scale-95 bg-white hover:bg-purple-100 hover:border-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 transition-all duration-300 ease-in-out"
          >
            <img src="/student.webp" loading='lazy' className='w-52 md:w-80' alt="" />
            <span className="text-2xl text-purple-700 font-medium pt-8">Student</span>
          </button>
          <button
            onClick={() => createUser({ role: "teacher" })}
            to="/dashboard"
            className="rounded-xl p-4 gap-y-4 border-4 font-semibold shadow-sm hover:scale-95 bg-white hover:bg-purple-100 hover:border-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 transition-all duration-300 ease-in-out"
          >
            <img src="/teacher.webp" loading='lazy' className='w-52 md:w-80' alt="" />
            <span className="text-2xl text-purple-700 font-medium pt-8">Teacher</span>
          </button>
        </div>
      </div>
    </main>
  )
}

export default Role