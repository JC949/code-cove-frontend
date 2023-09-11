import './css/NavBar.css';
import { UserButton } from '@clerk/clerk-react';


function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;

  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}
function NavBar() {
  return (
      <nav className="nav">
        <a href="/"> <img className="banner" src="./img/bluebanner.png" alt="Code Cove"></img> </a>
        <ul>
          <CustomLink href="/courses">Explore Courses</CustomLink>
          <CustomLink href="/">Log In</CustomLink>
        <div className="user-controls">
          <UserButton />
        </div>

        </ul>
      </nav>
  );
}

export default NavBar;
