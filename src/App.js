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


  return (
    <>
    <ClerkProvider>

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