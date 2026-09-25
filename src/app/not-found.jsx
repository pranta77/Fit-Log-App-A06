import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <p className="text-7xl font-extrabold text-[#C2F800]">
          404
        </p>

        <h1 className="mt-4 text-3xl font-bold text-white">
          Page Not Found
        </h1>

        <p className="mt-3 text-[#9CA3AF]">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-[#C2F800] px-6 py-3 font-bold text-black hover:bg-[#1A2312] hover:text-[#C2F800]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;