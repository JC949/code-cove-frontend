import React from "react";
import { Link } from "react-router-dom";
import Courses from "../data/CoursesData";
import Footer from "../components/Copyright";

const CoursesPage = () => {

    return (
      <>
        <div>
            <h1>Explore Courses</h1>
            <ul>
              {Courses.map((course) => (
                <li key={course.id}>
            <Link to={`/courses/${course.id}`}>{course.name}</Link>
                </li>
              ))}
            </ul>
        </div>
            <Footer />
      </>
    )
}

export default CoursesPage;