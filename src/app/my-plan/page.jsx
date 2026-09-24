"use client";

import { useFitLog } from "@/context/FitLogContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFire, FaStar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { MdCancel, MdCancelPresentation } from "react-icons/md";

const MyPlan = () => {
  const { plan, saved } = useFitLog();
  // console.log(plan, "this is plan");

  const [activeTab, setActiveTab] = useState("plan");

  const exercises = plan.length;

  const minutes = plan.reduce((total, workout) => total + workout.duration, 0);

  const calories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  const handleRemove = (id) => {
    // We will add remove functionality to Context next
    console.log(id);
  };

  const workouts = activeTab === "plan" ? plan : saved;

  return (
    <div className="container mx-auto space-y-8 py-5">
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-white">MY PLAN</h2>
        <p className="mt-2 text-[#9CA3AF]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#292D35] bg-[#15171C] p-5">
          <p className="text-sm uppercase text-[#9CA3AF]">Exercises</p>

          <h3 className="mt-2 text-3xl font-bold text-white">{exercises}</h3>
        </div>

        <div className="rounded-2xl border border-[#292D35] bg-[#15171C] p-5">
          <p className="text-sm uppercase text-[#9CA3AF]">Minutes</p>

          <h3 className="mt-2 text-3xl font-bold text-white">{minutes}</h3>
        </div>

        <div className="rounded-2xl border border-[#292D35] bg-[#15171C] p-5">
          <p className="text-sm uppercase text-[#9CA3AF]">Calories</p>

          <h3 className="mt-2 text-3xl font-bold text-white">{calories}</h3>
        </div>
      </div>

      <div className="flex gap-3 border-b border-[#292D35]">
        <button
          onClick={() => setActiveTab("plan")}
          className={`px-5 py-3 text-sm font-bold ${
            activeTab === "plan"
              ? "border-b-2 border-[#CCFF00] text-[#CCFF00] "
              : ""
          }`}
        >
          Todays Plan
        </button>

        <button
          onClick={() => setActiveTab("saved")}
          className={`px-5 py-3 text-sm font-bold ${
            activeTab === "saved"
              ? "border-b-2 border-[#CCFF00] text-[#CCFF00]"
              : ""
          }`}
        >
          Saved
        </button>
      </div>

      <div className="space-y-5">
        {workouts.length === 0 ? (
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
          workouts.map((workout) => (
            <div
              key={workout.id}
              className="flex flex-col gap-5 rounded-2xl border border-[#292D35] bg-[#15171C] p-5 md:flex-row"
            >
              <Image
                width={500}
                height={500}
                src={workout.image}
                alt={workout.name}
                className="h-48 w-full rounded-xl object-cover md:h-32 md:w-48"
              />

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="text-xl font-extrabold uppercase text-white">
                    {workout.name}
                  </h3>

                  <p className="mt-1 text-[#8A92A0]">{workout.equipment}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-5 text-sm text-[#9CA3AF]">
                  <span className="flex gap-1 items-center ">
                    <IoTimeOutline />
                    {workout.duration} min
                  </span>
                  <span className="flex gap-1 items-center ">
                    <FaFire />
                    {workout.caloriesBurned} kcal
                  </span>
                  <span className="flex gap-1 items-center">
                    <FaStar />
                    {workout.rating}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-10">
                <Link
                  href={`/workout/${workout.id}`}
                  className="rounded-lg bg-[#CCFF00] px-4 py-2 text-sm font-bold text-black"
                >
                  View Details
                </Link>

                {activeTab === "plan" && (
                  <button className="rounded-lg border border-[#292D35] px-4 py-2 text-sm font-bold text-white">
                    Mark as Done
                  </button>
                )}

                <button
                  onClick={() => handleRemove(workout.id)}
                  className="rounded-lg border  px-4 py-2 text-sm font-bold text-red-500"
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
