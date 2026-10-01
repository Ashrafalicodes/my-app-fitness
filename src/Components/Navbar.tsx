import React from "react";
import Image from "next/image";
import Link from "next/link";

const links = (
  <>
    <li>
      <Link href='./workout' className="text-lime-400 bg-lime-950 rounded-full px-5">
        Workouts
      </Link>
    </li>

    <li>
      <Link href="./my-plan" className="text-gray-400 hover:text-white">
        My Plan
      </Link>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className="bg-[#0b0c0f] border-b border-gray-800">
      <div className="navbar min-h-13 container mx-auto px-6">

        {/* LEFT SIDE */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-[#111216] rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="FITLOG"
              width={25}
              height={25}
            />

            <span className="text-white font-bold text-sm tracking-wide">
              FITLOG
            </span>
          </div>
        </div>


        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-1">
            {links}
          </ul>
        </div>


        {/* RIGHT SIDE */}
        <div className="navbar-end gap-5">

          {/* Plan */}
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <span>Plan</span>

            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-lime-400 text-black font-bold text-[10px]">
              0
            </span>
          </div>

          {/* Saved */}
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <span>Saved</span>

            <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-700 text-gray-400 text-[10px]">
              0
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;