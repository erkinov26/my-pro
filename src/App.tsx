import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import SignUp from "./Pages/SignUp/SignUp";
import Provider from "./Provider/Provider";
import AllBooks from "./Pages/AllBooks/AllBooks";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <SignUp />,
		},
		{
			path: "/books",
			element: <AllBooks />,
		},
	]);
	return (
		<Provider>
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
