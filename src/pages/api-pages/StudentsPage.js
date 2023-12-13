import React from 'react';
import StudentComponent from '../components/StudentComponent';
import '../../css/Pages.css';
import CommonLayout from '../components/CommonLayout';
import { ClerkProvider } from '@clerk/clerk-react';

// Displays list of students connected to backend database
function StudentsPage() {
  return (
    <>
      <CommonLayout />
        <ClerkProvider>
            <StudentComponent />
        </ClerkProvider>
    </>
  );
}

export default StudentsPage;
