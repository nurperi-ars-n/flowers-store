import React, { lazy, Suspense, useState } from "react";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  

  const MainRouter = lazy(() => import("./Routes/MainRouter"));

  return (
    <Suspense fallback={<Spinner />}>
      <MainRouter />
    </Suspense>
  );
}

export default App;
