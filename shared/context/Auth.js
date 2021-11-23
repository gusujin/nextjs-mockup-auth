import { createContext, useContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  profile: null,
  setIsLoggedIn: () => {},
  setUserProfile: () => {},
});

export const useAuth = () => useContext(AuthContext);
