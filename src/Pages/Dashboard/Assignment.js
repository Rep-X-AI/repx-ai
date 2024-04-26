import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import upload from "../../Components/upload";
import deleteFile from '../../Components/delete'

export default function Assignment({ role }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { currentUser } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [year, setYear] = useState(selectedDate.getFullYear());
  const [month, setMonth] = useState(selectedDate.getMonth());
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [assignmentName, setAssignmentName] = useState("");
  const [description, setDescription] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [teacher, setTeacher] = useState("");
  const [isEvaluated, setIsEvaluated] = useState(false);
  const [marks, setMarks] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [submissionsCount, setSubmissionsCount] = useState(0);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer,setAnswer] = useState("")
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        console.log(response.data);
        setAssignmentName(response.data.title);
        setDescription(response.data.desc);
        setCreatedBy(response.data.createdBy);
        setTeacher(response.data.teacher);
        setMarks(response.data.tmark);
        setSelectedDate(new Date(response.data.deadline));
        setIsEvaluated(response.data.isEvaluated);
        setQuestion(response.data.questionUrl);
        if (response.data.submissionCount) {
          setSubmissionsCount(response.data.submissionCount);
        }
        if (response.data.pendingCount) {
          setPendingCount(response.data.pendingCount);
        }
        if (response.data.hasSubmitted) {
          setHasSubmitted(response.data.hasSubmitted);
        }
        if(response.data.modelAnsUrl){
          setAnswer(response.data.modelAnsUrl);
        }
      } catch (error) {
        console.error("Error fetching assignment:", error);
        navigate("/assigment-not-found-or-not-registered-in-the-assignment");
      }
    };

    if (currentUser && currentUser.uid) {
      fetchAssignment();
    }
  }, [role, currentUser, baseUrl, id, navigate, hasSubmitted]);

  const handleFileUpload = (event, setFileName, setFileState) => {
    event.preventDefault();
    let file;
    if (event.target && event.target.files && event.target.files.length > 0) {
      file = event.target.files[0];
    } else if (
      event.dataTransfer &&
      event.dataTransfer.files &&
      event.dataTransfer.files.length > 0
    ) {
      file = event.dataTransfer.files[0];
    } else {
      return;
    }

    if (!file.type.includes("pdf")) {
      alert("Please select a PDF file.");
      return;
    }
    if (file.size > 500 * 1024) {
      alert("File size exceeds 500kb limit.");
      return;
    }
    setFileName(file.name);
    console.log(file.name);
    setFileState(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file to submit.");
      return;
    }
    try {
      const myfile = await upload(file);
      const formData = {
        uid: currentUser.uid,
        answerUrl: myfile,
        studentname: currentUser.displayName
      };

      submit(formData);

      setHasSubmitted(true);
      setFile(null);
      setFileName("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const submit = async (data) => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/assignments/submitAssignment/${id}`,
        data
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const edit = async (data) => {
    try {
      const response = await axios.patch(
        `${baseUrl}/api/assignments/${id}`,
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUpdate = async (e, formdata) => {
    e.preventDefault();
    openModal();
    try {
      const formData = {
        title: assignmentName,
        desc: description,
        deadline: selectedDate,
        tmarks: marks,
      };
      edit(formData);
      closeModal();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDateClick = (day) => {
    const newDate = new Date(year, month, day);
    setSelectedDate(newDate);
  };
  const displayDates = () => {
    const currentDate = new Date();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const datesArray = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      datesArray.push(<p key={`empty-${i}`} className="empty"></p>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDateOfMonth = new Date(year, month, day);
      if (currentDateOfMonth >= currentDate) {
        const isToday =
          currentDate.getDate() === day &&
          currentDate.getFullYear() === year &&
          currentDate.getMonth() === month;
        const selected =
          selectedDate.getDate() === day &&
          selectedDate.getFullYear() === year &&
          selectedDate.getMonth() === month;
        datesArray.push(
          <p
            key={day}
            className={`${isToday ? "today" : ""} ${
              selected ? "selected" : ""
            }`}
            onClick={() => handleDateClick(day)}
          >
            {day}
          </p>
        );
      }
    }
    return datesArray;
  };
  const handleMonthChange = (e) => {
    setMonth(parseInt(e.target.value));
  };
  const handleYearChange = (e) => {
    setYear(parseInt(e.target.value));
  };
  const handleApply = () => {
    document.querySelector(".date-input").value =
      selectedDate.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    setIsDatePickerOpen(false);
  };
  const handleCancelDate = () => {
    setIsDatePickerOpen(false);
  };
  const toggleDatePicker = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };
  const handleNextMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };
  const handlePrevMonth = () => {
    const currentDate = new Date();
    if (
      year > currentDate.getFullYear() ||
      (year === currentDate.getFullYear() && month > currentDate.getMonth())
    ) {
      setMonth(month - 1);
    }
  };
  const nameChange = (e) => {
    e.preventDefault();
    setAssignmentName(e.target.value);
  };

  const marksChange = (e) => {
    e.preventDefault();
    setMarks(e.target.value);
  };

  const descChange = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const currentMonthIndex = new Date().getMonth();


 const fetchSubmissions = async ()=>{
    try {
      const response = await axios.get(
        `${baseUrl}/api/assignments/get-submissions-${role}/${id}?uid=${currentUser.uid}`
      );
      if(response.data){
        return (response.data);
      }    
    } catch (error) {
      console.log(error)
    }
  }

  const delSubmissions = async () => {
    try {
      const submissions = await fetchSubmissions();
      console.log(submissions);
  
      for (const [index, sub] of submissions.entries()) {
        console.log(`Deleting submission ${index}: ${sub.answerUrl}`);
        await deleteFile(sub.answerUrl);
        console.log(`Submission ${index} deleted successfully.`);
      } 
    } catch (error) {
      console.log(error.message);
    }
  };
  
  const handleDelete = async () => {
    try {
      
      await delSubmissions();

      await deleteFile(question);
      await deleteFile(answer);
  
      const response = await axios.delete(`${baseUrl}/api/assignments/${id}`);
      console.log(response.data);

      navigate("/dashboard");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  


  const copyCode = () => {
    navigator.clipboard.writeText(id);
    alert("Code Copied to Clipboard");
  };

  const handleDownload = async (e) => {
    e.preventDefault();
    try {
      if (!question) {
        console.error("Question URL is empty.");
        return;
      }
      window.open(question, "_blank");
    } catch (error) {
      console.error("Error retrieving resource:", error);
    }
  };

  return (
    <>
      <div className="w-full max-w-screen-lg mx-auto p-4">
        {role === "teacher" && (
          <>
            <h1 className="text-3xl mb-1 text-left font-bold leading-none md:text-4xl lg:text-5xl pb-2 bg-gradient-to-bl from-purple-300 via-pink-300 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Your Assignments{" "}
            </h1>
            <p className="mb-3 mt-2 text-lg font-normal text-purple-300 lg:text-xl text-left">
              Check and update your assignment details here.
            </p>
          </>
        )}
        {role === "student" && (
          <>
            <h1 className="text-3xl mb-1 text-left font-bold leading-none md:text-4xl lg:text-5xl pb-2 bg-gradient-to-bl from-purple-300 via-pink-300 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Your Assignments{" "}
            </h1>
            <p className="mb-3 mt-2 text-lg font-normal text-purple-300 lg:text-xl text-left">
              Check and submit your assignment details here.
            </p>
          </>
        )}

        <hr className="h-px my-8 mt-1 bg-gray-700 border-0" />
        <>
          {isModalOpen && (
            <div className="my-5">
              <h1 className="text-white text-center text-3xl font-bold mb-3">
                Update Assignment
              </h1>
              {/* Modal content */}
              <div className="flex flex-col p-6 mx-auto  text-center bg-gradient-to-b from-purple-300 to-purple-600 text-black border-2 rounded-lg">
                {/* Modal header */}

                <button
                  className="ml-auto p-2 m-4 rounded-full bg-white"
                  onClick={closeModal}
                >
                  <span className="font-bold text-red-500 h-7 w-5 text-2xl block outline-none focus:outline-none">
                    X
                  </span>
                </button>

                {/* Modal body */}

                <form
                  className="w-full sm:px-12 lg:px-16 xl:px-24 flex flex-col flex-wrap text-xl mb-10 py-5 px-9"
                  onSubmit={handleUpdate}
                >
                  <div className="grid gap-2 sm:gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="deadline"
                        className="block mb-2 font-medium text-violet-800"
                      >
                        Assignment Title
                      </label>
                      <input
                        name="title"
                        id="title"
                        type="text"
                        className="bg-gradient-to-b from-purple-100 to-purple-300 text-black relative rounded-lg outline-none text-lg flex items-center gap-1.5 py-2 px-5 w-full  placeholder:text-gray-700 focus:ring-1 focus:ring-purple-400 focus:ring-offset-1 focus:ring-offset-transparent"
                        required
                        autoComplete="off"
                        placeholder="Assignment Title"
                        value={assignmentName}
                        onChange={nameChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="deadline"
                        className="block mb-2 font-medium text-violet-800"
                      >
                        Today's Date
                      </label>
                      <input
                        name="creationDate"
                        id="creationDate"
                        type="text"
                        className="bg-gradient-to-b from-purple-100 to-purple-300 text-black relative rounded-lg outline-none text-lg flex items-center gap-1.5 py-2 px-5 w-full placeholder:text-gray-700 focus:ring-1 focus:ring-purple-400 focus:ring-offset-1 focus:ring-offset-transparent select-none pointer-events-none"
                        required
                        autoComplete="off"
                        value={new Date(Date.now()).toLocaleDateString("en-GB")}
                        placeholder="Creation Date"
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="grid mt-2 gap-2 sm:gap-6 md:grid-cols-2">
                    <div>
                      {/* {Date PIcker Start} */}

                      <div className="datepicker-container">
                        <label
                          htmlFor="deadline"
                          className="block mb-2 font-medium text-violet-800"
                        >
                          Select Deadline
                        </label>
                        <input
                          type="text"
                          className="bg-gradient-to-b from-purple-100 to-purple-300 text-black relative rounded-lg outline-none text-lg flex items-center gap-1.5 py-2 px-5 w-full  placeholder:text-gray-700 focus:ring-1 focus:ring-purple-400 focus:ring-offset-1 focus:ring-offset-transparent date-input"
                          placeholder="Select date here"
                          onClick={toggleDatePicker}
                          required
                          value={selectedDate.toLocaleDateString("en-GB")}
                          onChange={handleDateClick}
                        />

                        {isDatePickerOpen && (
                          <div className="datepicker">
                            <div className="datepicker-header">
                              <p className="prev" onClick={handlePrevMonth}>
                                Prev
                              </p>

                              <div>
                                <select
                                  className="month-input"
                                  onChange={handleMonthChange}
                                  value={month}
                                >
                                  {[...Array(12).keys()]
                                    .slice(currentMonthIndex)
                                    .map((index) => (
                                      <option key={index} value={index}>
                                        {new Date(year, index).toLocaleString(
                                          "default",
                                          {
                                            month: "long",
                                          }
                                        )}
                                      </option>
                                    ))}
                                </select>

                                <input
                                  type="number"
                                  className="year-input"
                                  onChange={handleYearChange}
                                  value={year}
                                  min={new Date().getFullYear()}
                                />
                              </div>

                              <p className="next" onClick={handleNextMonth}>
                                Next
                              </p>
                            </div>

                            <div className="days">
                              <span>Sun</span>
                              <span>Mon</span>
                              <span>Tue</span>
                              <span>Wed</span>
                              <span>Thu</span>
                              <span>Fri</span>
                              <span>Sat</span>
                            </div>

                            <div className="dates">{displayDates()}</div>

                            <div className="datepicker-footer">
                              <button
                                className="cancel"
                                onClick={handleCancelDate}
                              >
                                Cancel
                              </button>
                              <button className="apply" onClick={handleApply}>
                                Apply
                              </button>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Date Picker End */}
                    </div>
                    <div>
                      <label
                        htmlFor="deadline"
                        className="block mb-2 font-medium text-violet-800"
                      >
                        Total Marks
                      </label>
                      <input
                        name="totalMarks"
                        id="totalMarks"
                        type="number"
                        className="bg-gradient-to-b from-purple-100 to-purple-300 text-black relative rounded-lg outline-none text-lg flex items-center gap-1.5 py-2 px-5 w-full  placeholder:text-gray-700 focus:ring-1 focus:ring-purple-400 focus:ring-offset-1 focus:ring-offset-transparent"
                        required
                        autoComplete="off"
                        min={0}
                        max={1000}
                        placeholder="Total Marks"
                        value={marks}
                        onChange={marksChange}
                      />
                    </div>
                  </div>

                  <div className="mt-3">
                    <label
                      htmlFor="deadline"
                      className="block mb-2 font-medium text-violet-800"
                    >
                      Assignment Details
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      className="bg-gradient-to-b from-purple-100 to-purple-400 text-black relative rounded-lg outline-none text-lg flex items-center gap-1.5 py-2 px-5 w-full  h-52 resize-none border-[#030017] placeholder:text-gray-700 focus:ring-1 focus:ring-purple-400 focus:ring-offset-1 focus:ring-offset-transparent"
                      autoComplete="off"
                      placeholder="Write a bit of description...."
                      value={description}
                      onChange={descChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="hero-button-gradient mt-5 rounded-lg py-3 px-7 text-white font-medium tracking-wide transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-95"
                  >
                    Update Assignment
                  </button>
                </form>
              </div>
            </div>
          )}

          {!isModalOpen && (
            <>
              <h1 className="text-white text-center text-3xl font-bold mb-3">
                Assignment Details
              </h1>
              {/* Assignment Details */}
              <div className="flex flex-col mb-10 mx-auto max-w-full lg:text-center md:text-cecnter sm:text-left bg-gradient-to-b from-purple-100 to-purple-400 text-black border-2 rounded-lg">
                <section className="m-auto mt-4">
                  <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
                    <li className="assignment mb-4 px-4 lg:list-none sm:list-disc md:list-disc">
                      <h3 className="text-black text-2xl font-bold mb-3 lg:text-left lg:ml-5 sm:text-center md:text-center">
                        Assignment Title
                      </h3>
                      <p className="text-violet-800 text-center py-1 font-semibold  text-xl lg:ml-1 ty lg:w-3/4 sm:w-full">
                        {assignmentName}
                      </p>
                    </li>
                    <li className="assignment mb-4 px-4 lg:list-none sm:list-disc md:list-disc">
                      <h3 className="text-black text-2xl font-bold mb-3 lg:text-left sm:text-center md:text-center lg:ml-5 ">
                        Assignment Code
                      </h3>
                      <p className="text-violet-800 text-center  py-1 font-semibold  text-xl lg:ml-1 ty lg:w-full sm:w-full">
                        {id}
                      </p>
                    </li>
                  </div>
                  <li className="assignment mb-4 px-4 lg:list-none sm:list-disc md:list-disc">
                    <h3 className="text-black text-2xl font-bold mb-3 lg:text-center mt-5 sm:text-center md:text-center">
                      Assignment Details
                    </h3>
                    <p className="text-violet-800 md:text-center lg:text-center font-semibold sm:text-center pr-4 text-xl">
                      {description}
                    </p>
                  </li>
                  <div className="grid lg:mt-8 lg:grid-cols-3 sm:mt-5 md:mt-5 sm:grid-cols-2 md:grid-cols-2">
                    <li className="assignment mb-4 px-4 lg:list-none sm:list-disc">
                      <h3 className="text-black font-bold text-2xl lg:text-center md:text-left sm:text-left">
                        Teacher Name
                      </h3>
                      <p className="text-violet-800 font-semibold text-lg">
                        {teacher}
                      </p>
                    </li>
                    <li className="deadline mb-4 px-4 lg:list-none sm:list-disc">
                      <h3 className="text-black font-bold text-2xl lg:text-center md:text-left sm:text-left">
                        Deadline
                      </h3>
                      <p className="text-violet-800 text-center  py-1 font-semibold  text-xl lg:ml-1 ty lg:mt-0 md:mt-0 sm:mt-3 lg:w-full sm:w-full">
                        {new Date(selectedDate).toLocaleDateString("en-GB")}
                      </p>
                    </li>
                    <li className="marks mb-4 px-4 lg:list-none sm:list-disc">
                      <h3 className="text-black font-bold text-2xl lg:text-center md:text-left sm:text-left">
                        Total Marks
                      </h3>
                      <p className="text-violet-800 font-semibold text-lg">
                        {marks}
                      </p>
                    </li>
                  </div>
                </section>

                {role === "teacher" && (
                  <>
                    <div className="flex flex-row m-auto lg:w-1/4 md:w-full sm:w-full mt-5 justify-center bg-violet-500 p-2 rounded-full mb-5">
                      <svg
                        className="cursor-pointer hover:fill-violet-600 transition-all"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 512 512"
                        onClick={openModal}
                      >
                        <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 448 512"
                        className="cursor-pointer hover:fill-violet-600 transition-all"
                        onClick={handleDelete}
                      >
                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        className="cursor-pointer hover:fill-violet-600 transition-all"
                        viewBox="0 0 512 512"
                        onClick={copyCode}
                      >
                        <path d="M503.7 189.8L327.7 37.9C312.3 24.5 288 35.3 288 56v80.1C127.4 137.9 0 170.1 0 322.3c0 61.4 39.6 122.3 83.3 154.1 13.7 9.9 33.1-2.5 28.1-18.6C66.1 312.8 132.9 274.3 288 272.1V360c0 20.7 24.3 31.5 39.7 18.2l176-152c11.1-9.6 11.1-26.8 0-36.3z" />
                      </svg>
                    </div>
                  </>
                )}

                <div>
                  <button
                    className="flex flex-row m-auto lg:w-1/2 md:w-full sm:w-full mt-5 justify-center hover:bg-violet-600 transition-all duration-300 bg-violet-500 p-2 rounded-full mb-5 text-white font-bold"
                    onClick={handleDownload}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 mr-2"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="4"
                        ry="4"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <line
                        x1="12"
                        y1="6"
                        x2="12"
                        y2="16"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <polyline
                        points="9 13 12 16 15 13"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                    <span className="mt-1">Download Question Paper</span>
                  </button>
                </div>

                <button
                  className="hero-button-gradient rounded-lg py-3 px-3 lg:w-96 sm:w-80 m-auto text-white font-medium tracking-wide transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-95 my-3"
                  onClick={() => {
                    navigate(`/dashboard/gradeTable/${id}`);
                  }}
                >
                  Show Grades
                </button>
              </div>
            </>
          )}

          {/* File Upload Section */}
          {role === "student" && !hasSubmitted && (
            <>
              <h1 className="text-white text-center text-3xl font-bold my-4">
                Upload Assignment
              </h1>
              <div className="bg-gradient-to-b from-purple-100 to-purple-400 rounded-lg shadow-lg p-6 mb-6 text-center">
                <form className=" p-4 rounded-lg " onSubmit={handleSubmit}>
                  <div className="mb-2">
                    <div className=" mt-2 text-black ">
                      <div
                        className="flex items-center justify-center w-full "
                        onDrop={(event) =>
                          handleFileUpload(event, setFileName, setFile)
                        }
                        onDragOver={(event) => handleDragOver(event)}
                      >
                        <label
                          htmlFor="file"
                          className="flex flex-col items-center justify-center pt-5 pb-6 cursor-pointer"
                        >
                          {fileName === "" && (
                            <svg
                              className="w-8 h-8 mb-4 text-gray-800"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                          )}
                          {fileName ? (
                            <>
                              <svg
                                className="w-8 h-8 mb-4 text-gray-800"
                                viewBox="0 0 20 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill="#757575"
                                  d="M20,0H4C2.896,0,2,0.896,2,2v20c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V4C22,1.796,21.204,0,20,0z M14,2v5h5 L14,2z M20,22H4V2h5v7h7V22z"
                                />
                              </svg>
                              <p className="mb-2 my-2 text-sm text-gray-950">
                                {fileName}
                              </p>
                            </>
                          ) : (
                            <>
                              <p className="mb-2 text-sm text-gray-950 items-center">
                                <span className="font-semibold">
                                  Click to upload your Assignment
                                </span>{" "}
                                or drag and drop
                              </p>
                              <p className="text-xs text-gray-950">
                                PDF (under 500kb)
                              </p>
                            </>
                          )}
                        </label>
                        <input
                          type="file"
                          id="file"
                          name="file"
                          className="hidden"
                          onChange={(event) =>
                            handleFileUpload(event, setFileName, setFile)
                          }
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="hero-button-gradient w-full mt-4 rounded-lg py-3 px-7 text-white font-medium tracking-wide transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-95"
                      onClick={handleSubmit}
                    >
                      Submit Assignment
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </>

        {role === "student" && hasSubmitted && (
          <>
            <div className="bg-gradient-to-b from-purple-100 to-purple-400 rounded-lg shadow-lg p-6 mb-6 text-center">
              <h1 className="text-violet-800 text-center lg:text-3xl md:text-2xl sm:text-xl font-bold my-4">
                Your Assignment has been succesfully submitted!
              </h1>
            </div>
          </>
        )}

        {/* Evaluation Section (Only for Teachers) */}
        {role === "teacher" && (
          <>
            <h1 className="text-white text-center text-3xl font-bold my-3">
              Assignment Submissions
            </h1>
            <div className="flex flex-col px-5 mb-10 mx-auto max-w-full lg:text-center md:text-cecnter sm:text-left bg-gradient-to-b from-purple-100 to-purple-400 text-black border-2 rounded-lg py-5">
              <div className="mb-5 grid lg:grid-cols-2 md:grid-cols-1 sm:-grid-cols-1 ">
                <p className="font-semibold mb-4 text-xl">
                  Assignments Filed : {submissionsCount}
                </p>
                <p className="font-semibold mb-4 text-xl">
                  Assignments Due : {pendingCount}
                </p>
              </div>
              <p className="font-bold mb-4 text-violet-700 text-xl text-center">
                Evaluate quickly with the power of AI
              </p>
              <Link
                to="/dashboard/evaluate"
                className="hero-button-gradient rounded-lg py-3 px-3 lg:w-96 sm:w-80 m-auto text-white font-medium tracking-wide transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-95"
              >
                Evaluate Now!
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
