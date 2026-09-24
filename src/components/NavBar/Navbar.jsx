"use client";

import Image from "next/image";
import React from "react";
import logo from "@/app/assets/logo.png";
import Link from "next/link";
import { useFitLog } from "@/context/FitLogContext";

const Links = (
  <>
    <li className="text-[#C2F800] font-bold rounded-2xl bg-[#1A2312]">
      <Link href="/workout">Workouts</Link>
    </li>

    <li>
      <Link href="/my-plan">My Plan</Link>
    </li>
  </>
);
const Navbar = () => {
    const { plan, saved } = useFitLog();
  return (
    <div className="container mx-auto">
      <div className="navbar bg-neutral shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <div className="flex items-center ">
            <Image src={logo} alt="Logo" width={30} height={30} />
            <Link href="/" className="btn btn-ghost text-xl font-bold">
              FITLOG
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end gap-3">

          {/* PLAN */}
          <div className="rounded-full bg-[#C2F800] px-4 py-2 text-sm font-bold text-black">
            Plan {plan.length}
          </div>

          {/* SAVED */}
          <div className="rounded-full border border-[#C2F800] px-4 py-2 text-sm font-bold text-white">
            Saved {saved.length}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
