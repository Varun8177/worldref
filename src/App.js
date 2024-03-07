import { Route, Routes, useLocation } from "react-router-dom";
import Pages from "./pages";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();
  const noNavbarRoutes = ["/login", "/register"];
  return (
    <>
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        {Pages.map((item) => (
          <Route {...item} key={item.path} />
        ))}
      </Routes>
    </>
  );
}

export default App;
