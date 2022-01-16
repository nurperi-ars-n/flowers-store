import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Spinner from "./components/UI/Spinner";
import { fetchUsers } from "./store/users/dataUsers";

function App() {
	// const [isLoading, setisLoading] = useState(true);
	// const isAuth = true;
	// if (isAuth) {
	// 	setisLoading(false);
	// }

	// if (isLoading) {
	// 	return <Spinner />;
	// }
  
  // useEffect(() => {

  // }, [])

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	const MainRouter = lazy(() => import("./Routes/MainRouter"));

	return (
		<Suspense fallback={<Spinner />}>
			<MainRouter />
		</Suspense>
	);
}

export default App;
