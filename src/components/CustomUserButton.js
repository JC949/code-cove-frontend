import React from 'react';
import { useClerk, UserButton } from '@clerk/clerk-react';

function CustomUserButton() {
  const { user } = useClerk();

  return (
    <UserButton afterSignOutUrl="http://localhost:3000"
    appearence>
      {user?.signedIn ? <button>Sign Out</button> : null}
    </UserButton>
  );
}

export default CustomUserButton;