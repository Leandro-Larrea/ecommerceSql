import { useAuth0 } from "@auth0/auth0-react";

export const Login = () => {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } =
    useAuth0();
  return (
    <div>
      <h1>Auth0 authentication</h1>
      <div>
        <button onClick={loginWithRedirect}>Login with Popup</button>
        <button onClick={loginWithPopup}>Login with redirect</button>
        <button onClick={logout}>logout</button>
      </div>
      <h3>User is {isAuthenticated ? "Logged in" : "Not logged in"}</h3>
      {isAuthenticated && <pre>{JSON.stringify(user, null, 2)}</pre>}
    </div>
  );
};
