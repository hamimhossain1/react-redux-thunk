import React from "react";
import logo from "../../../src/assets/myLogo.png";

const Navbar = () => {
  return (
    <div className="">
      <div class="navbar bg-gray-100">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">REDUX</a>
        </div>
        <div class="flex-none gap-2">
          <div class="form-control">
            <input
              type="text"
              placeholder="Search"
              class="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              {/* <div class="w-10 rounded-full">
                <img src={logo} alt="" />
              </div> */}
            </label>
            <ul
              tabindex="0"
              class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
