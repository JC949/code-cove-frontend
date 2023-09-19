import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import Footer from "../components/Copyright";

function AuthenticationPage() {
  return (
    <>
    <div className="signinform">
      <SignIn />
    </div>
    <div className='loginpagefooter'>
      <Footer />
    </div>
    </>
  );
}

export default AuthenticationPage;
