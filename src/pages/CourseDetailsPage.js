import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useClerk } from '@clerk/clerk-react';
import Courses from "../data/CoursesData";
import '../css/Courses.css';

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const course = Courses.find((c) => c.id === parseInt(courseId));
  const { user } = useClerk(); 

  if (!course) {
    return <div>Course not found.</div>;
  }
  
  return (
    user ? (
      <div className="course-container">
        <h2 className="course-name">{course.name}</h2>
        <p className="course-desc">{course.description}</p>
        <p className="course-diff">Difficulty: {course.difficulty}</p>
        <button className="course-btn">
        <Link to={`/course/${course.id}`}></Link>
          Begin tutorial</button>
      </div>
    ) : (
      <>
        <p className='course-redirect'>Please <Link className="course-redirect-link" to="/login">Sign In</Link> to view this course.</p>
      </>
    )
  );
}

export default CourseDetailsPage;
