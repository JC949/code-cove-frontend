import React from 'react';
import { useParams, Link } from 'react-router-dom';
import courses from "../data/CoursesData";
import { useClerk } from '@clerk/clerk-react';
import { SignedIn } from '@clerk/clerk-react'; // Import ClerkProvider and SignedIn
import '../css/Courses.css';


const CourseDetailsPage = () => {

  const { courseId } = useParams();
  const course = courses.find((c) => c.id === parseInt(courseId));
  const { user } = useClerk();

  // Check if a tutorial is available for this course (you'll need to implement this logic)
  const hasTutorial = true; // Replace with your actual logic
  // const isInstructor = user?.roles.includes('Instructor'); // Replace 'Instructor' with your actual instructor role name
  
  return (
    <div className="course-container">
        <SignedIn>
          {user ? (
            <>
              <h2 className="course-name">{course.name}</h2>
              <p className="course-desc">{course.description}</p>
              <p className="course-diff">Difficulty: {course.difficulty}</p>
              {hasTutorial ? (
                 
                <button className="course-btn">
                  <Link to={`/course/${course.id}`}>Begin tutorial</Link>
                </button>
                )
                : (
                  !hasTutorial && (
                    <button className="course-btn">
                      <Link to={`/create-tutorial/${course.id}`}>Create Tutorial</Link>
                    </button>
                  )
                )
               (
                <p>No tutorial available for this course</p>
              )}
              <p className='returntocourses'>
                <Link className="course-redirect-link" to="/courses">Return to Courses</Link>
              </p>
            </>
          ) : (
            <p className='course-redirect'>Please <Link className="course-redirect-link" to="/login">Sign In</Link> to view course details.</p>
          )}
        </SignedIn>
    </div>
  );
}

export default CourseDetailsPage;
