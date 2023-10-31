import React, { useEffect, useState } from 'react';
import '../css/Pages.css';
import { useClerk } from '@clerk/clerk-react';
import CommonLayout from '../components/CommonLayout';

function Title() {
  return (
    <section id="title-text">
    <div className="title-container">
      <h1 className="title">Free coding courses. </h1>
      <h1 className="title">Computer science concepts. </h1>
      <h1 className="title">Community-based learning. </h1>
    </div>
    </section>
  );
}

function About() {
  return (
    <section id="about-text">
    <div className="about-container">
      <h1 className="about">About us.</h1>
    </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact-text">
    <div className="contact-container">
      <h1 className="contact">Contact us.</h1>
    </div>
    </section>
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

/* Logic to swap images in img array every 3000 milliseconds 
This happens by checking if the index of prevIndex is equal to the
last index of the imageURLs then reset it to 0 */
function RotatingImages() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Use a timer to switch to the next image every 5 seconds 
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3000 milliseconds (3 seconds)

    return () => clearInterval(interval);
  });

  const imageUrls = [
    '/img/homeimg1.jpg',
    '/img/homeimg2.jpg',
    '/img/homeimg3.jpg',
  ];

  return (
  <div className='homeimg'>
  <img src={imageUrls[currentImageIndex]} alt="background" />
  </div>
  )

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

function LandingPage() {

  const { user } = useClerk();

  return (
    
    <CommonLayout>

    <div className="landingpage">
      {user ? (
        <>
        <Title />
        <ViewCoursesButton />
        <RotatingImages />
        <About />
        <Contact />
        </>
      ) : (
        <>
          <Title />
          <JoinButton />
          <RotatingImages />
          <About />
          <Contact />
        </>
      )}

    </div>
      </CommonLayout>
  );
}

export default LandingPage;
