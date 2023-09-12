import '../css/NavBar.css';
import '../css/Images.css';
import CustomUserButton from './CustomUserButton';
import CustomLink from './CustomLink';
import { useClerk } from '@clerk/clerk-react'; // Import the useClerk hook

function NavBar() {
  const { user } = useClerk(); // Access the user object from Clerk

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

  return (
    <nav className="nav">
      <a href="/"> <img className="banner" src="./img/bluebanner.png" alt="Code Cove"></img> </a>
      <ul>
        <CustomLink href="/courses">Explore Courses</CustomLink>
        {/* Conditionally render the "Log In" option */}
        {!user ? (
          <li>
            <a href="/#sign-in-form" onClick={scrollToSignInForm}>Log In</a>
          </li>
        ) : null}
        <li>
          <a href="https://discord.gg/bCBwp9qm"> <img className='discord-icon' src="./img/whitediscordicon.png" alt="Join the Discord"></img></a>
        </li>
        <li>
          <CustomUserButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
