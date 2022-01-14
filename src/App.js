import { lazy, Suspense } from "react";
import "./App.css";
import Spinner from "./components/UI/Spinner";

function App() {
	// const [isLoading, setisLoading] = useState(true);
	// const isAuth = true;
	// if (isAuth) {
	// 	setisLoading(false);
	// }

	// if (isLoading) {
	// 	return <Spinner />;
	// }

	const MainRouter = lazy(() => import("./Routes/MainRouter"));

	return (
		<div className='App'>
			<Suspense fallback={<Spinner />}>
				<MainRouter />
			</Suspense>
		</div>
	);
}

export default App;
