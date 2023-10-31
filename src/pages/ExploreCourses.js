import React from 'react';
import { Link } from 'react-router-dom';
import courses from './data/Courses';
import NavBar from '../components/NavBar';

/* Allow users that are not signed in to view the courses 
but not individual course details. */
const ExploreCourses = () => {
  return (
    <>
    <NavBar />

    <div>
      <h2>Explore Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`}>{course.name}</Link>
          </li>
        ))}
      </ul>
    </div>
    
    </>
  );
};

export default ExploreCourses;
