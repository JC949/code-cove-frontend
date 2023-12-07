// CreateTutorialPage.jsx
import React from 'react';
import NavBar from '../components/NavBar';
import CreateTutorialForm from '../components/CreateTutorialForm';
import { useNavigate } from 'react-router-dom';
import '../css/Pages.css';
import '../css/NavBar.css';

// CreateTutorialPage.jsx

const CreateTutorialPage = () => {
  const navigate = useNavigate();
  const handleTutorialSubmit = (tutorialData) => {
    console.log('Tutorial Data before navigating:', tutorialData);
    navigate('/showTutorialPage', { state: { tutorialData } });
  };

  return (
    <>
    <NavBar />
    <h1>Create Tutorial</h1>
    <div>
      <CreateTutorialForm onSubmit={handleTutorialSubmit} />
    </div>
    </>
  );
};

export default CreateTutorialPage;
