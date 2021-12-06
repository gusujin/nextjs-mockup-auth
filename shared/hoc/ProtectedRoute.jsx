import React, { useEffect } from "react";
import { useAuth } from "../context/Auth";
import { useRouter } from "next/router";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
