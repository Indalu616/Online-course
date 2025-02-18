import React from "react";
import "./Courses.css";
import { courses } from "./courseList";
function Courses() {
  return (
    <div className="home-courses">
      <div className="container">
        <h2 className="text-center">Courses</h2>
        <p className="text-center">
          Explore courses curated by our partner companies to enhance your
          skills and knowledge.
        </p>
        <div className="row p-4">
          {courses.map((course) => {
            return (
              <div className="col-lg-4 p-2 col-md-6" key={course.id}>
                <div className="course-card">
                  <div className="img-box">
                    <img
                      src={course.img_url}
                      alt={course.name}
                      className="img-fluid"
                    />
                  </div>
                  <div className="course-info-box">
                    <h3>{course.name}</h3>
                    <p style={{ fontSize: "12px" }}>
                      {Array(course.rate)
                        .fill("⭐")
                        .map((star, i) => (
                          <span key={i}>{star}</span>
                        ))}
                      <span style={{ marginLeft: "10px" }}>
                        {course.reviews} reviews
                      </span>
                    </p>
                    <p>Designed by: {course.instructor}</p>
                    <button>Start Learning</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="discover-more">
          <button className="text-center">
            Discover All Courses{" "}
            <span>
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Courses;
