import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const PrivateRoute = () => {
  const {} = useContext(AuthContext);
  return <div>PrivateRoute</div>;
};

export default PrivateRoute;
