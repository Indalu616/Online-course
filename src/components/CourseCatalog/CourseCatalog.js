import React, { useEffect, useState } from "react";
import "./CourseCatalog.css";
import { catalogs } from "./Catalogs";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import TextField from "@mui/material/TextField";
import { createTheme } from "@mui/material";

const demoTheme = createTheme({
  palette: {
    mode: "light", // Change to "dark" dynamically when switching
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#000000", // Black text in light mode
      secondary: "#757575",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h2: {
          fontSize: "2rem",
          fontWeight: "bold",
          color: "text.primary", // Ensures it adapts
        },
      },
    },
  },
});


function CourseCatalog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCourse, setCurrentCourse] = useState([]);

  const [isEmpty, setIsEmpty] = useState(false);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  const itemsPerPage = 4;
  const totalPage = Math.ceil(catalogs.length / itemsPerPage);
  // !slice course catalogs functionality
  const sliceCatalogs = () => {
    setCurrentCourse(catalogs.slice(start, end));
  };

  // !next page

  const nextPage = () => {
    if (end < catalogs.length) {
      setEnd(end + itemsPerPage);
      setCurrentPage(currentPage + 1);
      setStart(start + itemsPerPage);
    }
  };
  // !previous page
  const prevPage = () => {
    if (start > 0) {
      setStart(start - itemsPerPage);
      setEnd(end - itemsPerPage);
      setCurrentPage(currentPage - 1);
    }
  };
  useEffect(() => {
    sliceCatalogs();
  }, [currentPage, isEmpty]);
  // !searching course functionality
  const searchCourse = (e) => {
    const value = e.target.value;
    if (value) {
      setCurrentCourse(
        catalogs.filter((c) => c.name.toLowerCase().match(value.toLowerCase()))
      );
    } else {
      setIsEmpty(!isEmpty);
    }
  };

  // !filter course based on categories

  const filterCourse = (e) => {
    const value = e.target.value;
    if (value == "all") {
      setIsEmpty(!isEmpty);
    } else {
      setCurrentCourse(
        catalogs.filter((c) =>
          c.category.toLowerCase().match(value.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="course-catalog">
      <div className="container">
        <Typography variant="h5" sx={{ color: "text.primary" }}>
          Available Courses
        </Typography>

        <p>Explore our free premium courses,boost your skills</p>
        <div className="search_course">
          <div className="row">
            <div className="col-md-4 mb-2">
              <FormControl fullWidth>
                <TextField
                  id="outlined-search"
                  label="Search course by name..."
                  type="search"
                  onChange={(e) => searchCourse(e)}
                />
              </FormControl>
            </div>

            <div className="col-md-4 mb-2">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Category"
                  onChange={filterCourse}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="programming">Programming</MenuItem>
                  <MenuItem value="Machine learning">Machine Learning</MenuItem>
                  <MenuItem value="ai">Artificial Intelligence</MenuItem>
                  <MenuItem value="data science">Data Science</MenuItem>
                  <MenuItem value="Data sructure">DSA</MenuItem>
                  <MenuItem value="Web development">Web Development</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="row p-2">
          {currentCourse.length !== 0 ? (
            currentCourse.map((course) => {
              return (
                <div className="col-lg-3 p-2 col-md-6" key={course.id}>
                  <div className="course-card">
                    <Card style={{ height: "350px" }}>
                      <CardMedia
                        sx={{ height: 140 }}
                        image={course.img_url}
                        title={course.name}
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          <div
                            className="course-info-box"
                            style={{ marginBottom: "0px" }}
                          >
                            <h3>{course.name}</h3>
                            <p
                              style={{ fontSize: "12px", marginBottom: "0px" }}
                            >
                              {Array(Math.floor(course.rate))
                                .fill("⭐")
                                .map((star, i) => (
                                  <span key={i}>{star}</span>
                                ))}
                              <span style={{ marginLeft: "10px" }}>
                                {course.reviews} reviews
                              </span>
                            </p>
                            <p>Designed by: Indalu Kelbesa</p>
                          </div>
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">
                          {" "}
                          <Link
                            to={`/Online-course/course-page/${course.id}`}
                            style={{
                              textDecoration: "none",
                              color: "rgb(144, 202, 249)",
                            }}
                          >
                            Start Learning
                          </Link>
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="search_not_found">Result Not Found</h2>
          )}
        </div>
        {currentCourse.length !== 0 ? (
          <div className="pagination">
            <button onClick={prevPage} disabled={start == 0}>
              <i class="fa-solid fa-chevron-left"></i>Previous
            </button>
            <p>
              Page {currentPage} of {totalPage}
            </p>
            <button onClick={nextPage} disabled={end >= catalogs.length}>
              Next<i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CourseCatalog;
