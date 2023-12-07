// CourseDetailsPage.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useClerk, SignedOut } from '@clerk/clerk-react';
import courses from '../data/CoursesData';
import '../css/Pages.css';
import '../css/NavBar.css';
import CreateTutorialForm from '../components/CreateTutorialForm';
import NavBar from '../components/NavBar';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTutorial } from '../components/TutorialContext'; // Import useTutorial hook


const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === parseInt(courseId));
  const { user } = useClerk();
  const { tutorials, addTutorial } = useTutorial();
  const [showCreateTutorialForm, setShowCreateTutorialForm] = useState(false);

  const userRole = user ? user.role : null;

  const handleCreateTutorialClick = () => {
    setShowCreateTutorialForm(true);
  };

  const handleBeginTutorialClick = () => {
    const tutorialId = uuidv4();
    const selectedTutorial = tutorials.find((tutorial) => tutorial.id === tutorialId);

    if (selectedTutorial) {
      toast.success('Redirecting to tutorial...', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Redirect to the tutorial page with its unique ID
      // For now, let's just log it
      console.log(`Redirecting to tutorial: ${tutorialId}`);
    } else {
      toast.error('Tutorial not created yet.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleTutorialSubmit = (tutorialData) => {
    const tutorialId = uuidv4();
    const tutorialWithId = { ...tutorialData, id: tutorialId };
  
    // Add the tutorial to the global state
    addTutorial(tutorialWithId);
  
    // Retrieve existing completed tutorials from localStorage
    const existingCompletedTutorials = JSON.parse(localStorage.getItem('completedTutorials')) || [];
  
    // Update completed tutorials in localStorage
    const updatedCompletedTutorials = [...existingCompletedTutorials, tutorialWithId];
    localStorage.setItem('completedTutorials', JSON.stringify(updatedCompletedTutorials));
  
    setShowCreateTutorialForm(false);
  
    toast.success('Tutorial created successfully!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  

  return (
    <>
      <NavBar />
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
            {userRole === 'Instructor' ? (
              <>
                <button className="course-tutorial-btn" onClick={handleCreateTutorialClick}>
                  Create Tutorial
                </button>
                {showCreateTutorialForm && <CreateTutorialForm onSubmit={handleTutorialSubmit} />}
              </>
            ) : (
              <button className="course-tutorial-btn" onClick={handleBeginTutorialClick}>
                Begin Tutorial
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
      <ToastContainer />
    </>
  );
};

export default CourseDetailsPage;
