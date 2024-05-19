import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

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
  const [notSubmitted , setNotSubmitted] = useState([])
  const [editMarks,setEditMarks] = useState(0)
  const [editModalVisibility , setEditModalVisibility ] = useState(false) ;


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
            setMarks(response.data.tmark);
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
              //console.log(response.data)
              if(role==='student'){
                setSubmissions(response.data);
              }
              else if(role==='teacher'){
                setSubmissions(response.data.submissions)
                setNotSubmitted(response.data.notSubmittedStudents)
              }
            }    
          } catch (error) {
            console.log(error)
          }
        }
    
        if (currentUser && currentUser.uid) {
          fetchAssignment();
          fetchSubmission();
        }
      }, [role, currentUser, baseUrl, id]);


      const handleDownload = async (file) => {
        try {
          if (!file) {
            console.error('Question URL is empty.');
            return;
          }
          window.open(file, '_blank');
        } catch (error) {
          console.error('Error retrieving resource:', error);
        }
      };


      const handleEvaluateMLServer = async () => {
        try {
            await Promise.all(submissions.map(async (submission) => {
                const data = {
                    studentAnswer: submission.answerUrl,
                    assignmentCode: id,
                    totalMarks: marks
                };
                console.log(data);
                try {
                    const response = await axios.post(`/evaluateAssignment`, data);
                    if(response.data){
                      console.log(response.data)
                      try {
                        const evaluationBody = {studentId:submission.student , marks : response.data.obtainedMarks}
                        console.log(evaluationBody)
                        const evaluationResponse = await axios.post(`${baseUrl}/api/assignments/evaluate/${id}` ,evaluationBody) ;    
                        if(evaluationResponse.data){
                          console.log(evaluationResponse.data)
                        }
                      } catch (error) {
                        console.log(error.message)
                      }  
                    }
                } catch (error) {
                    console.log(error.message);
                }
            }));
        } catch (error) {
            console.error(error);
        }
    };    

    const handleEditMarks =async(studentId)=>{
      try {
        const editBody = {studentId:studentId , marks : editMarks};
        const editResponse = await axios.post(`${baseUrl}/api/assignments/evaluate/${id}` ,editBody) ;   
        if(editResponse){
          console.log(editResponse.data)
        } 
        setEditMarks(0);
        setEditModalVisibility(false);
      } catch (error) {
        console.log(error.message)
      }
      
    }

    const changeEditMarks = (e) =>{
      setEditMarks(e.target.value)
    }

  
  return (
    <>

    <h1 className="text-3xl mb-1 text-left font-bold leading-none md:text-4xl lg:text-5xl pb-2 bg-gradient-to-bl from-purple-300 via-pink-300 to-purple-500 bg-clip-text text-transparent">
              {" "}Grades Table{" "}
          </h1>
          <p className="mb-3 mt-2 text-lg font-normal text-purple-300 lg:text-xl text-left">
            Know about you grades here.
          </p>
          <hr className="h-px my-8 mt-1 bg-gray-700 border-0" />


    <div className="flex flex-col md:flex-row p-3" data-aos="fade-in" data-aos-duration="700" data-aos-offset="2">

      <div className="flex flex-col justify-center items-center w-full md:w-100 " style={{marginTop:"20px",marginBottom:"20px"}}>

        {/* Assignment Details */}
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white lg:text-center md:text-center sm:text-center">Assignment Details</h2>
        <div className="flex flex-col mb-10 p-6 mx-auto max-w-full text-center bg-gradient-to-b from-purple-100 to-purple-400 text-black border-2 rounded-lg">
          <section className="m-auto">
            <li className="assignment mb-4 px-4 lg:list-none sm:list-disc md:list-disc">
              <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-violet-800 text-2xl font-bold mb-3 lg:text-left sm:text-center md:text-center">Assignment Title</h3>
              <p className="text-violet-800 md:text-center lg:text-left font-semibold sm:-text-center text-xl lg:ml-4">{assignmentName}</p>
            </li>
            <li className="assignment mb-4 px-4 lg:list-none sm:list-disc md:list-disc">
              <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-violet-800 text-2xl font-bold mb-3 lg:text-left sm:text-center md:text-center">Assignment Details</h3>
              <p className="text-violet-800 md:text-center lg:text-left font-semibold sm:-text-center text-xl lg:ml-4">{description}</p>
            </li>
            <div className="grid lg:mt-8 lg:grid-cols-3 sm:mt-5 md:mt-5 sm:grid-cols-2 md:grid-cols-2">
              <li className="assignment mb-4 px-4 lg:list-none sm:list-disc">
                <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-violet-800 font-bold text-2xl lg:text-center md:text-left sm:text-left">Teacher Name</h3>
                <p className="text-violet-800 font-semibold text-lg">{teacher}</p>
              </li>
              <li className="deadline mb-4 px-4 lg:list-none sm:list-disc">
                <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-violet-800 font-bold text-2xl lg:text-center md:text-left sm:text-left">Deadline</h3>
                <p className="text-violet-800 font-semibold text-lg">{selectedDate.toLocaleDateString()}</p>
              </li>
              <li className="marks mb-4 px-4 lg:list-none sm:list-disc">
                <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-violet-800 font-bold text-2xl lg:text-center md:text-left sm:text-left">Total Marks</h3>
                <p className="text-violet-800 font-semibold text-lg">{marks}</p>
              </li>
            </div>
          </section>

          {role==='teacher' && <button className="hero-button-gradient rounded-lg py-3 px-3 lg:w-96 sm:w-80 m-auto text-white font-medium tracking-wide transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-95" onClick={handleEvaluateMLServer}>
            Evaluate Now!
          </button>}

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
                    <div className="student text-gray-900 font-bold items-center">{index+1}. {submission.studentname}</div>
                    <div className="flex">
                    <svg  onClick={() => handleDownload(submission.answerUrl)}  className="w-12 mt-3 transition-all duration-300 hover:fill-violet-800 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
                    <div className="grade tracking-wide text-white font-bold bg-violet-700 p-2 rounded-md">{submission.marks===null?"Not Evaluated Yet":submission.marks}</div>
                    { submission.marks!=null && 
                    <svg
                        className="cursor-pointer hover:fill-violet-600 transition-all"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 512 512"
                        onClick={()=>{setEditModalVisibility(true)}}
                      >
                        <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                      </svg>
                      }
                      { submission.marks!=null &&  editModalVisibility && <>
                       <input className="w-12 rounded-xl" type="text"  value ={editMarks} onChange={changeEditMarks}/>
                       <button className="hero-button-gradient rounded-lg py-3 px-3 lg:w-16 sm:w-16 m-auto text-white font-medium tracking-wide transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-95 mx-2" onClick={ () => {handleEditMarks(submission.student) } }>Edit</button>
                       <button className="hero-button-gradient rounded-lg py-3 px-3 lg:w-16 sm:w-16 m-auto text-white font-medium tracking-wide transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-95 "  onClick={()=>{setEditModalVisibility(false)}} >Cancel</button>
                       </>
                      }      
                    </div>
                  </div>
                </section>
              );
            })
          ) : (
            <p className = "students-grades card-section p-4 mx-6 text-center font-sm text-xl text-violet-600" style={{ background: 'linear-gradient(to bottom, rgb(252 231 243), rgb(253 242 248), rgb(252 231 243))', borderRadius: '5px', margin: "0px" }}>No submissions yet .</p>
          )}
          </div>

          <div className='mt-1'>
          {notSubmitted && notSubmitted.length > 0 && (
            notSubmitted.map((student ,index) => {
              return (
                <section key={index} className="students-grades card-section p-2">
                  <div className="student-grade flex justify-between p-4 bg-gradient-to-b from-purple-100 to-purple-400 items-center rounded-md">
                    <div className="student text-gray-900 font-bold items-center">{submissions.length + index+1}. {student}</div>
                    <div className="flex">
                    <div className="grade tracking-wide text-white font-bold bg-violet-700 p-2 rounded-md">Not Submitted yet</div>
                    </div>
                  </div>
                </section>
              );
            })
          )}
          </div>

        </div>
        </div>
      </div>
    </>
  );
};

export default GradesTable;
