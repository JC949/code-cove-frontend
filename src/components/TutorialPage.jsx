// TutorialPage.jsx
import React, { useState } from 'react';
import '../css/Pages.css';
import '../css/Courses.css';
import QuizComponent from '../components/QuizComponent';

const TutorialPage = ({ tutorialData }) => {
  const [showPopup, setShowPopup] = useState(false);

  if (!tutorialData) {
    // Handle the case when tutorialData is undefined
    return <div className="tutorial-unavailable">Tutorial unavailable.</div>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle quiz submission logic
    setShowPopup('Tutorial Created');
    setTimeout(() => {
      setShowPopup(null);
    }, 3000);
  };

  return (
    <div className="tutorial-container">
      {/* Tutorial Title */}
      <h1 className="tutorial-title">{`${tutorialData.name} Tutorial`}</h1>

      {/* Video iframe */}
      <div className="video-container">
        <iframe width="800" height="450" src={tutorialData.youtubeLink} title="Tutorial Video" allowFullScreen></iframe>
      </div>

      {/* Questions form */}
      <QuizComponent questions={tutorialData.questions} onSubmit={handleSubmit} />

      {/* Popup message */}
      {showPopup && <div className="popup">{showPopup}</div>}
    </div>
  );
};

export default TutorialPage;
