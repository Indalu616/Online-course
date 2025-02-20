import React, { useState } from "react";
import "./CoursePage.css";
// import Accordion from "react-bootstrap/Accordion";

import CourseVideo from "../../components/CourseVideo/CourseVideo";
import { Link, useParams } from "react-router-dom";
import AboutCourse from "../../components/AboutCourse/AboutCourse";
import RatingAndReview from "../../components/RatingAndReviews/RatingAndReview";
import { catalogs } from "../../components/CourseCatalog/Catalogs";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import { Button } from "@mui/material";

function CoursePage() {
  const { id } = useParams();
  const course = catalogs.filter((c) => c.id === parseInt(id));

  const [active, setActive] = useState(1);
  const [currentVideo, setCurrentVideo] = useState();
  return (
    <div className="course-page-container">
      <div
        className={
          active == 2
            ? "course-page show-contents"
            : "course-page hide-contents"
        }
      >
        <div className="course-page-side-bar">
          <div className="course-page-side-bar-header">
            <h3>Course Contents</h3>
          </div>
          <div className="course-page-contents">
            <div className="course-content">
              {course[0].contents.map((sec) => {
                return (
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography component="span">
                        Section {sec.section}: {sec.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {sec.subTitles.map((subT, i) => {
                        return (
                          <div key={i}>
                            <Button
                              onClick={() => setCurrentVideo(subT.videoId)}
                              style={{textAlign:"left"}}
                            >
                              <span style={{ marginRight: "10px" }}>
                                {i + 1}.
                              </span>
                            
                                {/* <OndemandVideoIcon fontSize="small"/> */}
                             
                              {subT.name}
                            </Button>
                          </div>
                        );
                      })}
                    </AccordionDetails>
                  </Accordion>
                );
              })}

  
            </div>
          </div>
        </div>
      </div>

      {/* !where course videos are played */}

      <div className="course-video-container">
        <div className="course-video-header shadow">
          <div className="row">
            <div className="col-md-2">
              <Link
                to="/Online-course/dashboard"
                style={{ textDecoration: "none" }}
              >
                {" "}
                <button>
                  <span>
                    <i className="fa-solid fa-arrow-left"></i>
                  </span>
                  Back{" "}
                </button>
              </Link>
            </div>
            <div className="col-md-10">
              <h3>{course[0].name}</h3>
            </div>
          </div>
        </div>
        <div className="video-box">
          <CourseVideo videoId={currentVideo} />
        </div>
        <div className="course-related-info">
          <div className="row">
            <div className="col-md-4">
              <p
                className={active == 1 && "active"}
                onClick={() => setActive(1)}
              >
                About Course
              </p>
            </div>
            <div className="col-md-4 content-button">
              <p
                className={active == 2 && "active"}
                onClick={() => setActive(2)}
              >
                Contents
              </p>
            </div>
            <div className="col-md-4">
              <p
                className={active == 3 && "active"}
                onClick={() => setActive(3)}
              >
                Ratings and Reviews
              </p>
            </div>
          </div>
        </div>
        <div className="course-info-details container">
          {active == 1 && <AboutCourse />}
          {active === 3 && <RatingAndReview />}
        </div>
      </div>
    </div>
  );
}

export default CoursePage;
