import React, { useContext, useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";
import { AuthContext } from "../../contexts/AuthContext";

const ProfileIcon = () => {
  const [show, setshow] = useState(false);
  const { handleUserChange } = useContext(AuthContext);
  return (
    <div
      className="relative bg-black"
      onMouseOver={() => setshow(true)}
      onMouseLeave={() => setshow(false)}
    >
      <div className="flex h-full cursor-pointer items-center gap-x-2 px-2 text-sm font-semibold leading-6">
        <img
          className="h-14 w-14 rounded-full bg-black"
          src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_640.png"
          alt=""
        />
        <BsChevronDown
          className="font-bold text-white transition-transform duration-500 ease-in-out"
          style={{
            transform: show ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>
      {show && (
        <div className="absolute -left-10 top-full h-auto min-w-[150px] bg-black p-3 text-white shadow-md">
          <div className="space-y-4">
            <div>
              {
                <button
                  className="flex min-w-fit items-center gap-2"
                  onClick={() => handleUserChange(null)}
                >
                  <IoMdLogOut
                    className="rotate-[270deg] text-red-500"
                    size={20}
                  />
                  <p className="min-w-fit text-sm">Log out</p>
                </button>
              }
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
