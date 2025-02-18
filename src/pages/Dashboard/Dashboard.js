import React, { useState } from "react";
import "./Dashboard.css";
import StudentDashboard from "../../components/StudentDashboard/StudentDashboard";
import CourseCatalog from "../../components/CourseCatalog/CourseCatalog";
import ResourcesHub from "../../components/ResourseHub/ResourcesHub";
import ProjectShow from "../../components/ProjectCase/ProjectShow";
function Dashboard() {
  const [compId, setCompId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="side-bar">
        <div className="container">
          <div className="side-bar-logo">
            <h2>ADUDC</h2>
            <div className="side-menu" onClick={toggleMenu}>
              {isOpen ? (
                <i className="fa-solid fa-x"></i>
              ) : (
                <i className="fa-solid fa-bars"></i>
              )}
            </div>
          </div>
          <div
            className={
              isOpen ? "side-bar-links show-menu" : "side-bar-links hide-menu"
            }
          >
            <div
              className={compId == 0 ? "side-link side-active" : "side-link"}
              onClick={() =>{
                setCompId(0)
                setIsOpen(false)
              }}
            >
              {" "}
              <i className="fa-solid fa-border-all"></i> <p>Dashboard</p>
            </div>
            <div
              className={compId == 1 ? "side-link side-active" : "side-link"}
              onClick={() =>{
                setCompId(1)
                setIsOpen(false)
              } }
            >
              {" "}
              <i className="fa-solid fa-book-open"></i> <p>Course Catalog</p>
            </div>
            <div
              className={compId == 2 ? "side-link side-active" : "side-link"}
              onClick={() =>{
                setIsOpen(false)
                setCompId(2)
              } }
            >
              {" "}
              <i className="fa-solid fa-bars-staggered"></i> <p>Resourse Hub</p>
            </div>
            <div
              className={compId == 3 ? "side-link side-active" : "side-link"}
              onClick={() => setCompId(3)}
            >
              {" "}
              <i className="fa-solid fa-arrow-up-from-bracket"></i>
              <p>Project Showcase</p>
            </div>
            <div className="side-link">
              {" "}
              <i className="fa-solid fa-arrow-right-to-bracket"></i> <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-main">
        {compId === 0 && <StudentDashboard />}
        {compId === 1 && <CourseCatalog />}
        {compId === 2 && <ResourcesHub />}
        {compId === 3 && <ProjectShow />}
      </div>
    </>
  );
}

export default Dashboard;
