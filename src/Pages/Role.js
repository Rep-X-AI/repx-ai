import React from 'react'
import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Role = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  const navigate = useNavigate();

  if (!currentUser) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="m-auto flex flex-col text-white">
          You must be logged in to view this page
          <div className="flex justify-evenly mt-4">
            <Link
              to="/signup"
              className="w-20 bg-violet-500 hover:bg-violet-600 duration-75 text-white p-2 rounded text-center"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="bg-violet-500 hover:bg-violet-600 w-20 duration-75 text-white p-2 rounded text-center"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const createUser = async ({ role }) => {
    const nodeEnv = process.env.REACT_APP_NODE_ENV;
    console.log(nodeEnv);
    const baseUrl =
      nodeEnv === "production"
        ? "https://repx-ai-backend.vercel.app"
        : "http://localhost:5000";
    try {
      const response = await axios.post(
        baseUrl + "/api/users/adduser",
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
            <img src="/student.webp" className='w-52 md:w-80' alt="" />
            <span className="text-2xl text-purple-700 font-medium pt-8">Student</span>
          </button>
          <button
            onClick={() => createUser({ role: "teacher" })}
            to="/dashboard"
            className="rounded-xl p-4 gap-y-4 border-4 font-semibold shadow-sm hover:scale-95 bg-white hover:bg-purple-100 hover:border-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 transition-all duration-300 ease-in-out"
          >
            <img src="/teacher.webp" className='w-52 md:w-80' alt="" />
            <span className="text-2xl text-purple-700 font-medium pt-8">Teacher</span>
          </button>
        </div>
      </div>
    </main>
  )
}

export default Role