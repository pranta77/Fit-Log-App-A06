"use client";

import { useFitLog } from "@/context/FitLogContext";
import { toast } from "react-toastify";
import { HiOutlineArchiveBoxArrowDown } from "react-icons/hi2";
import { IoSaveOutline } from "react-icons/io5";

const WorkoutActions = ({ workout }) => {
  const { plan, saved, addToPlan, saveForLater } = useFitLog();

  // Check if this workout is already in today's plan
  const isAlreadyInPlan = plan.some((item) => item.id === workout.id);

  // Check if this workout is already saved
  const isAlreadySaved = saved.some((item) => item.id === workout.id);

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
        disabled={isAlreadyInPlan}
        className={`btn rounded-lg ${
          isAlreadyInPlan
            ? "cursor-not-allowed bg-gray-500 text-white"
            : "bg-[#CCFF00] text-black hover:bg-[#1A2312] hover:text-[#CCFF00]"
        }`}
      >
        <IoSaveOutline />

        {isAlreadyInPlan ? "✓ Added in today's plan" : "Add to today's plan"}
      </button>

      <button
        onClick={handleSaveForLater}
        disabled={isAlreadySaved}
        className={`btn rounded-lg ${
          isAlreadySaved
            ? "cursor-not-allowed bg-gray-500 text-white"
            : "text-white"
        }`}
      >
        <HiOutlineArchiveBoxArrowDown />

        {isAlreadySaved ? "✓ Already saved" : "Save for later"}
      </button>
    </div>
  );
};

export default WorkoutActions;
