import React from "react";
import "./SideBar.css";
function SideBar() {
  return (
    <div className="side-bar">
      <div className="container">
        <div className="side-bar-logo">
          <h2>ADUDC</h2>
        </div>
        <div className="side-bar-links">
          <div className="link">
            {" "}
            <i class="fa-solid fa-border-all"></i> <p>Dashboard</p>
          </div>
          <div className="link">
            {" "}
            <i class="fa-solid fa-book-open"></i> <p>Course Catalog</p>
          </div>
          <div className="link">
            {" "}
            <i class="fa-solid fa-bars-staggered"></i> <p>Resourse Hub</p>
          </div>
          <div className="link">
            {" "}
            <i class="fa-solid fa-arrow-up-from-bracket"></i>
            <p>Project Showcase</p>
          </div>
          <div className="link">
            {" "}
            <i class="fa-solid fa-arrow-right-to-bracket"></i> <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
