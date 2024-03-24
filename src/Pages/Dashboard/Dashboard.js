import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar";
import { Route, Routes, Link } from "react-router-dom";
import DashboardHome from "./DashboardHome";
import { useAuth } from "../../Context/AuthContext";
import Loading from "../../Components/Loading/Loading";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const { currentUser } = useAuth();
  const [showLoading, setShowLoading] = useState(true);
  const navigate = useNavigate();

  const [role, setRole] = useState("");

  useEffect(() => {
    if (!currentUser) {
      navigate("/signup");
    }
  }, [currentUser, navigate]);

  console.log(currentUser?.uid);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const nodeEnv = process.env.REACT_APP_NODE_ENV;
    console.log(nodeEnv);
    const baseUrl =
      nodeEnv === "production"
        ? "https://repx-ai-backend.vercel.app"
        : "http://localhost:5000";
    const getUser = async () => {
      try {
        const response = await axios.get(
          baseUrl + "/api/users/getuser/" + currentUser?.uid,
          {
            withCredentials: true,
          }
        );
        console.log(response.data);
        if (!response.data.exists) {
          console.log("User not present in database");
          navigate("/role");
        }
        else {
          console.log("User role is already set");
          setRole(response.data.role);
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (currentUser) {
      getUser();
    }
  }, [currentUser, navigate]);

  if (showLoading) {
    return <Loading />;
  }

  if (!currentUser) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="m-auto flex flex-col text-white">
          You must be logged in to view this page
          <div className="flex justify-evenly mt-4">
            <Link
              to="/signup"
              className="w-20 bg-blue-500 hover:bg-blue-600 duration-75 text-white p-2 rounded text-center"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 w-20 duration-75 text-white p-2 rounded text-center"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<DashboardHome role={role} />} />
      </Routes>
    </>
  );
};

export default Dashboard;
