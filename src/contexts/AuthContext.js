const { createContext, useState } = require("react");

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleUserChange = (val) => {
    setUser(val);
  };
  return (
    <AuthContext.Provider value={{ user, handleUserChange }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
