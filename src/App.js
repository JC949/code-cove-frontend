import React from "react";
import { Route, Routes } from "react-router-dom";
import CoursesPage from "./pages/tutorial-pages/CoursesPage";
import LandingPage from "./pages/index-pages/LandingPage";
import AboutPage from "./pages/index-pages/AboutPage";
import ContactPage from "./pages/index-pages/ContactPage";
import AuthenticationPage from "./pages/clerk-pages/AuthenticationPage";
import CourseDetailsPage from "./pages/tutorial-pages/CourseDetailsPage";
import { ClerkProvider } from "@clerk/clerk-react";
import CreateTutorialPage from "./pages/tutorial-pages/CreateTutorialPage";
import ShowTutorialPage from "./pages/tutorial-pages/ShowTutorialPage";
import CompletedTutorialsPage from "./pages/tutorial-pages/CompletedTutorialsPage";

/* Define pub key in variable, make sure clerk provider is called in App.js
so we can use clerk features throughout app without needing to re call */
function App() {
  if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  }

  const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
  console.log("Clerk Publishable Key:", clerkPubKey);

  return (
    <>
    <ClerkProvider publishableKey={clerkPubKey}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/createTutorialPage" element={<CreateTutorialPage />} />
        <Route path="/completedTutorials" element={<CompletedTutorialsPage />} />
        <Route path="/showTutorialPage" element={<ShowTutorialPage />} />
        <Route path="/courses/:courseId" element={<CourseDetailsPage />} />
        <Route path="/login" element={<AuthenticationPage />} />
      </Routes>
    </ClerkProvider>
    </>
  );
}

export default App;
