// "use client";

// import React, { useContext } from "react";
// import { FitLogContext } from "../context/FitLogContext";
// import { IoSaveOutline } from "react-icons/io5";

// const PlanButton = ({ workout }) => {
//   const { plan, setPlan } = useContext(FitLogContext);
//   const handlePlan = () => {
//     console.log(workout, "this is plane");
//   };
//     const addToPlan = (workout) => {
//       setPlan((prev) => {
//         const alreadyExists = prev.some((item) => item.id === workout.id);

//         if (alreadyExists) {
//           return prev;
//         }

//         return [...prev, workout];
//       });
//     };
//   setPlan([...plan, workout]);

//   return (
//     <div>
//       <button
//         onClick={() => handlePlan()}
//         className="btn bg-[#CCFF00] text-black rounded-lg"
//       >
//         <IoSaveOutline />
//         Add to today plan
//       </button>
//     </div>
//   );
// };

// export default PlanButton;



// "use client";

// import { useFitLog } from "@/app/context/FitLogContext";
// import { toast } from "react-toastify";
// import { HiOutlineArchiveBoxArrowDown } from "react-icons/hi2";
// import { IoSaveOutline } from "react-icons/io5";

// const WorkoutActions = ({ workout }) => {
//   const { addToPlan, saveForLater } = useFitLog();

//   const handleAddToPlan = () => {
//     addToPlan(workout);

//     toast.success("Added to today's plan");
//   };

//   const handleSaveForLater = () => {
//     saveForLater(workout);

//     toast.success("Saved for later");
//   };

//   return (
//     <div className="mt-5 flex gap-5">

//       <button
//         onClick={handleAddToPlan}
//         className="btn rounded-lg bg-[#CCFF00] text-black"
//       >
//         <IoSaveOutline />
//         Add to todays plan
//       </button>

//       <button
//         onClick={handleSaveForLater}
//         className="btn rounded-lg text-white"
//       >
//         <HiOutlineArchiveBoxArrowDown />
//         Save for later
//       </button>

//     </div>
//   );
// };

// export default WorkoutActions;