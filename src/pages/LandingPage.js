import React, { useEffect, useState } from 'react';
import '../css/Pages.css';
import { SignIn, useClerk } from '@clerk/clerk-react';
import Copyright from '../functions/Copyright';

const imageUrls = [
  '/img/homeimg1.jpg',
  '/img/homeimg2.jpg',
  '/img/homeimg3.jpg',
];

function LandingPage() {
  const { user } = useClerk();
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Check if the user object from Clerk is available and not null
    if (user) {
      setIsUserSignedIn(true);
    } else {
      setIsUserSignedIn(false);
    }

    // Use a timer to switch to the next image every 5 seconds (adjust as needed)
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000 milliseconds (5 seconds)

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [user]);


// Scroll to Bottom of Page
const scrollToBottom = () => {
  const signInForm = document.getElementById("returnlink");
  if (signInForm) {
    signInForm.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  } else {
    // Handle the case where the element doesn't exist on the current page
    console.error("returnlink form element not found.");
  }
};

  return (
    <>
    <div className="title-container">
      
      <h1 className="title">Learn to code. </h1>
      <h1 className="title">Test your skills. </h1>
      <h1 className="title">Enjoy the process. </h1>

      <embed src="C:\Users\jacob\Development\Projects\Visual Studio Code\Code Cove\CodeCoveLandingPageWireframe.pdf" type="application/pdf" width="100%" height="5000px" />

      {isUserSignedIn ? (
        // User is already signed in, you can display a different message or redirect here
        <p></p>
      ) : (
        // User is not signed in, display the SignIn component
      <button className='getstartedbtn' onClick={scrollToBottom}>Join now for free</button>
      )}
    </div>

      <div className='homeimg'>
        <img src={imageUrls[currentImageIndex]} alt="background" />
      </div>

      {isUserSignedIn ? (
        // User is already signed in, you can display a different message or redirect here
        <p className='signedin'>You are signed in. <a href="/courses">Explore courses.</a></p>
      ) : (
        // User is not signed in, display the SignIn component
        <div id="sign-in-form" className="signinform">
          <SignIn />
        </div>
      )}

      <Copyright />
      
      <div id="returnlink" class="returnlink">
    <a href="#top" class="back-to-top-link" aria-label="Scroll to Top">Return to Top</a>
  </div>

    </>
  );
}

export default LandingPage;