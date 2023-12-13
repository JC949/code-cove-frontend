import '../../css/NavBar.css';

// Component to display copyright footer
function Footer() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} Code Cove. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  