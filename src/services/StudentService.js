import axios from 'axios';

// Change to proper url when deployed to cloud
const STUDENTS_REST_API_URL = 'http://localhost:8080/api/students';

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
