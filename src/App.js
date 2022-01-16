import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Spinner from "./components/UI/Spinner";
import { fetchUsers } from "./store/users/dataUsers";
import { Navigate, useLocation } from "react-router-dom";

function App() {
	// const [isLoading, setisLoading] = useState(true);
	// const isAuth = true;
	// if (isAuth) {
	// 	setisLoading(false);
	// }

	// if (isLoading) {
	// 	return <Spinner />;
	// }
	const location = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	const MainRouter = lazy(() => import("./Routes/MainRouter"));

	if (location.pathname === "/") return <Navigate to='/flowers' replace />;

	return (
		<Suspense fallback={<Spinner />}>
			<MainRouter />
		</Suspense>
	);
}

export default App;
