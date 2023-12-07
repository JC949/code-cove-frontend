// TutorialContext.js
import { createContext, useContext, useReducer } from 'react';
import '../css/Pages.css';
import '../css/NavBar.css';

const TutorialContext = createContext();

const tutorialReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TUTORIAL':
      return [...state, action.payload];
    // You can add more cases for updating or deleting tutorials if needed
    default:
      return state;
  }
};

const TutorialProvider = ({ children }) => {
  const [tutorials, dispatch] = useReducer(tutorialReducer, []);

  const addTutorial = (tutorial) => {
    dispatch({ type: 'ADD_TUTORIAL', payload: tutorial });
  };

  return (
    <TutorialContext.Provider value={{ tutorials, addTutorial }}>
      {children}
    </TutorialContext.Provider>
  );
};

const useTutorial = () => {
  const context = useContext(TutorialContext);
  if (!context) {
    throw new Error('useTutorial must be used within a TutorialProvider');
  }
  return context;
};

export { TutorialProvider, useTutorial };
