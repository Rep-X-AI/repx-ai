import React, { useState } from "react";
import "./Date.css";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import upload from "../../Components/upload";
import Alert from "../../Components/Alert";

export default function CreateAssignment() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [year, setYear] = useState(selectedDate.getFullYear());
  const [month, setMonth] = useState(selectedDate.getMonth());
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [questionFileName, setQuestionFileName] = useState("");
  const [modelFileName, setModelFileName] = useState("");
  const [modeldiagFileName, setModelDiagFileName] = useState("");
  const [assignmentName, setAssignmentName] = useState("");
  const [marks, setMarks] = useState(0);
  const [questionPaper, setQuestionPaper] = useState(null);
  const [answerPaper, setAnswerPaper] = useState(null);
  const [diagramPaper, setDiagramPaper] = useState(null);
  const [description, setDescription] = useState("");
  const [alert,setAlert] = useState(false);
  var FormData = require("form-data");

  const navigate = useNavigate()

  const nodeEnv = process.env.REACT_APP_NODE_ENV;
  const baseUrl =
    nodeEnv === "production"
      ? "https://repx-ai-backend.vercel.app"
      : "http://localhost:8080";

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

    if (!file.type.includes("pdf") && !file.type.includes("jpg") && !file.type.includes("jpeg") && !file.type.includes("png")) {
      alert("Please select a correct file.");
      return;
    }
    if (file.size > 500 * 1024) {
      alert("File size exceeds 500kb limit.");
      return;
    }
    setFileName(file.name);
    setFileState(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
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

  const { currentUser } = useAuth();

  const create = async (data) => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/assignments/create`,
        data
      );
      return response.data.code;
    } catch (error) {
      console.error("Error:", error);
    }
  };


  const createMLserver = async (code, ans, dia) => {
    const dataa = {
      assignmentCode : code,
      modelAnswer : ans,
      modelDiagram : dia
    }
    console.log(dataa);
    try {
    const response = await axios.post('/createAssignment', dataa);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setAlert(true); 
      const qfile = await upload(questionPaper);
      const ansfile = await upload(answerPaper);
      const diagram = await upload(diagramPaper);
     
        const formData = {
          title: assignmentName,
          desc: description,
          questionUrl: qfile ? qfile : "nothing",
          modelAnsUrl: ansfile ? ansfile : "nothing",
          diagramurl : diagram ? diagram : "nothing",
          createdBy: currentUser?.uid,
          teacherName: currentUser.displayName,
          deadline: selectedDate,
          tmarks: marks,
          students: [],
        };

        const code = await create(formData)

        console.log(code)

        createMLserver(code, ansfile, diagram);

        setAssignmentName("");
        setSelectedDate(new Date());
        setMarks(0);
        setAnswerPaper(null);
        setQuestionPaper(null);
        setDiagramPaper(null);
        setDescription("");
        setQuestionFileName("");
        setModelFileName("");
        setModelDiagFileName("");

        setTimeout(() => {
          setAlert(false);
          navigate("/dashboard")
        }, 1000);  
        
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
  const handleCancel = () => {
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

  const currentMonthIndex = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full flex flex-col">
      <h1 className="text-3xl mb-1 text-left font-bold leading-none md:text-4xl lg:text-5xl pb-2 bg-gradient-to-bl from-purple-300 via-pink-300 to-purple-500 bg-clip-text text-transparent">
        {" "}
        Create Assignment{" "}
      </h1>
      <p className="mb-3 mt-2 text-lg font-normal text-purple-300 lg:text-xl text-left">
        Fill in the details below to create a new assignment and share it with
        your students.
      </p>
      <hr className="h-px my-8 mt-1 bg-gray-700 border-0" />
      <form
        className="w-full sm:px-16 lg:px-20 xl:px-40 flex flex-col flex-wrap text-xl mb-10 py-5"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-2 sm:gap-6 md:grid-cols-2">
          <div>
            <input
              name="title"
              id="title"
              type="text"
              className="bg-gradient-to-b from-purple-100 to-purple-300 text-black relative rounded-lg outline-none text-lg flex items-center gap-1.5 py-2 px-5 w-full border-2 border-[#030017] placeholder:text-gray-700 focus:ring-1 focus:ring-purple-400 focus:ring-offset-1 focus:ring-offset-transparent"
              required
              autoComplete="off"
              placeholder="Assignment Title"
              value={assignmentName}
              onChange={nameChange}
            />
          </div>
          <div>
            <input
              name="creationDate"
              id="creationDate"
              type="text"
              className="bg-gradient-to-b from-purple-100 to-purple-300 text-black relative rounded-lg outline-none text-lg flex items-center gap-1.5 py-2 px-5 w-full border-2 border-[#030017] placeholder:text-gray-700 focus:ring-1 focus:ring-purple-400 focus:ring-offset-1 focus:ring-offset-transparent select-none pointer-events-none"
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
                className="block mb-2 font-medium text-purple-400"
              >
                Select Deadline
              </label>
              <input
                type="text"
                className="bg-gradient-to-b from-purple-100 to-purple-300 text-black relative rounded-lg outline-none text-lg flex items-center gap-1.5 py-2 px-5 w-full border-2 border-[#030017] placeholder:text-gray-700 focus:ring-1 focus:ring-purple-400 focus:ring-offset-1 focus:ring-offset-transparent date-input"
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
                              {new Date(year, index).toLocaleString("default", {
                                month: "long",
                              })}
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
                    <button className="cancel" onClick={handleCancel}>
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
              htmlFor="marks"
              className="block mb-2 font-medium text-purple-400"
            >
              Enter Total Marks
            </label>
            <input
              name="totalMarks"
              id="totalMarks"
              type="number"
              className="bg-gradient-to-b from-purple-100 to-purple-300 text-black relative rounded-lg outline-none text-lg flex items-center gap-1.5 py-2 px-5 w-full border-2 border-[#030017] placeholder:text-gray-700 focus:ring-1 focus:ring-purple-400 focus:ring-offset-1 focus:ring-offset-transparent"
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

        <div className="grid gap-6 mt-3 text-black md:grid-cols-2">
          <div>
            <label
              htmlFor="questionURL"
              className="block mb-2 font-medium text-purple-400"
            >
              Question Paper PDF
            </label>
            <div
              className="flex items-center justify-center w-full"
              onDrop={(event) =>
                handleFileUpload(event, setQuestionFileName, setQuestionPaper)
              }
              onDragOver={(event) => handleDragOver(event)}
            >
              <label
                htmlFor="question-file"
                className="flex flex-col items-center justify-center w-full h-40 border-2 rounded-lg cursor-pointer bg-gradient-to-b from-purple-100 to-purple-400 text-black"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {questionFileName === "" && (
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
                  {questionFileName ? (
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
                        {questionFileName}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="mb-2 text-sm text-gray-950">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-950">
                        PDF (under 500kb){" "}
                      </p>
                    </>
                  )}
                </div>
                <input
                  id="question-file"
                  type="file"
                  className="hidden"
                  onChange={(event) =>
                    handleFileUpload(
                      event,
                      setQuestionFileName,
                      setQuestionPaper
                    )
                  }
                />
              </label>
            </div>
          </div>
          <div>
            <label
              htmlFor="modelURL"
              className="block mb-2 font-medium text-purple-400"
            >
              Model Answer PDF
            </label>
            <div
              className="flex items-center justify-center w-full"
              onDrop={(event) =>
                handleFileUpload(event, setModelFileName, setAnswerPaper)
              }
              onDragOver={(event) => handleDragOver(event)}
            >
              <label
                htmlFor="model-file"
                className="flex flex-col items-center justify-center w-full h-40 border-2 rounded-lg cursor-pointer bg-gradient-to-b from-purple-100 to-purple-400 text-black"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {modelFileName === "" && (
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
                  {modelFileName ? (
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
                      <p className="mb-2 text-sm text-gray-950">
                        {modelFileName}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="mb-2 text-sm text-gray-950">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-950">
                        PDF (under 500kb){" "}
                      </p>
                    </>
                  )}
                </div>
                <input
                  id="model-file"
                  type="file"
                  className="hidden"
                  onChange={(event) =>
                    handleFileUpload(event, setModelFileName, setAnswerPaper)
                  }
                />
              </label>
            </div>
          </div>
        </div>

        <div className="my-5 w-full m-auto">
            <label
              htmlFor="modeldiagURL"
              className="block text-center mb-2 font-medium text-purple-400"
            >
              Model Diagram Image (jpg , jpeg , png)
            </label>
            <div
              className="flex items-center justify-center w-full"
              onDrop={(event) =>
                handleFileUpload(event, setModelDiagFileName, setDiagramPaper)
              }
              onDragOver={(event) => handleDragOver(event)}
            >
              <label
                htmlFor="modeldiag-file"
                className="flex flex-col items-center justify-center w-full h-40 border-2 rounded-lg cursor-pointer bg-gradient-to-b from-purple-100 to-purple-400 text-black"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {modeldiagFileName === "" && (
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
                  {modeldiagFileName ? (
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
                      <p className="mb-2 text-sm text-gray-950">
                        {modeldiagFileName}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="mb-2 text-sm text-gray-950">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-950">
                        PDF (under 500kb){" "}
                      </p>
                    </>
                  )}
                </div>
                <input
                  id="modeldiag-file"
                  type="file"
                  className="hidden"
                  onChange={(event) =>
                    handleFileUpload(event, setModelDiagFileName, setDiagramPaper)
                  }
                />
              </label>
            </div>
          </div>

        <div className="mt-3">
          <textarea
            name="description"
            id="description"
            className="bg-gradient-to-b from-purple-100 to-purple-400 text-black relative rounded-lg outline-none text-lg flex items-center gap-1.5 py-2 px-5 w-full border-2 h-52 resize-none border-[#030017] placeholder:text-gray-700 focus:ring-1 focus:ring-purple-400 focus:ring-offset-1 focus:ring-offset-transparent"
            autoComplete="off"
            placeholder="Write a bit of description...."
            value={description}
            onChange={descChange}
          />
        </div>
        <>
        {alert && (
          <Alert title="Redirecting To Dashboard When Assignment Created." desc="Your assignment has been created. You can update it from the dashboard if needed." />
        )}
        </>
        {!alert && (
        <button
          type="submit"
          className="hero-button-gradient mt-3 rounded-lg py-3 px-7 text-white font-medium tracking-wide transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-95"
        >
          Create Assignment
        </button>
        )}
      </form>
    </div>
  );
}
