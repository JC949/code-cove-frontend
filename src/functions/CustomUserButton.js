import { useClerk, UserButton} from '@clerk/clerk-react';

function CustomUserButton() {
    const { user, signOut } = useClerk();

  // Check if the user is authenticated
  const isAuthenticated = user?.signedIn;

  const handleSignOut = async () => {
    try {
      // Sign out the user
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <UserButton>
      {isAuthenticated ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : null}
    </UserButton>
  );
}

export default CustomUserButton;