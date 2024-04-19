import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const GradesTable = ({role}) => {

  const studentDetailsStyle = {
    maxHeight: 'calc(100vh - 300px)',
    overflowY: 'auto',
    padding: "10px",
  };

  const navigate = useNavigate();
  const { id } = useParams();
  const { currentUser } = useAuth();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [assignmentName, setAssignmentName] = useState("");
  const [description, setDescription] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [teacher, setTeacher] = useState("");
  const [marks, setMarks] = useState(100);
  const [submissions,setSubmissions] = useState([])



  const nodeEnv = process.env.REACT_APP_NODE_ENV;
  const baseUrl =
    nodeEnv === "production"
      ? "https://repx-ai-backend.vercel.app"
      : "http://localhost:8080";

  
      useEffect(() => {
        const fetchAssignment = async () => {
          try {
            const response = await axios.get(
              `${baseUrl}/api/assignments/get-assignment-${role}/${id}?uid=${currentUser.uid}`
            );
            if (!response) {
              navigate("/assigment-not-found-or-not-registered");
            }
            setAssignmentName(response.data.title);
            setDescription(response.data.desc);
            setTeacher(response.data.teacher);
            setSelectedDate(new Date(response.data.deadline));
          } catch (error) {
            console.error("Error fetching assignment:", error);
            navigate("/assigment-not-found-or-not-registered-in-the-assignment");
          }
        };
        const fetchSubmission = async () => {
          try {
            const response = await axios.get(
              `${baseUrl}/api/assignments/get-submissions-${role}/${id}?uid=${currentUser.uid}`
            );
            if(response.data){
              setSubmissions(response.data);
            }    
          } catch (error) {
            console.log(error)
          }
        }
    
        if (currentUser && currentUser.uid) {
          fetchAssignment();
          fetchSubmission();
        }
      }, [role, currentUser, baseUrl, id, navigate]);

  return (
    <>

    <h1 className="text-3xl mb-1 text-left font-bold leading-none md:text-4xl lg:text-5xl pb-2 bg-gradient-to-bl from-purple-300 via-pink-300 to-purple-500 bg-clip-text text-transparent">
              {" "}Grades Table{" "}
          </h1>
          <p className="mb-3 mt-2 text-lg font-normal text-purple-300 lg:text-xl text-left">
            Know about you grades here.
          </p>
          <hr className="h-px my-8 mt-1 bg-gray-700 border-0" />


    <div className="flex flex-col md:flex-row p-3">

      <div className="flex flex-col justify-center items-center w-full md:w-100 " style={{marginTop:"20px",marginBottom:"20px"}}>

        {/* Assignment Details */}
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white lg:text-center md:text-center sm:text-center">Assignment Details</h2>
        <div className="flex flex-col mb-10 p-6 mx-auto max-w-full text-center bg-gradient-to-b from-purple-100 to-purple-400 text-black border-2 rounded-lg">
          <section className="m-auto">
            <li className="assignment mb-4 px-4 lg:list-none sm:list-disc md:list-disc">
              <h3 className="text-black text-2xl font-bold mb-3 lg:text-left sm:text-center md:text-center">Assignment Title</h3>
              <p className="text-violet-800 md:text-center lg:text-left font-semibold sm:-text-center text-xl lg:ml-4">{assignmentName}</p>
            </li>
            <li className="assignment mb-4 px-4 lg:list-none sm:list-disc md:list-disc">
              <h3 className="text-black text-2xl font-bold mb-3 lg:text-left sm:text-center md:text-center">Assignment Details</h3>
              <p className="text-violet-800 md:text-center lg:text-left font-semibold sm:-text-center text-xl lg:ml-4">{description}</p>
            </li>
            <div className="grid lg:mt-8 lg:grid-cols-3 sm:mt-5 md:mt-5 sm:grid-cols-2 md:grid-cols-2">
              <li className="assignment mb-4 px-4 lg:list-none sm:list-disc">
                <h3 className="text-black font-bold text-2xl lg:text-center md:text-left sm:text-left">Teacher Name</h3>
                <p className="text-violet-800 font-semibold text-lg">{teacher}</p>
              </li>
              <li className="deadline mb-4 px-4 lg:list-none sm:list-disc">
                <h3 className="text-black font-bold text-2xl lg:text-center md:text-left sm:text-left">Deadline</h3>
                <p className="text-violet-800 font-semibold text-lg">{selectedDate.toLocaleDateString()}</p>
              </li>
              <li className="marks mb-4 px-4 lg:list-none sm:list-disc">
                <h3 className="text-black font-bold text-2xl lg:text-center md:text-left sm:text-left">Total Marks</h3>
                <p className="text-violet-800 font-semibold text-lg">{marks}</p>
              </li>
            </div>
          </section>
        </div>

        {/* Students' Grades */}

        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">Student Details</h2>

        <div className='card bg-gray-800 w-full lg:w-5/6 shadow-lg p-2 jus m-auto'>
          <div className="student-grade rounded-md flex justify-between mb-4 p-4 bg-violet-400 my-2 mx-2 hero-button-gradient">
            <div className="student text-slate-200 text-left font-bold lg:text-lg sm:text-sm">Student Name</div>
            <div className="grade text-slate-200 font-bold lg:text-lg text-right sm:text-sm">Marks Obtained</div>
          </div>
        </div>
        <div className="card bg-gray-800 w-full lg:w-5/6 justt m-auto" style={studentDetailsStyle}>
          <div className='mt-1'>
          {submissions && submissions.length > 0 ? (
            submissions.map((submission, index) => {
            
              return (
                <section key={index} className="students-grades card-section p-2">
                  <div className="student-grade flex justify-between p-4 bg-gradient-to-b from-purple-100 to-purple-400 items-center rounded-md">
                    <div className="student text-gray-900 font-bold items-center">{index+1}. {submission.student}</div>
                    <div className="grade tracking-wide text-white font-bold bg-violet-700 p-2 rounded-full">{submission.marks===null?"Not Evaluated Yet":submission.marks}</div>
                  </div>
                </section>
              );
            })
          ) : (
            <p className = "students-grades card-section p-4 mx-6" style={{ background: 'linear-gradient(to bottom, rgb(252 231 243), rgb(253 242 248), rgb(252 231 243))', borderRadius: '5px', margin: "0px" }}>No submissions yet .</p>
          )}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default GradesTable;
