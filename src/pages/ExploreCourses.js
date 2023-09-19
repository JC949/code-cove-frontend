import React from 'react';
import { Link } from 'react-router-dom';
import courses from './data/Courses';

const ExploreCourses = () => {
  return (
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
  );
};

export default ExploreCourses;
