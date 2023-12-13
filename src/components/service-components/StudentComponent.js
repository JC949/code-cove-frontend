import React from 'react';
import getStudents from '../../services/StudentService';

// Component to receive a response for each student and display their usernames
class StudentComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            students:[]
        }
    }

    componentDidMount() {
        getStudents().then((response) => {
            this.setState({students: response.data})
        });
    }

    render () {
        return (
            <div>
                <h1 className="text-center">List of Students</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>Username</td>
                    </tr>
                </thead>

            <tbody>
                {
                    this.state.students.map(
                        student => 
                        <tr key ={student.id}>
                            <td>{student.username}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
    )};
}

export default StudentComponent;
