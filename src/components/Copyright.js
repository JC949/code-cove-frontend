import '../css/NavBar.css';

function Copyright() {
    return (
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Code Cove. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Copyright;
  