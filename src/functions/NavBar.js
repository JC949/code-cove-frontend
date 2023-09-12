import React, { useRef } from 'react';
import '../css/NavBar.css';
import '../css/Images.css';
import CustomUserButton from './CustomUserButton';
import CustomLink from './CustomLink';
import { useClerk } from '@clerk/clerk-react'; // Import the useClerk hook

function NavBar() {
  const { user } = useClerk(); // Access the user object from Clerk

  const discordIconRef = useRef(null);

  const scrollToSignInForm = () => {
    const signInForm = document.getElementById("sign-in-form");
    if (signInForm) {
      signInForm.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    } else {
      // Handle the case where the element doesn't exist on the current page
      console.error("Sign-in form element not found.");
    }
  };

  const handleMouseEnter = () => {
    discordIconRef.current.src = './img/bluediscordicon.png';
  };

  const handleMouseLeave = () => {
    discordIconRef.current.src = './img/whitediscordicon.png';
  };

  return (
    <a href="/">
    <header className="header">
      <nav className="nav-links">
        <ul>
          <li>
            <CustomLink href="/courses">Explore Courses</CustomLink>
          </li>
          {!user ? (
            <li>
              <a href="/#sign-in-form" onClick={scrollToSignInForm}>Log In</a>
            </li>
          ) : null}
  <a
    className="discord-link"
    href="https://discord.gg/bCBwp9qm"
    onMouseEnter={() => handleMouseEnter()}
    onMouseLeave={() => handleMouseLeave()}
  >
    <img
      className='discord-icon'
      ref={discordIconRef}
      src="./img/whitediscordicon.png"
      alt="Join the Discord"
    />
  </a>

          {user && (
            <li>
              <CustomUserButton />
            </li>
          )}
        </ul>
      </nav>
    </header>
    </a>

  );
}


export default NavBar;
