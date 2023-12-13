import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../../components/nav-components/NavBar';
import '../../css/Pages.css';
import QuizComponent from '../../components/tutorial-components/QuizComponent';

const ShowTutorialPage = () => {
  const { state } = useLocation();
  const tutorialData = state && state.tutorialData;
  const navigate = useNavigate();

  const [showResults, setShowResults] = useState(false);
  const [quizResults, setQuizResults] = useState(null);
  const [quizPassed, setQuizPassed] = useState(false);
  const [completedTutorials, setCompletedTutorials] = useState([]);

  const handleQuizSubmit = (result) => {
    setQuizResults(result);
    setQuizPassed(result.score >= 70);
    setShowResults(true);

    // If the user passed, add the completed tutorial to the list
    if (result.score >= 70) {
      setCompletedTutorials([...completedTutorials, tutorialData.name]);
    }
  };

  const handleButtonClick = () => {
    // If the user passed, navigate to the completed tutorials page
    if (quizPassed) {
      // You can replace this with your navigation logic to completed tutorials page
      navigate('/completedTutorials');
    } else {
      // If the user failed, refresh the page to retake the quiz
      window.location.reload();
    }
  };

  return (
    <>
      <NavBar />
      <div className="tutorialcontainer">
        {tutorialData ? (
          <>
            <h2 className="tutorialtitle">{tutorialData.name} Tutorial </h2>
            <iframe
              className="tutorialvideo"
              title="Tutorial Video"
              width="560"
              height="315"
              src={tutorialData.youtubeLink}
              allowFullScreen
            ></iframe>
            {showResults ? (
              <div className="tutorialquiz">
                <h3 className="tutorialquiztitle">Quiz Results</h3>
                {quizResults && (
                  <div className="tutorialquizanswerkey">
                    <p>{`Score: ${quizResults.score.toFixed(2)}%`}</p>
                    <ul>
                      {quizResults.userAnswers.map((userAnswer, index) => (
                        <li key={index}>
                          {`Question ${index + 1}: ${tutorialData.questions[index].text}`}
                          <br />
                          {`Your answer - ${String.fromCharCode(65 + userAnswer)}, Correct answer - ${String.fromCharCode(65 + quizResults.correctAnswers[index])}`}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <button onClick={handleButtonClick}>
                  {quizPassed ? "View Completed Tutorials" : "Retake Quiz"}
                </button>
              </div>
            ) : (
              <QuizComponent questions={tutorialData.questions} onSubmit={handleQuizSubmit} className="tutorialquizbutton" />
            )}
          </>
        ) : (
          <p>No tutorial data available.</p>
        )}
      </div>
    </>
  );
};

export default ShowTutorialPage;
