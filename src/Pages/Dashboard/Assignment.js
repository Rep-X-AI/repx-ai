import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

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
  const [isEvaluated, setIsEvaluated] = useState(false);
  const [marks, setMarks] = useState(0);

  var FormData = require("form-data");
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
        setAssignmentName(response.data.title);
        setDescription(response.data.desc);
        setCreatedBy(response.data.createdBy);
        setSelectedDate(new Date(response.data.deadline));
        setIsEvaluated(response.data.isEvaluated);
      } catch (error) {
        console.error("Error fetching assignment:", error);
        navigate("/assigment-not-found-or-not-registered-in-the-assignment");
      }
    };

    if (currentUser && currentUser.uid) {
      fetchAssignment();
    }
  }, [role, currentUser, baseUrl, id, navigate]);

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
    setFileState(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file to submit.");
      return;
    }

    console.log({ file: file });
    setFile(null);
    setFileName("");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setFile(null);
    setFileName("");
  };

  const openModal = () => {
    setIsModalOpen(true);
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
        //marks: marks,
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

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${baseUrl}/api/assignments/${id}`);
      console.log(response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const copyCode=() =>{
    navigator.clipboard.writeText(id);
    alert("Code Copied to Clipboard")
  }

  return (
    <>
      <div className="w-full max-w-screen-lg mx-auto p-4">
        <>
          {isModalOpen && (
            <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
              <div className="relative w-auto my-6 mx-auto max-w-2xl">
                {/* Modal content */}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none bg-gradient-to-r from-purple-50 via-pink-50 to-purple-300">
                  {/* Modal header */}

                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-5xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={closeModal}
                  >
                    <span className="bg-transparent  font-bold text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>

                  {/* Modal body */}

                  <form
                    className="w-full sm:px-12 lg:px-16 xl:px-24 flex flex-col flex-wrap text-xl mb-10 py-5"
                    onSubmit={handleUpdate}
                  >
                    <div className="grid gap-2 sm:gap-6 md:grid-cols-2">
                      <div>
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
                        <input
                          name="creationDate"
                          id="creationDate"
                          type="text"
                          className="bg-gradient-to-b from-purple-100 to-purple-300 text-black relative rounded-lg outline-none text-lg flex items-center gap-1.5 py-2 px-5 w-full placeholder:text-gray-700 focus:ring-1 focus:ring-purple-400 focus:ring-offset-1 focus:ring-offset-transparent select-none pointer-events-none"
                          required
                          autoComplete="off"
                          value={new Date(Date.now()).toLocaleDateString(
                            "en-GB"
                          )}
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
                          htmlFor="marks"
                          className="block mb-2 font-medium text-purple-400"
                        >
                          Enter Total Marks
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
                      className="hero-button-gradient mt-3 rounded-lg py-3 px-7 text-white font-medium tracking-wide transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-95"
                    >
                      Update Assignment
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Assignment Details */}
          <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-white p-6 rounded-lg shadow-lg mb-6">
            <p className="text-lg text-zinc-200 mb-3">Assignment Code: {id}</p>
            <p className="text-lg font-bold">{assignmentName}</p>
            <p className="mb-4">{description}</p>
            <p className="text-zinc-200">
              Teacher: {createdBy || currentUser.displayName}
            </p>
            <p className="text-zinc-200">
              Deadline: {new Date(selectedDate).toLocaleDateString("en-GB")}
            </p>
            <p className="text-zinc-200">Marks: 100</p>
            {role === "teacher" && (
              <>
                <div className="flex flex-column justify-end">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    onClick={openModal}
                  >
                    <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    onClick={handleDelete}
                  >
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg"fill="currentColor" viewBox="0 0 512 512" onClick={copyCode}>
                    <path d="M503.7 189.8L327.7 37.9C312.3 24.5 288 35.3 288 56v80.1C127.4 137.9 0 170.1 0 322.3c0 61.4 39.6 122.3 83.3 154.1 13.7 9.9 33.1-2.5 28.1-18.6C66.1 312.8 132.9 274.3 288 272.1V360c0 20.7 24.3 31.5 39.7 18.2l176-152c11.1-9.6 11.1-26.8 0-36.3z" />
                  </svg>
                </div>
              </>
            )}
          </div>

          {/* File Upload Section */}
          {role === "student" && (
            <div className="bg-indigo-100 rounded-lg shadow-lg p-6 mb-6 text-center">
              <form className=" p-4 rounded-lg " onSubmit={handleSubmit}>
                <div className="mb-2">
                  <div className=" mt-2 text-black ">
                    <div
                      className="flex items-center justify-center w-full "
                      onDrop={handleFileUpload}
                      onDragOver={handleDragOver}
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
                        onChange={handleFileUpload}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-4 w-full bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-white text-xl font-semibold p-4 rounded-lg shadow-md hover:from-purple-600 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    onClick={handleSubmit}
                  >
                    Submit Assignment
                  </button>
                  <button
                    className="mt-4 w-full bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-white text-xl font-semibold  p-4 rounded-lg shadow-md hover:from-purple-600 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </>

        {/* Evaluation Section (Only for Teachers) */}
        {role === "teacher" && (
          <div className="bg-indigo-100 rounded-lg shadow-lg p-6 text-center mb-6">
            <p className="font-semibold mb-4">Assignments Submitted: 0</p>
            <p className="font-semibold mb-4">Assignments Pending: 0</p>
            <p className="font-bold mb-4">
              Evaluate quickly with the power of AI
            </p>
            <Link
              to="/dashboard/evaluate"
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400 inline-block"
            >
              Evaluate Now!
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
