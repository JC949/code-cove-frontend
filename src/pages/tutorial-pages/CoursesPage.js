import React, { useState } from "react";
import { Link } from "react-router-dom";
import Courses from "../../data/CoursesData";
import '../../css/Courses.css';
import NavBar from "../../components/nav-components/NavBar";

// Filter courses by comparing course name to drop down menu options
const CoursesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filterCourses = (filter) => {
    if (filter === "all") {
      return Courses; // Display all courses
    }
    return Courses.filter((course) => course.category === filter);
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const filteredCourses = filterCourses(selectedFilter);

  // Create a set to store unique course IDs
  const uniqueCourseIds = new Set();
  // Filter out duplicate courses by checking the unique ID
  const duplicatedCourses = filteredCourses.filter((course) => {
    if (!uniqueCourseIds.has(course.id)) {
      uniqueCourseIds.add(course.id);
      return true;
    }
    return false;
  });

  return (
    <>
      <NavBar />
      <div className="courses-buttons-container">
        <Link className="courses-button" to="/createTutorialPage">
          Create Tutorial
        </Link>
        <div className="course-dropdown-container">
          <select onChange={handleFilterChange} className="course-dropdown">
            <option value="all">All Courses</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="database">Database</option>
            <option value="framework">Framework</option>
            <option value="other">Other</option>
          </select>
        </div>
        <Link className="courses-button" to="/completedtutorials">
          My Completed Tutorials
        </Link>
      </div>

      <div className="courses-container">
        {duplicatedCourses.map((course) => (
          <Link to={`/courses/${course.id}`} className="course-card" key={course.id}>
            <h2 className="course-name">{course.name}</h2>
            <p className="course-desc">{course.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CoursesPage;