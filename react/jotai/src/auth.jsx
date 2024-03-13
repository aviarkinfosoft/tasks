// store.js
import { atom, useAtom } from 'jotai';

// Atom for storing authentication status
export const isAuthenticatedAtom = atom(false);

// Atom for storing user profile information
export const userProfileAtom = atom(null);

// Custom hook for accessing authentication status and profile information
export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom);
  const [userProfile, setUserProfile] = useAtom(userProfileAtom);

  const login = (user) => {
    setIsAuthenticated(true);
    setUserProfile(user);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserProfile(null);
  };

  return { isAuthenticated, userProfile, login, logout };
};
