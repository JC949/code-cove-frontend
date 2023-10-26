// NavBar.js
import React, { useRef } from 'react';
import '../css/NavBar.css';
import '../css/Images.css';
import CustomUserButton from './CustomUserButton';
import CustomLink from './CustomLink';
import { useClerk } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';


function NavBar() {
  const { user } = useClerk();
  const discordIconRef = useRef(null);

  const handleMouseEnter = () => {
    discordIconRef.current.src = './img/bluediscordicon.png';
  };

  const handleMouseLeave = () => {
    discordIconRef.current.src = './img/whitediscordicon.png';
  };

  return (
    <header className="header">
      <div className="left-section">
        <a href="/" className="header-logo"><img src="/img/whitewave.png" alt="Code Cove" /></a>
        <a href="/" className="header-title custom-title">CodeCove</a>
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <CustomLink href="/courses">Browse Courses</CustomLink>
          </li>
          {!user ? (
            <li>
              <Link to="/login">Log In</Link>
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
            <li className='userbutton'>
              <CustomUserButton />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
