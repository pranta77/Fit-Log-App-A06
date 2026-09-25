import Image from "next/image";
import banner from "@/app/assets/banner.png";
import { FaArrowDown } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="hero rounded-lg bg-base-200 p-10 shadow-lg">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            alt="FitLog workout banner"
            src={banner}
            className="w-full max-w-sm rounded-lg"
          />
          <div>
            <p className="my-5 text-center font-semibold text-[#C2F800] lg:text-left">
              WORKOUT LIBRARY
            </p>

            <h1 className="text-center text-3xl font-bold lg:text-left lg:text-5xl">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="py-6 text-center lg:text-left">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today plan, and watch the weeks work add up.
            </p>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="#library"
                className="btn flex items-center gap-2 bg-[#C2F800] text-[#1A2312] hover:bg-[#1A2312] hover:text-[#C2F800]"
              >
                BROWSE WORKOUTS
                <FaArrowDown />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
