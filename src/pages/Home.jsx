import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Card from "../components/Home/Card";
import { products } from "../utils/data";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="min-h-screen space-y-4 bg-[#242424] px-4 py-2">
      <div>
        <p className="text-3xl font-semibold text-white">
          Hello, {user?.username}!
        </p>
        <p className="text-sm text-gray-400">
          Welcome to our platform. We're excited to have you here.
        </p>
      </div>
      <div className="flex flex-wrap justify-start gap-3">
        {products.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
