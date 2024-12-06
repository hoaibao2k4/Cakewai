import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
// const isAuthenticated = !!localStorage.getItem("token"); // Kiểm tra đăng nhập
// return isAuthenticated ? children : <Navigate to="/admin/login" />;
return children
}

export default PrivateRoute;
