import React from "react";
import "../components/Header.css";
import Sidebar from "../Sidebar";
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <div className="pt-2">
      <header className="flex justify-between">
        <div className="ml-[20vh] mt-3 flex gap-5">
          <div className="bar">
            <Sidebar />
          </div>
          <h1>
            <button className="font-Montserrat font-[500] leading-[17px] text-3xl pt-3">
              Beach Store
            </button>
          </h1>
        </div>
        <div className="mr-[13vh] mt-3">
          <ul className="flex justify-evenly gap-[3rem] font-normal text-xl">
            <div className="mt-1 flex justify-evenly gap-[3rem] font-Montserrat font-[450]">
              <li>
                <button className="hover:underline btn">
                  <Link to="/">Home</Link>
                </button>
              </li>
              <li>
                <button className="hover:underline">
                  <Link to="/about">About</Link>
                </button>
              </li>
              <li>
                <button className="hover:underline">
                  <Link to="/contact">Contact</Link>
                </button>
              </li>
              <li>
                <button className="hover:underline">Shop</button>
              </li>
            </div>
            <li>
              <div>
                <button className="mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-8 hover:underline"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-8 hover:underline"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Header;
