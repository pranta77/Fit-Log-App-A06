"use client";

import { useFitLog } from "@/context/FitLogContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCheck, FaChevronDown, FaFire, FaStar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { MdCancelPresentation } from "react-icons/md";
import { toast } from "react-toastify";

const MyPlan = () => {
  const { plan, saved, removeFromPlan, removeFromSaved, markAsDone } =
    useFitLog();

  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");
  const [loading, setLoading] = useState(true);

  // Loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Plan statistics
  const exercises = plan.length;

  const minutes = plan.reduce((total, workout) => total + workout.duration, 0);

  const calories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  // Remove workout
  const handleRemove = (id) => {
    if (activeTab === "plan") {
      removeFromPlan(id);
      toast.warning("Workout removed from today's plan");
    } else {
      removeFromSaved(id);
      toast.warning("Workout removed from saved");
    }
  };

  // Mark workout as done
  const handleMarkAsDone = (id) => {
    markAsDone(id);
    toast.success("Workout marked as done!");
  };

  // Decide which list to show
  const currentWorkouts = activeTab === "plan" ? plan : saved;

  // Sort current list
  const workouts = [...currentWorkouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  return (
    <div className="container mx-auto space-y-8 py-5">
      {/* Header */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-white">MY PLAN</h2>

        <p className="mt-2 text-[#9CA3AF]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Exercises */}
        <div className="rounded-2xl border border-[#292D35] bg-[#15171C] p-5">
          <p className="text-sm uppercase text-[#9CA3AF]">Exercises</p>

          <h3 className="mt-2 text-3xl font-bold text-white">{exercises}</h3>
        </div>

        {/* Minutes */}
        <div className="rounded-2xl border border-[#292D35] bg-[#15171C] p-5">
          <p className="text-sm uppercase text-[#9CA3AF]">Minutes</p>

          <h3 className="mt-2 text-3xl font-bold text-white">{minutes}</h3>
        </div>

        {/* Calories */}
        <div className="rounded-2xl border border-[#292D35] bg-[#15171C] p-5">
          <p className="text-sm uppercase text-[#9CA3AF]">Calories</p>

          <h3 className="mt-2 text-3xl font-bold text-white">{calories}</h3>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 border-b border-[#292D35]">
        <button
          onClick={() => setActiveTab("plan")}
          className={`px-5 py-3 text-sm font-bold ${
            activeTab === "plan"
              ? "border-b-2 border-[#CCFF00] text-[#CCFF00]"
              : "text-[#9CA3AF]"
          }`}
        >
          Today,s Plan
        </button>

        <button
          onClick={() => setActiveTab("saved")}
          className={`px-5 py-3 text-sm font-bold ${
            activeTab === "saved"
              ? "border-b-2 border-[#CCFF00] text-[#CCFF00]"
              : "text-[#9CA3AF]"
          }`}
        >
          Saved
        </button>
      </div>

      {/* Sort Dropdown */}
      <div className="flex justify-end">
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none rounded-lg border border-[#292D35] bg-[#15171C] px-4 py-3 pr-10 text-sm font-bold text-white outline-none"
          >
            <option value="duration">Sort By: Duration</option>

            <option value="calories">Sort By: Calories</option>

            <option value="rating">Sort By: Rating</option>
          </select>

          <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
        </div>
      </div>

      {/* Workout List */}
      <div className="space-y-5">
        {/* Loading */}
        {loading ? (
          <div className="flex min-h-75 items-center justify-center">
            <p className="text-lg text-[#9CA3AF]">Loading workouts…</p>
          </div>
        ) : workouts.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h2 className="text-2xl font-extrabold text-white">
              NOTHING HERE YET
            </h2>

            <p className="mt-3 max-w-md text-[#9CA3AF]">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-6 rounded-lg bg-[#CCFF00] px-6 py-3 font-bold text-black"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          /* Workout Cards */
          workouts.map((workout) => (
            <div
              key={workout.id}
              className="flex flex-col gap-5 rounded-2xl border border-[#292D35] bg-[#15171C] p-5 md:flex-row"
            >
              {/* Image */}
              <Image
                width={500}
                height={500}
                src={workout.image}
                alt={workout.name}
                className="h-48 w-full rounded-xl object-cover md:h-32 md:w-48"
              />

              {/* Workout Information */}
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="text-xl font-extrabold uppercase text-white">
                    {workout.name}
                  </h3>

                  <p className="mt-5 text-[#8A92A0]">{workout.equipment}</p>
                </div>

                {/* Stats */}
                <div className="mt-5 flex flex-wrap gap-5 text-sm text-[#9CA3AF]">
                  <span className="flex items-center gap-1">
                    <IoTimeOutline />
                    {workout.duration} min
                  </span>

                  <span className="flex items-center gap-1">
                    <FaFire />
                    {workout.caloriesBurned} kcal
                  </span>

                  <span className="flex items-center gap-1">
                    <FaStar />
                    {workout.rating}
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                {/* View Details */}
                <Link
                  href={`/workout/${workout.id}`}
                  className="rounded-lg bg-[#CCFF00] px-4 py-2 text-sm font-bold text-black"
                >
                  View Details
                </Link>

                {/* Mark as Done */}
                {activeTab === "plan" && (
                  <button
                    onClick={() => handleMarkAsDone(workout.id)}
                    disabled={workout.completed}
                    className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-bold ${
                      workout.completed
                        ? "cursor-not-allowed border-[#292D35] text-[#6B7280]"
                        : "border-[#292D35] text-white hover:border-[#CCFF00] hover:text-[#CCFF00]"
                    }`}
                  >
                    <FaCheck />

                    {workout.completed ? "Done" : "Mark as Done"}
                  </button>
                )}

                {/* Remove */}
                <button
                  onClick={() => handleRemove(workout.id)}
                  className="flex cursor-pointer items-center justify-center rounded-lg border border-red-500 px-3 py-2 text-red-500 hover:bg-red-500 hover:text-white"
                >
                  <MdCancelPresentation />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyPlan;
