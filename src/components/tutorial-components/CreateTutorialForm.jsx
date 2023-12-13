import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Import uuid
import '../../css/Pages.css';

// CreateTutorialForm component
const CreateTutorialForm = ({ onSubmit }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const [tutorialData, setTutorialData] = useState({
    id: uuidv4(), // Generate a unique ID
    name: '',
    description: '',
    difficulty: 1,
    youtubeLink: '',
    questions: [
      { text: '', options: ['', '', '', ''], correctAnswer: 0 },
    ],
  });

  const [errors, setErrors] = useState({
    name: '',
    description: '',
    difficulty: '',
    questions: Array.from({ length: tutorialData.questions.length }, () => ({
      text: '',
      options: Array(4).fill(''),
    })),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTutorialData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleQuestionChange = (index, e) => {
    const { value } = e.target;
    setTutorialData((prevData) => {
      const newQuestions = [...prevData.questions];
      newQuestions[index].text = value;
      return { ...prevData, questions: newQuestions };
    });
  };

  const handleOptionChange = (questionIndex, optionIndex, e) => {
    const { value } = e.target;
    setTutorialData((prevData) => {
      const newQuestions = [...prevData.questions];
      newQuestions[questionIndex].options[optionIndex] = value;

      // Convert options to strings here
      newQuestions[questionIndex].options = newQuestions[questionIndex].options.map(String);

      return { ...prevData, questions: newQuestions };
    });
  };

  const handleCorrectAnswerChange = (questionIndex, e) => {
    const { value } = e.target;
    setTutorialData((prevData) => {
      const newQuestions = [...prevData.questions];
      newQuestions[questionIndex].correctAnswer = parseInt(value, 10);
      return { ...prevData, questions: newQuestions };
    });
  };

  const handleAddQuestion = () => {
    setTutorialData((prevData) => ({
      ...prevData,
      questions: [
        ...prevData.questions,
        { text: '', options: ['', '', '', ''], correctAnswer: 0 },
      ],
    }));
  };

  const handleSubmit = (event) => {
    console.log("Tutorial create button clicked");
    event.preventDefault();
    if (validateForm()) {
      onSubmit(tutorialData);
      console.log("Navigating to showTutorialPage");
      navigate('/showTutorialPage');
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      description: '',
      difficulty: '',
      questions: Array.from({ length: tutorialData.questions.length }, () => ({
        text: '',
        options: Array(4).fill(''),
      })),
    };

    // ... validation logic ...

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((error) => {
      if (Array.isArray(error)) {
        return error.every((item) => !item.text && item.options.every((opt) => !opt));
      }
      return !error;
    });

    console.log('Form Validation Result:', isValid);
    console.log('Final Form Validation Result:', isValid);
    console.log('Form Validation Errors:', newErrors);
    return isValid;
  };

  return (
    <form className="create-tutorial-form" onSubmit={handleSubmit}>
      <label className="formlabel">
        Tutorial Name:
        <input
          type="text"
          name="name"
          value={tutorialData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </label>
      <label className="formlabel">
        Description:
        <input
          name="description"
          value={tutorialData.description}
          onChange={handleChange}
        />
        {errors.description && <span className="error">{errors.description}</span>}
      </label>
      <label className="formlabel">
        Difficulty (1-5):
        <input
          type="number"
          name="difficulty"
          value={tutorialData.difficulty}
          onChange={handleChange}
        />
        {errors.difficulty && <span className="error">{errors.difficulty}</span>}
      </label>
      <label className="formlabel">
        Video URL:
        <input
          type="text"
          name="youtubeLink"
          value={tutorialData.youtubeLink}
          onChange={handleChange}
        />
      </label>

      {/* Map through questions and render input fields for each */}
      {tutorialData.questions.map((question, questionIndex) => (
        <div key={questionIndex} className="question-container">
          <label className="formlabel">
            Question {questionIndex + 1}:
            <input
              type="text"
              name="text"
              value={question.text}
              onChange={(e) => handleQuestionChange(questionIndex, e)}
            />
            {errors.questions[questionIndex] && <span className="error">{errors.questions[questionIndex].text}</span>}
          </label>
          {/* Map through options and render input fields for each */}
          <div className="options-container">
            {question.options.map((option, optionIndex) => (
              <label key={optionIndex} className="option-label">
                Option {String.fromCharCode(65 + optionIndex)}:
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(questionIndex, optionIndex, e)}
                  style={{ width: '540px' }}
                />
                {errors.questions[questionIndex] && <span className="error">{errors.questions[questionIndex].options[optionIndex]}</span>}
              </label>
            ))}
          </div>
          <label>
            Correct Answer:
            <select
              value={question.correctAnswer}
              onChange={(e) => handleCorrectAnswerChange(questionIndex, e)}
            >
              {question.options.map((_, optionIndex) => (
                <option key={optionIndex} value={optionIndex}>
                  {String.fromCharCode(65 + optionIndex)}
                </option>
              ))}
            </select>
          </label>
        </div>
      ))}

      <button type="button" onClick={handleAddQuestion}>
        Add Question
      </button>
      <button type="submit">Create Tutorial</button>
    </form>
  );
};

export default CreateTutorialForm;
