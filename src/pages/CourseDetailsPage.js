import React from 'react';
import { useParams, Link } from 'react-router-dom';
import courses from '../data/CoursesData';
import { useClerk, SignedOut } from '@clerk/clerk-react';
import '../css/Courses.css';

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === parseInt(courseId));
  const { user } = useClerk();
  const hasTutorial = true;

  return (
    <div className="course-container">
      <SignedOut>
        <p className="course-redirect">
          You must sign in to view this course's details.{' '}
          <Link className="course-redirect-link" to="/login">
            Sign In
          </Link>
        </p>
      </SignedOut>
      {user && (
        <>
          <h2 className="course-name">{course.name}</h2>
          <p className="course-desc">{course.description}</p>
          <p className="course-diff">Difficulty: {course.difficulty}</p>
          {hasTutorial ? (
            <button className="course-btn">
              <Link to={`/course/${course.id}`}>Begin tutorial</Link>
            </button>
          ) : (
            <p>No tutorial available for this course</p>
          )}
          <p className="returntocourses">
            <Link className="course-redirect-link" to="/courses">
              Return to Courses
            </Link>
          </p>
        </>
      )}
    </div>
  );
};

export default CourseDetailsPage;
