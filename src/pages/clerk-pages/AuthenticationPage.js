import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import '../../css/Pages.css';
import CommonLayout from '../../components/nav-components/CommonLayout';

// Contains clerk sign in form authentication
function AuthenticationPage() {
  return (
    <>
      <CommonLayout />
        <div className="signinform">
          <SignIn />
        </div>
    </>
  );
}

export default AuthenticationPage;
