import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import CoursesPage from "./pages/CoursesPage";
import LandingPage from "./pages/LandingPage";
import AuthenticationPage from "./pages/AuthenticationPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import { ClerkProvider } from "@clerk/clerk-react";


// App function returns NavBar, BrowserRouter and ClerkProviderWithRoutes functions
function App() {

// Required publishable key
if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

// Create a variable for a successfully found pub key
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

  return (
    <>
    <ClerkProvider publishableKey={clerkPubKey}>

    <NavBar />
    <Routes>
      <Route path ="/" element = {<LandingPage />} />
      <Route path ="/courses" element = {<CoursesPage />} />
      <Route path="/courses/:courseId" element={<CourseDetailsPage />} />
      <Route path="/login" element = {<AuthenticationPage />} />
    </Routes>

      </ClerkProvider>
    </>
  );
}

export default App