import React from "react";
import ProfileIcon from "./Navbar/ProfileIcon";

const Navbar = () => {
  return (
    <div className="flex min-h-14 w-full justify-between bg-black px-4 py-2">
      <img
        src="https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/worldref/bo80ylpemh3degy5bdqk"
        alt="logo"
        className="h-14 object-cover"
      />
      <ProfileIcon />
    </div>
  );
};

export default Navbar;
