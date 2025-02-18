import React, { useEffect, useState } from "react";
import "./ResourceHub.css";
import { learningResources } from "./resources";
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
        <h2>Resource Hub</h2>
        <p>Access endless online learning materials</p>
        <div className="row">
          <div className="col-md-4">
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="course"
                placeholder="Search course..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <select
              class="form-select"
              aria-label="Disabled select example"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all" selected>All</option>
              <option value="programming">Programming</option>
              <option value="machine learning">Machine Learning</option>
              <option value="data science">Data Science</option>
              <option value="ai">Artificial Intelligence</option>
            </select>
          </div>

          <div className="col-md-4">
            <div className="item-per-page d-flex align-items-center gap-2">
              <div className="col-md-4">
                <select
                  class="form-select"
                  aria-label="select example"
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
                >
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                </select>
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
