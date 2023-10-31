import React from 'react';
import { useParams, Link } from 'react-router-dom';
import courses from '../data/CoursesData';
import { useClerk, SignedOut } from '@clerk/clerk-react';
import '../css/Courses.css';
import CommonLayout from '../components/CommonLayout';

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === parseInt(courseId));
  const { user } = useClerk();
  
  const authorized = user.authorized; // Store the user role (1 = student, 2 = instructor, 3 = admin)

  return (
    <>
      <CommonLayout />
      <div className="course-container">
        <SignedOut>
          <p className="course-redirect">
            Please sign in to view this course's details.{' '}
            <Link className="course-redirect-link" to="/login">
              Sign In
            </Link>
          </p>
        </SignedOut>
        {user && (
          <>
            <h2 className="course-details-name">{course.name}</h2>
            <p className="course-details-desc">{course.description}</p>
            <p className="course-details-diff">Difficulty: {course.difficulty}</p>
            {authorized === 2 ? ( // Check if user is an instructor (2 for instructor)
              <button className="course-tutorial-btn">
                <Link to={`/course/${course.id}`}>Create Tutorial</Link>
              </button>
            ) : (
              <button className="course-tutorial-btn">
                <a className="tutorial-link" href="https://www.w3schools.com/" target="_blank">
                  Begin Tutorial
                </a>
              </button>
            )}
            <p className="returntocourses">
              <Link className="course-redirect-link" to="/courses">
                Return to Courses
              </Link>
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default CourseDetailsPage;
