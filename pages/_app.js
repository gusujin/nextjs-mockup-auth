import axios from "axios";
import { useEffect, useState } from "react";
import { AuthContext } from "../shared/context/Auth";
import BaseLayout from "../shared/layouts/Base";

function MyApp({ Component, pageProps }) {
  const [profile, setProfile] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      const access_token = localStorage.getItem("access_token");
      if (access_token) {
        try {
          const profileResponse = await axios.get("/api/my/profile", {
            headers: {
              authorization: `Bearer ${access_token}`,
            },
          });
          const { profile } = profileResponse.data;
          setProfile(profile);
        } catch (e) {
          console.log(e);
        }
      }
    };
    loadProfile();
  }, []);

  useEffect(() => {
    setIsLoggedIn(profile !== null);
  }, [profile]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        profile,
        setProfile,
        setIsLoggedIn,
      }}
    >
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </AuthContext.Provider>
  );
}

export default MyApp;
