import React from 'react';
import InstructorComponent from '../components/InstructorComponent';
import '../../css/Pages.css';
import CommonLayout from '../components/CommonLayout';
import { ClerkProvider } from '@clerk/clerk-react';

// Displays list of instructors connected to backend database
function InstructorsPage() {
  return (
    <>
      <CommonLayout />
        <ClerkProvider>
            <InstructorComponent />
        </ClerkProvider>
    </>
  );
}

export default InstructorsPage;
