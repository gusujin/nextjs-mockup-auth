import React from "react";
import Link from "next/link";
import { useAuth } from "../context/Auth";

const BaseLayout = ({ children }) => {
  const auth = useAuth();
  const { isLoggedIn, profile } = auth;

  return (
    <div style={{ padding: "8px" }}>
      <div
        style={{
          borderBottom: "1px solid #ccc",
          marginBottom: "8px",
        }}
      >
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            {isLoggedIn ? (
              <Link href="/logout">
                <a>Logout</a>
              </Link>
            ) : (
              <Link href="/login">
                <a>Login</a>
              </Link>
            )}
          </li>
          <li>
            <Link href="/private-page">
              <a>Private Page (require login)</a>
            </Link>
          </li>
        </ul>
      </div>
      <pre
        style={{ fontSize: "small", backgroundColor: "#eee", padding: "4px" }}
      >
        {JSON.stringify(auth, null, 2)}
      </pre>
      <div>{children}</div>
    </div>
  );
};

export default BaseLayout;
