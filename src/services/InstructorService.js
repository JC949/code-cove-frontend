import axios from 'axios';

// Change to proper url when deployed to cloud
const INSTRUCTORS_REST_API_URL = 'http://localhost:8080/api/instructors';

export const getInstructors = async () => {
    try {
      const response = await axios.get(`${INSTRUCTORS_REST_API_URL}/instructors`);
  
      // Return the response data
      return response.data;
    } catch (error) {
      // Handle errors and return an error object or re-throw the error
      throw error;
    }
  }
