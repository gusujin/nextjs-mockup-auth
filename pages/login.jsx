import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../shared/context/Auth";
import { useRouter } from "next/router";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { setProfile } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const authResponse = await axios.post("/api/oauth/token", {
        username,
        password,
        grant_type: "password",
        scope: "openid profile",
      });
      const { access_token, refresh_token } = authResponse.data;

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);

      const profileResponse = await axios.get("/api/my/profile");
      const { profile } = profileResponse.data;
      setProfile(profile);

      router.push("/");
    } catch (e) {
      setError("username 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <div>
      {error && (
        <div
          style={{ background: "orange", padding: "8px", marginBottom: "16px" }}
        >
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{ width: "5em", display: "inline-block" }}>email</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label style={{ width: "5em", display: "inline-block" }}>
            password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
