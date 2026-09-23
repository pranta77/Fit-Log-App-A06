import WorkoutCard from "../workoutCard/page";

const PromiseData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
  //  console.log(data);
};

const WorkoutPage = async () => {
  const worksData = await PromiseData();
  return (
    <div className="container mx-auto ">
      <div>
        <h1 className="text-3xl font-bold">THE LIBRARY</h1>
        <p className=" text-[#9CA3AF] text-sm mt-2">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-10 ">
        {worksData.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default WorkoutPage;
