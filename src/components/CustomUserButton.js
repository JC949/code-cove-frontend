import React from 'react';
import { useClerk, UserButton } from '@clerk/clerk-react';

function CustomUserButton() {
  const { user, signOut } = useClerk();

  const handleSignOut = async () => {
    try {
      // Sign out the user using Clerk's signOut method
      await signOut({
        redirectTo: 'http://localhost:3000', // Replace with your desired URL
      });
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <UserButton>
      {user?.signedIn ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : null}
    </UserButton>
  );
}

export default CustomUserButton;
