"use client";

import { useFitLog } from "@/context/FitLogContext";
import { toast } from "react-toastify";
import { HiOutlineArchiveBoxArrowDown } from "react-icons/hi2";
import { IoSaveOutline } from "react-icons/io5";

const WorkoutActions = ({ workout }) => {
  const { addToPlan, saveForLater } = useFitLog();

  const handleAddToPlan = () => {
    addToPlan(workout);

    toast.success("Added to today's plan");
  };

  const handleSaveForLater = () => {
    saveForLater(workout);

    toast.success("Saved for later");
  };

  return (
    <div className="mt-5 flex gap-5">

      <button
        onClick={handleAddToPlan}
        className="btn rounded-lg bg-[#CCFF00] text-black"
      >
        <IoSaveOutline />
        Add to todays plan
      </button>

      <button
        onClick={handleSaveForLater}
        className="btn rounded-lg text-white"
      >
        <HiOutlineArchiveBoxArrowDown />
        Save for later
      </button>

    </div>
  );
};

export default WorkoutActions;