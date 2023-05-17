import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

export const Home = () => {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } =
    useAuth0();
  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => logout() && localStorage.removeItem("user")}>
        LogOut
      </button>
    </div>
  );
};
