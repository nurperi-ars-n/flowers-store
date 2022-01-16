import { Navigate } from "react-router-dom";
import { ROUTES } from "../utills/constants/general";

function PrivateRoute({ component: RouteComponent, roles }) {
	const role = "GOOO";
	const userHasRequiredRole = roles.includes(role) ? true : false;
	const isAuthenticated = true;
	//   if (isAuthenticated && userHasRequiredRole) {
	return <RouteComponent />;
	//   }
	//   if (isAuthenticated && !roles.includes(role)) {
	//     return <Navigate to={ROUTES.ACCESSDENIED} replace />;
	//   }
	console.log(role, "role");
}

export default PrivateRoute;
