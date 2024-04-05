import React, { useState } from "react";
import { Link} from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Assignment() {

  const { state } = useLocation();
  const { code, deadline, title, desc, role, createdBy } = state;

  const assignmentStyle = {
    borderRadius: "4px",
    color: "#ffffff",
    marginBottom: "20px",
    background:
      "linear-gradient(to bottom, rgb(221, 214, 254), rgb(196, 181, 253), rgb(167, 139, 250), rgb(139, 92, 246), rgb(124, 58, 237))",
  };

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (event) => {
    event.preventDefault();
    let selectedFile = null;
    let selectedFileName = "";

    if (event.target.files && event.target.files.length > 0) {
      selectedFile = event.target.files[0];
      selectedFileName = selectedFile.name;
    } else if (
      event.dataTransfer &&
      event.dataTransfer.files &&
      event.dataTransfer.files.length > 0
    ) {
      selectedFile = event.dataTransfer.files[0];
      selectedFileName = selectedFile.name;
    } else {
      return;
    }

    if (!selectedFile.type.includes("pdf")) {
      alert("Please select a PDF file.");
      return;
    }
    if (selectedFile.size > 500 * 1024) {
      alert("File size exceeds 500kb limit.");
      return;
    }

    setFile(selectedFile);
    setFileName(selectedFileName);
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

  const handleUpdate = () =>{

  }
  const handleDelete = () =>{
    
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row p-3">
        <div
          className="flex flex-col justify-center items-center w-full md:w-100 "
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          {/* Assignment Details */}
          <div
            className="card bg-purple-300 w-full lg:w-5/6 rounded-lg shadow-lg mb-4"
            style={assignmentStyle}
          >
            <section className="assignment-details card-section p-6">
              <h2 className="text-white text-lg font-bold mb-4 px-4">
                Assignment Code
                <p className="text-white">{code}</p>
              </h2>
              <div className="assignment mb-4 px-4">
                <h3 className="text-white font-bold">Assignment Name</h3>
                <p className="text-white">{title}</p>
              </div>
              <div className="assignment mb-4 px-4">
                <h3 className="text-white font-bold">Assignment Description</h3>
                <p className="text-white">
                  {desc}
                </p>
              </div>
              <div className="flex flex-column">
                <div className="assignment mb-4 px-4">
                  <h3 className="text-white font-bold">Teacher Name</h3>
                  <p className="text-white">{createdBy}</p>
                </div>
                <div className="deadline mb-4 px-4">
                  <h3 className="text-white font-bold">Deadline</h3>
                  <p className="text-white">ASSIGNMENT DEADLINE</p>
                </div>
                <div className="marks mb-4 px-4">
                  <h3 className="text-white font-bold">Total Marks</h3>
                  <p className="text-white">ASSGNMENT TOTAL MARKS</p>
                </div>
              </div>
              <div className="flex flex-column ">
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  onClick = {handleUpdate}
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
              </div>
            </section>
          </div>

          {(role==='student') && <div className="bg-indigo-100 w-full lg:w-5/6 rounded-lg shadow-lg mb-4 ">
            <div className="text-center">
              <form
                className="bg-indigo-100 p-4 rounded-lg shadow-md"
                onSubmit={handleSubmit}
              >
                <div className="mb-2 ">
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
                    className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
                    onClick={handleSubmit}
                  >
                    Submit Assignment
                  </button>
                  <button
                    className="hero-button-gradient inline-flex rounded-lg py-3 px-7 mx-2 text-white font-medium ease-in duration-300 hover:opacity-80"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>}

          { (role==='teacher') && <div className="bg-indigo-100 w-full lg:w-5/6 rounded-lg shadow-lg mb-4 p-6 text-center ">
            <p className="font-semibold ">Assignments Submitted till now :0</p>
            <p className="font-semibold ">Assignments Pending :0</p>
            <p className="font-bold p-4">Evaluate quickly with the power of AI</p>
            <button className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80">
              <Link to="/dashboard/evaluate">
                Evaluate Now!
              </Link>
            </button>
          </div>}
        </div>
      </div>
    </div>
  );
}
