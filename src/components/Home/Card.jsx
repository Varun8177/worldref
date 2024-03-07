import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { MdBookmarkAdd } from "react-icons/md";

const Card = ({ thumbnail, title, description }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [inDeals, setInDeals] = useState(false);
  const handleAddToDeals = () => {
    enqueueSnackbar("successfully added to deals", {
      variant: "success",
    });
    setInDeals(true);
  };

  const handleCheckDetails = () => {
    enqueueSnackbar("feature in process", {
      variant: "info",
    });
  };

  return (
    <div className="w-full grow space-y-4 rounded-lg bg-black px-4 py-2 sm:w-[400px]">
      <img
        src={thumbnail}
        height="1000"
        width="1000"
        className="h-60 w-full rounded-lg object-cover"
        alt="thumbnail"
      />
      <div>
        <p className="text-xl font-bold text-neutral-200">{title}</p>
        <p className="mt-2 line-clamp-1 max-w-sm text-sm text-neutral-500">
          {description}
        </p>
      </div>
      <div className="flex gap-4">
        <button
          className="flex h-[52px] grow items-center justify-center rounded-lg bg-[#273c65] text-center text-xs text-white disabled:cursor-not-allowed"
          onClick={handleAddToDeals}
          disabled={inDeals}
        >
          <p>{inDeals ? "Already in Deals" : "Add to Deals"}</p>{" "}
          <MdBookmarkAdd size={20} />
        </button>
        <button
          className="h-[52px] grow rounded-lg bg-[#273c65] text-center text-xs text-white"
          onClick={handleCheckDetails}
        >
          Check Details
        </button>
      </div>
    </div>
  );
};

export default Card;
