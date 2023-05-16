import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const { isAuthenticated, user } = useAuth0();
  if (!isAuthenticated) {
    return <Navigate to="/login" push={true}></Navigate>;
  } else if (!user.email_verified) {
    return <Navigate to="/" push={true} />;
  } else {
    return <Outlet />;
  }
};
