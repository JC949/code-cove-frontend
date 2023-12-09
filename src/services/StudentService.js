import axios from 'axios';

const STUDENTS_REST_API_URL = 'https://code-cove-frontend-858cb26df428.herokuapp.com/api/students';

export const getstudents = async () => {
    try {
      const response = await axios.get(`${STUDENTS_REST_API_URL}/students`);
  
      // Return the response data
      return response.data;
    } catch (error) {
      // Handle errors and return an error object or re-throw the error
      throw error;
    }
  }

  
