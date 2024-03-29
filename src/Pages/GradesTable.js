import React from 'react';
import jsonData from '../sampleData/sampleAssignments.json';
import usersData from '../sampleData/SampleUsers.json'; 

const GradesTable = () => {
  const assignmentStyle = {
    borderRadius: '8px',
    color: '#ffffff',
    marginBottom: '20px',
    background: "linear-gradient(to bottom, rgb(221, 214, 254), rgb(196, 181, 253), rgb(167, 139, 250), rgb(139, 92, 246), rgb(124, 58, 237))",
  };

  const studentDetailsStyle = {
    maxHeight: 'calc(100vh - 300px)',
    overflowY: 'auto',
    scrollbarWidth: 'thin',
    scrollbarColor: "rgb(216 180 254)",
    padding: "10px",
    borderRadius:"4px"
  };

  const { Assignments } = jsonData;

  const Assignment = Assignments[2]; 

  const users = usersData.Users || []; 

  const teacher = users.find(user => user.useruid === Assignment?.createdBy);

  return (
    <div className="flex flex-col md:flex-row p-3">
      {/* Empty div taking 1/6 of the screen on desktop and hidden on mobile */}
      <div className="hidden md:block md:w-1/6"></div>

      <div className="flex flex-col justify-center items-center w-full md:w-5/6 " style={{marginTop:"100px",marginBottom:"100px"}}>
        {/* Assignment Details */}
        <div className="card bg-purple-300 w-full lg:w-5/6 rounded-lg shadow-lg mb-4" style={assignmentStyle}>
          <section className="assignment-details card-section p-6">
            <h2 className="text-white text-lg font-bold mb-4 px-4">Assignment Details</h2>
            <div className="assignment mb-4 px-4">
              <h3 className="text-white font-bold">Assignment Name</h3>
              <p className="text-white">{Assignment?.title}</p>
            </div>
            <div className="assignment mb-4 px-4">
              <h3 className="text-white font-bold">Assignment Description</h3>
              <p className="text-white">{Assignment?.desc}</p>
            </div>
            <div className="flex flex-column">
              <div className="assignment mb-4 px-4">
                <h3 className="text-white font-bold">Teacher Name</h3>
                <p className="text-white">{teacher?.name}</p>
              </div>
              <div className="deadline mb-4 px-4">
                <h3 className="text-white font-bold">Deadline</h3>
                <p className="text-white">{Assignment?.deadline}</p>
              </div>
              <div className="marks mb-4 px-4">
                <h3 className="text-white font-bold">Total Marks</h3>
                <p className="text-white">{Assignment?.totalMarks}</p>
              </div>
            </div>
          </section>
        </div>

        {/* Students' Grades */}
        <div className="card bg-grey w-full lg:w-5/6 rounded-lg shadow-lg bg-fuchsia-50 " style={studentDetailsStyle}>
          <div className="student-grade flex justify-between mb-4 p-4 bg-violet-400 my-2 mx-2 ">
            <div className="student text-grey font-bold">Student Name</div>
            <div className="grade text-grey">Marks Obtained</div>
          </div>
          {Assignment && Assignment.submissions && Assignment.submissions.length > 0 ? (
            Assignment.submissions.map((submission, index) => {

              const user = users.find(user => user.useruid === submission.student);
            
              return (
                <section key={index} className="students-grades card-section p-2">
                  <div className="student-grade flex justify-between p-4" style={{ background: 'linear-gradient(to bottom, rgb(252 231 243), rgb(253 242 248), rgb(252 231 243))', borderRadius: '5px', margin: "0px" }}>
                    <div className="student text-grey font-bold">{user.name}</div>
                    <div className="grade text-grey">{submission.marks}</div>
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
  );
};

export default GradesTable;
