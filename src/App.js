import React from "react";
import { Route, Routes } from "react-router-dom";
import CoursesPage from "./pages/CoursesPage";
import LandingPage from "./pages/LandingPage";
import AuthenticationPage from "./pages/AuthenticationPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import { ClerkProvider } from "@clerk/clerk-react";
import CreateTutorialPage from "./pages/CreateTutorialPage";
import ShowTutorialPage from "./pages/ShowTutorialPage";
import CompletedTutorialsPage from "./pages/CompletedTutorialsPage";


/* Define pub key in variable, make sure clerk provider is called in App.js
so we can use clerk features throughout app without needing to re call */
function App() {
  if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  }

  const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

  return (
    <>
    <ClerkProvider publishableKey={clerkPubKey}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<CoursesPage />} />
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
