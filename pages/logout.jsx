import React, { useEffect } from "react";
import { useAuth } from "../shared/context/Auth";

const LogOutPage = () => {
  const { setProfile } = useAuth();

  useEffect(() => {
    setProfile(null);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.replace("/");
  }, []);
  return <div></div>;
};

export default LogOutPage;
