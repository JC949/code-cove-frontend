import axios from 'axios';

// Updated URL since deployed to Heroku
const TUTORIALS_REST_API_URL = 'https://code-cove-frontend-858cb26df428.herokuapp.com/api/tutorials';

// GET Request to retrieve all tutorials
export const getTutorials = async () => {
  try {
    const response = await axios.get(`${TUTORIALS_REST_API_URL}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// GET request to retrieve tutorial by UUID
export const getTutorialById = async (tutorialId) => {
  try {
    const response = await axios.get(`${TUTORIALS_REST_API_URL}/${tutorialId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// POST method to create a new tutorial
export const createTutorial = async (tutorialData) => {
  try {
    const response = await axios.post(`${TUTORIALS_REST_API_URL}`, tutorialData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// PUT request to update tutorial by UUID and new form data
export const updateTutorial = async (tutorialId, tutorialData) => {
  try {
    const response = await axios.put(`${TUTORIALS_REST_API_URL}/${tutorialId}`, tutorialData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// DELETE method to delete tutorial by UUID
export const deleteTutorial = async (tutorialId) => {
  try {
    const response = await axios.delete(`${TUTORIALS_REST_API_URL}/${tutorialId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
