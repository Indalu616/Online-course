import React, { useState } from "react";
import "./StudentDashboard.css";
import SchoolIcon from "@mui/icons-material/School";
import Events from "../Events/Events";
import Project from "../projects/Project";
import { Button, Typography } from "@mui/material";
function StudentDashboard() {
  const [activeBtn, setActiveBtn] = useState(1);
  return (
    <div className="student-dashboard">
      <div className="container">
        <div className="welcome-message">
          <div className="icon">
            <SchoolIcon fontSize="large" />
          </div>
          <div className="header-message">
            <Typography variant="h4" sx={{ color: "text.primary" }}>
              Welcome, Student
            </Typography>

            <p>
              Start your ADUDC learning journey today and achieve your goals.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 p-2">
            <div className="quick-access">
              <h4>Quick Access</h4>
              <div className="access-link">
                <div className="link-icon">
                  {" "}
                  <i className="fa-solid fa-book-open"></i>{" "}
                </div>
                <div className="link-text">
                  <h3>Premium Courses</h3>
                  <p>Access premium courses</p>
                </div>
              </div>

              <div className="access-link">
                <div className="link-icon">
                  {" "}
                  <i className="fa-solid fa-bars-staggered"></i>
                </div>
                <div className="link-text">
                  <h3>Resource Hub</h3>
                  <p>Learning materials</p>
                </div>
              </div>

              <div className="access-link">
                <div className="link-icon">
                  {" "}
                  <i className="fa-solid fa-arrow-up-from-bracket"></i>
                </div>
                <div className="link-text">
                  <h3>Project Showcase</h3>
                  <p>Showcase your work</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-2">
            <div className="quick-access">
              <h4>Announcements</h4>
              <div className="access-link">
                <div className="link-icon">
                  {" "}
                  <i className="fa-solid fa-book-open"></i>{" "}
                </div>
                <div className="link-text">
                  <h3>New Course Available</h3>
                  <p>
                    Introduction to frontend development course registration
                    started
                  </p>
                </div>
              </div>

              <div className="access-link">
                <div className="link-icon">
                  {" "}
                  <i className="fa-solid fa-upload"></i>
                </div>
                <div className="link-text">
                  <h3>Project Submission</h3>
                  <p>Submit your project for review</p>
                </div>
              </div>

              <div className="access-link">
                <div className="link-icon">
                  {" "}
                  <i className="fa-solid fa-calendar-days"></i>
                </div>
                <div className="link-text">
                  <h3>Upcoming live sessions</h3>
                  <p>Join our live session this weekend</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* display events and projects */}

        <div style={{marginTop:"3rem"}}>
          <Button
            fontSize="small"
            className={activeBtn === 1 ? "active_btn" : ""}
            onClick={() => setActiveBtn(1)}
          >
            Events
          </Button>
          <Button
            fontSize="small"
            className={activeBtn === 2 ? "active_btn" : ""}
            onClick={() => setActiveBtn(2)}
          >
            Projects
          </Button>
        </div>
        {activeBtn === 1 && <Events />}
        {activeBtn === 2 && <Project />}
      </div>
    </div>
  );
}

export default StudentDashboard;
