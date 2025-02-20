import React from "react";
import "./Project.css";
import { projects } from "./projects";
import { Typography } from "@mui/material";
function Project() {
  return (
    <div className="project">
      <div className="container">
        <Typography variant="h5" sx={{ color: "text.primary" }} style={{marginBottom:"2rem"}}>
          Explore Our Projects
        </Typography>

        <div className="row">
          {projects.map((project) => {
            return (
              <div className="col-md-6 col-lg-3 p-2" key={project.id}>
                <div className="event-box">
                  <div className="event-poster">
                    <img
                      src={project.im_url}
                      alt="poster"
                      className="img-fluid"
                      style={{
                        height: "200px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="event-info">
                    <h3>{project.title}</h3>
                  </div>
                  <div className="register-btn">
                    <button>View Project</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
