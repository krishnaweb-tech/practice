
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import QuizIcon from "@mui/icons-material/Quiz";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SchoolIcon from "@mui/icons-material/School";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Sidebar({ setPage, currentPage }) {

  return (
    <div className="sidebar">

      {/* Logo */}
      <div className="sidebar-top">
        <span className="sidebar-logo">LOGO</span>
      </div>

      {/* Menu Buttons */}
      <nav className="sidebar-nav">

        <button
          className={currentPage === "dashboard" ? "sidebar-item active" : "sidebar-item"}
          onClick={() => setPage("dashboard")}
        >
          <DashboardIcon />
          <span>Dashboard</span>
        </button>

        <button
          className={currentPage === "users" ? "sidebar-item active" : "sidebar-item"}
          onClick={() => setPage("users")}
        >
          <PeopleIcon />
          <span>Users</span>
        </button>

        <button
          className={currentPage === "results" ? "sidebar-item active" : "sidebar-item"}
          onClick={() => setPage("results")}
        >
          <AssignmentIcon />
          <span>Results</span>
        </button>

        <button
          className={currentPage === "questions" ? "sidebar-item active" : "sidebar-item"}
          onClick={() => setPage("questions")}
        >
          <QuizIcon />
          <span>Questions</span>
        </button>

        <button
          className={currentPage === "exams" ? "sidebar-item active" : "sidebar-item"}
          onClick={() => setPage("exams")}
        >
          <SchoolIcon />
          <span>Exams</span>
        </button>

        <button
          className={currentPage === "settings" ? "sidebar-item active" : "sidebar-item"}
          onClick={() => setPage("settings")}
        >
          <SettingsIcon />
          <span>Settings</span>
        </button>

      </nav>

      {/* Bottom User */}
      <div className="sidebar-user">
        <AccountCircleIcon style={{ fontSize: 32, color: "#9ca3af" }} />
        <div className="sidebar-user-info">
          <span className="sidebar-user-name">Admin</span>
          <span className="sidebar-user-role">Administrator</span>
        </div>
      </div>

    </div>
  );
}