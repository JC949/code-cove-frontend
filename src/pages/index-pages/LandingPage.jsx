import React from 'react';
import '../../css/LandingPage.css';
import { useClerk } from '@clerk/clerk-react';
import CommonLayout from '../../components/nav-components/CommonLayout';

function Display() {
  const { user } = useClerk();

  return (
    <>
    <section id="home">
      <div className="container">
        <h1 className="title">Free coding courses. </h1>
        <h1 className="title">Computer science concepts. </h1>
        <h1 className="title">Community-based learning. </h1>
      </div>
      {user ? (
        <>
          <ViewCoursesButton />
        </>
      ) : (
        <>
          <JoinButton />
        </>
      )}
    </section>

    <section id="about">
      <div className="container">
        <h1 className="title">About title 1.</h1>
        <h1 className="title">About title 2.</h1>
        <h1 className="title">About title 3.</h1>
      </div>
    </section>

    <section id="services">
      <div className="container">
        <h1 className="title">Services title 1.</h1>
        <h1 className="title">Services title 2.</h1>
        <h1 className="title">Services title 3.</h1>
      </div>
    </section>

    <section id="contact">
      <div className="container">
        <h1 className="title">Contact title 1.</h1>
        <h1 className="title">Contact title 2.</h1>
        <h1 className="title">Contact title 3.</h1>
      </div>
    </section>
    </>
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

/* Logic to swap images in img array every 3 seconds 
This happens by checking if the index of prevIndex is equal to the
last index of the imageURLs then reset it to 0 */
// function RotatingImages() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     // Use a timer to switch to the next image every 5 seconds 
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // 3000 milliseconds (3 seconds)

//     return () => clearInterval(interval);
//   });

//   const imageUrls = [
//     '/img/homeimg1.jpg',
//     '/img/homeimg2.jpg',
//     '/img/homeimg3.jpg',
//   ];

//   return (
//   <div className='homeimg'>
//   <img src={imageUrls[currentImageIndex]} alt="background" />
//   </div>
//   )

// }


function LandingPage() {

  return (
    
    <CommonLayout>
      <Display />
    </CommonLayout>
  );
}

export default LandingPage;
