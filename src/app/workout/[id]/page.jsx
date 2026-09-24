import Image from "next/image";
import { HiOutlineArchiveBoxArrowDown } from "react-icons/hi2";
import { IoSaveOutline } from "react-icons/io5";
import WorkoutActions from "./workoutActions";

const PromiseData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const WorkDetailPage = async ({ params }) => {
  const { id } = await params;
  const worksData = await PromiseData();
  const workout = worksData.find((work) => work.id === Number(id));

  return (
    <main className="min-h-screen bg-[#0B0D0F] py-10 container mx-auto">
      <div className="p-5">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Image
              width={800}
              height={800}
              src={workout.image}
              alt={workout.name}
              className="h-full  w-full rounded-3xl object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold uppercase text-white md:text-5xl">
              {workout.name}
            </h1>
            <p className="mt-5 text-lg leading-8 text-gray-400">
              {workout.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {workout.muscleGroups.map((muscle, index) => (
                <span
                  key={index}
                  className="rounded-full bg-[#C2F800] px-5 py-2 text-sm font-bold uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl border border-[#292D35] bg-[#15171C]">
              <div className="border-b border-[#292D35] px-5 py-4">
                <h2 className="text-lg font-bold text-white">KEY SPECS</h2>
              </div>
              <div className="flex justify-between border-b border-[#292D35] px-5 py-4">
                <span className="font-semibold text-gray-400">EQUIPMENT</span>

                <span className="text-right text-white">
                  {workout.equipment}
                </span>
              </div>
              <div className="flex justify-between border-b border-[#292D35] px-5 py-4">
                <span className="font-semibold text-gray-400">DIFFICULTY</span>

                <span className="text-white">{workout.difficulty}</span>
              </div>

              <div className="flex justify-between border-b border-[#292D35] px-5 py-4">
                <span className="font-semibold text-gray-400">SETS</span>

                <span className="text-white">{workout.sets}</span>
              </div>
              <div className="flex justify-between border-b border-[#292D35] px-5 py-4">
                <span className="font-semibold text-gray-400">REPS</span>

                <span className="text-white">{workout.reps}</span>
              </div>
              <div className="flex justify-between border-b border-[#292D35] px-5 py-4">
                <span className="font-semibold text-gray-400">DURATION</span>

                <span className="text-white">{workout.duration} min</span>
              </div>
              <div className="flex justify-between border-b border-[#292D35] px-5 py-4">
                <span className="font-semibold text-gray-400">CALORIES</span>

                <span className="text-white">
                  {workout.caloriesBurned} kcal
                </span>
              </div>
              <div className="flex justify-between px-5 py-4">
                <span className="font-semibold text-gray-400">RATING</span>

                <span className="text-white"> {workout.rating}</span>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-2xl font-extrabold uppercase text-white">
                INSTRUCTIONS
              </h2>

              <div className="mt-5 space-y-4">
                {workout.instructions.map((instruction, index) => (
                  <div key={index} className="flex gap-4">
                    {/* Number */}
                    <span>{index + 1}</span>

                    {/* Instruction */}
                    <p className="leading-7 text-gray-400">{instruction}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-10 mt-5">
              <WorkoutActions workout={workout} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkDetailPage;
