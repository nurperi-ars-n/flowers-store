import { lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Spinner from "./components/UI/Spinner";
import { ToastContainer, toast } from "react-toastify";
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

	const MainRouter = lazy(() => import("./Routes/MainRouter"));

	return (
		<Suspense fallback={<Spinner />}>
			<ToastContainer />
			<MainRouter />
		</Suspense>
	);
}

export default App;
