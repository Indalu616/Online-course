import React, { useEffect, useState } from "react";
import "./CourseCatalog.css";
import { catalogs } from "./Catalogs";
import { Link } from "react-router-dom";
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
        <h2>Available Courses</h2>
        <p>Explore our free premium courses,boost your skills</p>
        <div className="search_course">
          <div className="row">
            <div className="col-md-4">
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="course"
                  placeholder="Search course by name..."
                  onChange={(e) => searchCourse(e)}
                />
              </div>
            </div>

            <div className="col-md-4">
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={(e) => filterCourse(e)}
              >
                <option selected value="all">
                  All
                </option>
                <option value="programming">Programming</option>
                <option value="Machine learning">Machine Learning</option>
                <option value="ai">Artificial Intelligence</option>
                <option value="data science">Data Science</option>
                <option value="Data sructure">DSA</option>
                <option value="Web development">Web Development</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row p-2">
          {currentCourse.length !== 0 ? (
            currentCourse.map((course) => {
              return (
                <div className="col-lg-3 p-2 col-md-6" key={course.id}>
                  <div className="course-card">
                    <div className="img-box">
                      <img
                        src={course.img_url}
                        alt={course.name}
                        className="img-fluid"
                        style={{
                          height: "200px",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="course-info-box">
                      <h3>{course.name}</h3>
                      <p style={{ fontSize: "12px" }}>
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
                      <button>
                        <Link
                          to={`/Online-course/course-page/${course.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          Start Learning
                        </Link>
                      </button>
                    </div>
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
