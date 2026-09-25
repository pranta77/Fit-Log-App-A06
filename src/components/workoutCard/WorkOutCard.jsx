// "use client";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { GoDot } from "react-icons/go";
import { IoTimeOutline } from "react-icons/io5";

const WorkoutCard = ({ workout }) => {
  
  
  return (
    <Link href={`/workout/${workout.id}`}>
      <div className="overflow-hidden rounded-3xl border border-[#20242E] bg-[#20242E]">
        <Image
          src={workout.image}
          alt={workout.name}
          width={500}
          height={290}
          className="h-73 w-full object-cover"
        />
        {/* Content */}
        <div className="p-6">
          <div className="mb-6 flex gap-3">
            {workout.muscleGroups.map((muscle, index) => (
              <div
                key={index}
                className="rounded-full bg-[#C2F800] px-4 py-1.5 text-sm font-bold text-black"
              >
                {muscle}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-extrabold uppercase text-white">
            {workout.name}
          </h2>
          <p className="mt-2 text-[#9297A1]">{workout.equipment}</p>
          <div className="divider" />

          <div className="flex justify-between text-[#9297A1]">
            <div className="flex items-center gap-1">
              <IoTimeOutline />
              <span> {workout.duration} min</span>
            </div>

            <div className="flex items-center gap-1">
              <GoDot />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1">
              <FaStar />
              <span>{workout.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
