import React from "react";
import Sidebar from "../Components/Sidebar";
import { Route, Routes, Link } from "react-router-dom";
import DashboardHome from "./DashboardHome";
import { useAuth } from "../Context/AuthContext";

const Dashboard = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="m-auto flex flex-col">
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
        <Route path="/" element={<DashboardHome />} />
      </Routes>
    </>
  );
};

export default Dashboard;
