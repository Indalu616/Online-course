import React, { useEffect, useState } from "react";
import "./ResourceHub.css";
import { learningResources } from "./resources";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
function ResourcesHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCourses, setFilteredCourses] = useState([]);

  // !useEffect

  useEffect(() => {
    let filtered = learningResources;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (course) => course.category === selectedCategory
      );
    }

    // Search filter
    filtered = filtered.filter((course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredCourses(filtered);
    setCurrentPage(1); // Reset to first page on filter change
  }, [searchQuery, selectedCategory]);

  //! Pagination logic
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const displayedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // !everything above is new

  return (
    <div className="resource-hub">
      <div className="container">
        <Typography variant="h5" sx={{color:"text.primary"}}>
          Resource Hub
        </Typography>

        <p>Access endless online learning materials</p>
        <div className="row">
          <div className="col-md-4 mb-2">
            <FormControl fullWidth>
              <TextField
                id="outlined-search"
                label="Search course..."
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
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

          <div className="col-md-4 mb-2">
            <div className="item-per-page d-flex align-items-center gap-2">
              <div className="col-md-4">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    per page
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="per page"
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
                  >
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="8">8</MenuItem>
                    <MenuItem value="10">10</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <p style={{ marginBottom: "0" }}>items per page</p>
            </div>
          </div>
        </div>

        <div className="row">
          {displayedCourses.map((res) => {
            return (
              <div className="col-lg-3 col-md-4">
                <div className="resource-box">
                  <p>{res.icon}</p>
                  <h3>{res.name}</h3>
                  <div className="resourse-access-btn">
                    <button>
                      <a
                        href={res.access_link}
                        style={{ textDecoration: "none" }}
                      >
                        See more
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="page-number">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            <i class="fa-solid fa-chevron-left"></i>Previous
          </button>
          <p>
            Page {currentPage} of {totalPages}
          </p>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResourcesHub;
