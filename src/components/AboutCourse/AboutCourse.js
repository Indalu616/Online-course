import React from "react";
import "./AboutCourse.css";
function AboutCourse() {
  return (
    <div className="about-course">
      <div className="container">
        <h3>About Course</h3>
        <p>
          Dive into the world of programming with our fun and engaging Python
          course designed for beginners. No prior experience needed! Learn the
          basics of Python, control flow, data structures, and work with popular
          libraries through interactive exercises and hands-on projects. Perfect
          for anyone looking to kickstart their coding journey.
        </p>
        <h3>Requirements</h3>
        <ul>
          <li> No prior programming experience required</li>
          <li>A computer with internet access</li>
          <li>Willingness to learn and have fun</li>
        </ul>

        <h3>Who should take this course?</h3>

        <ul>
          <li> Absolute beginners interested in coding</li>
          <li>Students looking to enhance their tech skills</li>
          <li>Professionals wanting to automate tasks</li>
          <li>Hobbyists and enthusiasts eager to learn React</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutCourse;
