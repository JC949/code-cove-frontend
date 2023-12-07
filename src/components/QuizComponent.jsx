// QuizComponent.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/Pages.css';
import '../css/NavBar.css';

const QuizComponent = ({ questions, onSubmit }) => {
  const [userAnswers, setUserAnswers] = useState(new Array(questions.length).fill(-1));

  const handleRadioChange = (questionIndex, optionIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const calculateScore = () => {
    const correctCount = userAnswers.reduce((count, userAnswer, index) => {
      const correctAnswer = questions[index].correctAnswer;
      return userAnswer === correctAnswer ? count + 1 : count;
    }, 0);

    return (correctCount / questions.length) * 100;
  };

  const showAlert = (passed, score) => {
    const correctCount = userAnswers.reduce((count, userAnswer, index) => {
      const correctAnswer = questions[index].correctAnswer;
      const isCorrect = userAnswer === correctAnswer;

      if (isCorrect) {
        const questionText = questions[index].text;
        const userAnswerText = String.fromCharCode(65 + userAnswer);
        const correctAnswerText = String.fromCharCode(65 + correctAnswer);
  
        // Log the details for review
        console.log(`Question: ${questionText}`);
        console.log(`Your answer: ${userAnswerText}`);
        console.log(`Correct answer: ${correctAnswerText}`);
      }
  
      return isCorrect ? count + 1 : count;
    }, 0);

    if (passed) {
      toast.success(`Congratulations! You passed with a score of ${score.toFixed(2)}% (${correctCount} out of ${questions.length}).`, {
        position: "top-center",
        autoClose: 5000, // 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        fontSize: '16px' 
      });
    } else {
      toast.error(`You failed the quiz with a score of ${score.toFixed(2)}% (${correctCount} out of ${questions.length}). Please try again to receive your completion certificate.`, {
        position: "top-center",
        autoClose: 5000, // 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        fontSize: '16px' 
      });
    }
  };

  const handleQuizSubmit = (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
  
    const score = calculateScore();
    const passed = score >= 70;
    showAlert(passed, score);
  
    // You can also pass the score to the parent component if needed
    onSubmit({ score, userAnswers, correctAnswers: questions.map((q) => q.correctAnswer) });
  };

  return (
    <form onSubmit={handleQuizSubmit}>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex} className="question-container">
          <h3>{`Question ${questionIndex + 1}: ${question.text}`}</h3>
          <ul>
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <input
                  type="radio"
                  id={`q${questionIndex}o${optionIndex}`}
                  name={`q${questionIndex}`}
                  value={optionIndex}
                  checked={userAnswers[questionIndex] === optionIndex}
                  onChange={() => handleRadioChange(questionIndex, optionIndex)}
                />
                <label htmlFor={`q${questionIndex}o${optionIndex}`}>
                  {`${String.fromCharCode(65 + optionIndex)}: ${option}`}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button type="submit" disabled={userAnswers.includes(-1)}>
        Submit Quiz
      </button>
    </form>
  );
};

export default QuizComponent;
