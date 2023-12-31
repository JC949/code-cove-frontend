import React, { useRef } from 'react';
import '../../css/NavBar.css';
import '../../css/Images.css';
import CustomUserButton from '../clerk-components/CustomUserButton';
import CustomLink from '../clerk-components/CustomLink';
import { useClerk } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

// Component to display a nav bar
function NavBar() {
  const { user } = useClerk();
  const discordIconRef = useRef(null);

  return (
    <header className="header">
      <div className="left-section">
        <a href="/" className="header-logo"><img src="/img/whitewave.png" alt="Code Cove" /></a>
        <a href="/" className="header-title custom-title">CodeCove</a>
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <CustomLink href="/courses">Browse Tutorials</CustomLink>
          </li>
          {!user ? (
            <li>
              <Link to="/login">Log In</Link>
            </li>
          ) : null}
          <li>
          <CustomLink href="/about">About Us</CustomLink>
          </li>
          <li>
          <CustomLink href="/contact">Contact Us</CustomLink>
          </li>
          <a
            className="discord-link"
            href="https://discord.gg/bCBwp9qm"
          >
            <img
              className="discord-icon"
              ref={discordIconRef}
              src='/img/whitediscordicon.png'
              alt="Discord"
            />
          </a>
          {user && (
            <li className="userbutton">
              <CustomUserButton />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
