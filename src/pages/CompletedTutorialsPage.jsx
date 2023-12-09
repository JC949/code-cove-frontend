// CompletedTutorialsPage.js
import React from 'react';
import NavBar from '../components/NavBar';
import '../css/Pages.css'; // Import Pages.css for styling

const CompletedTutorialsPage = () => {
  // Hardcoded completed tutorial data
  const completedTutorials = [
    {
      id: 1,
      name: 'Inheritance with Java',
      description: 'Learn the basics of the Object Oriented Programming Pillar: Inheritance with Java.',
      difficulty: 2,
      totalQuestions: 2,
      correctQuestions: 2,
    },
    // Add more completed tutorials as needed
  ];

  return (
    <>
    <NavBar />
    <div className="page-container">
      <h1 className="page-title">My Completed Tutorials</h1>
      <div className="completed-tutorials-container">
        {completedTutorials.map((tutorial) => (
          <div key={tutorial.id} className="completed-tutorial-card">
            <h2 className="tutorial-name">{tutorial.name}</h2>
            <p className="tutorial-description">{tutorial.description}</p>
            <p className="tutorial-detail">Difficulty: {tutorial.difficulty}</p>
            <p className="tutorial-detail">Total Questions: {tutorial.totalQuestions}</p>
            <p className="tutorial-detail">Correct Questions: {tutorial.correctQuestions}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default CompletedTutorialsPage;
