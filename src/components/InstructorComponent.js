import React from 'react';
import getInstructors from '../services/InstructorService';

// Component to receive a response for each Instructor and display their usernames
class InstructorComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Instructors:[]
        }
    }

    componentDidMount() {
        getInstructors().then((response) => {
            this.setState({Instructors: response.data})
        });
    }

    render () {
        return (
            <div>
                <h1 className="text-center">List of Instructors</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>Username</td>
                    </tr>
                </thead>

            <tbody>
                {
                    this.state.Instructors.map(
                        Instructor => 
                        <tr key ={Instructor.id}>
                            <td>{Instructor.username}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
    )};
}

export default InstructorComponent;
