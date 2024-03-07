import PrivateRoute from "../components/Auth/PrivateRoute";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

const Pages = [
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Signup />,
  },
];

export default Pages;
