import axios from 'axios';

// Change to proper url when deployed to cloud
const STUDENTS_REST_API_URL = 'http://localhost:8080/api/users';

class StudentService {
    getStudents() {
        axios.get(STUDENTS_REST_API_URL);
    }
}

export default StudentService();