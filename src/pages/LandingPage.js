import React, { useEffect, useState } from 'react';
import '../css/Pages.css';
import { SignIn, useClerk } from '@clerk/clerk-react';

// Landing Page 
function LandingPage() {
  const { user } = useClerk();
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  useEffect(() => {
    // Check if the user object from Clerk is available and not null
    if (user) {
      setIsUserSignedIn(true);
    } else {
      setIsUserSignedIn(false);
    }
  }, [user]);

  return (
    <>
      <h1 className="title">Welcome to Code Cove</h1>
      {isUserSignedIn ? (
        // User is already signed in, you can display a different message or redirect here
        <p>You are already signed in.</p>
      ) : (
        // User is not signed in, display the SignIn component
        <div className='signinform'>
          <SignIn />
        </div>
      )}
      <div className='homeimg'>
        <img src="/img/backgroundimg.png" alt="background"/>
      </div>
    </>
  );
}

export default LandingPage;
