import React from 'react';
import { useParams } from 'react-router-dom';
import courses from '../data/CoursesData';

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === parseInt(courseId));

  if (!course) {
    return <div>Course not found.</div>;
  }

  return (
    <div>
      <h2>{course.name}</h2>
      <p>{course.description}</p>
      <p>Difficulty: {course.difficulty}</p>
    </div>
  );
};

export default CourseDetailsPage;
