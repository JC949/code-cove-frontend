import React from 'react';
import { useClerk, UserButton } from '@clerk/clerk-react';

// Component for adding custom logic to clerk user button component
function CustomUserButton() {
  const { user } = useClerk();

  return (
    // Change to valid url when deploying to cloud
    <UserButton afterSignOutUrl="https://code-cove-373f38802ffd.herokuapp.com/"
    appearence>
      {user?.signedIn ? <button>Sign Out</button> : null}
    </UserButton>
  );
}

export default CustomUserButton;
