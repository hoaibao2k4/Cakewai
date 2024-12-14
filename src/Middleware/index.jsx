import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const location = useLocation();
  const user = useSelector(state => state.auth.login.currentUser)

  if (!user) {
    const isAdminRoute = location.pathname.includes("/admin");
    return <Navigate to={isAdminRoute ? "/admin/login" : "/auth?mode=signin"} />;
  }

  return children;
}

export default PrivateRoute;
