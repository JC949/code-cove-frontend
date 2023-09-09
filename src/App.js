import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
  UserButton,
} from "@clerk/clerk-react";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

// Page that can be accessed by all
function PublicPage() {
  return (
    <>
      <h1>Public page</h1>
      <a href="/admin">Proceed to Admin Page</a>
    </>
  );
}

// Receives the role from the users profile through clerk
function ProtectedPage({ user }) {
  const userRole = user?.profile?.roles || [];

  return (
    <>
      <h1>Admin page</h1>
      <UserButton />

      {/* If a user has role student */}
      {userRole.includes("STUDENT") && (
        <p>You are a student. Access student content here.</p>
      )}
      {/* If a user has role instructor */}
      {userRole.includes("INSTRUCTOR") && (
        <p>You are an instructor. Access instructor content here.</p>
      )}
      {/* If a user has role admin */}
      {userRole.includes("ADMIN") && (
        <p>You are an admin. Access admin content here.</p>
      )}

      <a href="/">Return to home page</a>
    </>
  );
}

function ClerkProviderWithRoutes() {
  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
    >
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route
          path="/sign-in/*"
          element={<SignIn redirectUrl={"/admin"} routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp redirectUrl={"/admin"} routing="path" path="/sign-up" />}
        />
        <Route
          path="/admin"
          element={
            <>
              <SignedIn>
                <ProtectedPage />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
}

export default App;
