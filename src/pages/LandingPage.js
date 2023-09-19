import React, { useEffect, useState } from 'react';
import '../css/Pages.css';
import { useClerk } from '@clerk/clerk-react';
import Copyright from '../components/Copyright';

function Title() {
  return (
    <div className="title-container">
      <h1 className="title">Free coding courses. </h1>
      <h1 className="title">Computer science concepts. </h1>
      <h1 className="title">Community-based learning. </h1>
    </div>
  );
}

function JoinButton() {
  return (
    <a href="/login">
    <button className="getstartedbtn">
      Join now for free
    </button>
    </a>
  );
}

function ViewCoursesButton() {
  return (
    <a href="/courses">
    <button className="getstartedbtn">
      Browse Courses
    </button>
    </a>
  );
}


const imageUrls = [
  '/img/homeimg1.jpg',
  '/img/homeimg2.jpg',
  '/img/homeimg3.jpg',
];

function LandingPage() {
  const { user } = useClerk();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Use a timer to switch to the next image every 5 seconds 
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3000 milliseconds (3 seconds)

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landingpage">
      {user ? (
        <>
        <Title />
        <ViewCoursesButton />
        </>
      ) : (
        <>
          <Title />
          <JoinButton />
        </>
      )}

      <div className='homeimg'>
        <img src={imageUrls[currentImageIndex]} alt="background" />
      </div>
          <Copyright />
    </div>
  );
}

export default LandingPage;
