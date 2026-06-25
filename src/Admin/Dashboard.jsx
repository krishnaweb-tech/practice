import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import QuizIcon from "@mui/icons-material/Quiz";
 
export default function Dashboard() {

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const results = JSON.parse(localStorage.getItem("results")) || [];

  return (
    <div className="dashboard-wrapper">

      <h2>Hi, Welcome back 👋</h2>

      <div className="row g-4">

        {/* Card 1 - Users */}
        <div className="col-xl-3 col-md-6">
          <div className="stat-card card-blue">
            <PeopleIcon style={{ fontSize: 38 }} />
            <h2>{users.length}</h2>
            <p>Total Users</p>
          </div>
        </div>

        {/* Card 2 - Results */}
        <div className="col-xl-3 col-md-6">
          <div className="stat-card card-green">
            <AssignmentIcon style={{ fontSize: 38 }} />
            <h2>{results.length}</h2>
            <p>Total Results</p>
          </div>
        </div>

        {/* Card 3 - Exams */}
        <div className="col-xl-3 col-md-6">
          <div className="stat-card card-yellow">
            <SchoolIcon style={{ fontSize: 38 }} />
            <h2>3</h2>
            <p>Total Exams</p>
          </div>
        </div>

        {/* Card 4 - Questions */}
        <div className="col-xl-3 col-md-6">
          <div className="stat-card card-teal">
            <QuizIcon style={{ fontSize: 38 }} />
            <h2>15</h2>
            <p>Total Questions</p>
          </div>
        </div>

      </div>
    </div>
  );
}