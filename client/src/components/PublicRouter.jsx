import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = () => {
  let storageUser = localStorage.getItem("user");
  const { isAuthenticated, user } = useAuth0();
  storageUser = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);
  if (storageUser) {
    return <Navigate to="/home" push={true}></Navigate>;
  } else {
    return <Outlet></Outlet>;
  }
};
