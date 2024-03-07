const { createContext, useState } = require("react");

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  const handleAuthChange = (val) => {
    if (typeof val === Boolean) {
      setAuth(val);
    }
  };
  return (
    <AuthContext.Provider value={{ auth, handleAuthChange }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
