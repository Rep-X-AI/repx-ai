import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar";
import { Route, Routes } from "react-router-dom";
import DashboardHome from "./DashboardHome";
import { useAuth } from "../../Context/AuthContext";
import Loading from "../../Components/Loading/Loading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CreateAssignment from "./CreateAssignment";
import Upgrade from "./Upgrade";
import Documentation from "./Documentation";


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

  return (
    <>
      <Sidebar role={role} />
      <div className="p-6 pt-24 min-h-screen lg:ml-64">
      <Routes>
        <Route path="/" element={<DashboardHome role={role} />} />
        <Route path="/create-assignment" element={<CreateAssignment role={role} />} />
        <Route path="/upgrade-to-pro" element={<Upgrade/>} />
        <Route path="/documentation" element={<Documentation/>} />
      </Routes>
      </div>
    </>
  );
};

export default Dashboard;
