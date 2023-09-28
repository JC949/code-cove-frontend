import React from "react";
import { Link } from "react-router-dom";
import Courses from "../data/CoursesData";
import Footer from "../components/Copyright";
import '../css/Courses.css';

const CoursesPage = () => {
  return (
    <>
      <div className="courses-container">
        {Courses.map((course) => (
          <Link to={`/courses/${course.id}`} className="course-card" key={course.id}>
            <h2 className="course-name">{course.name}</h2>
            <p className="course-desc">{course.description}</p>
            </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default CoursesPage;
