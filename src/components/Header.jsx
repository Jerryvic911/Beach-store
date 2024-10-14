import  { useContext } from "react";
import "../components/Header.css";
import Sidebar from "../Sidebar";
import { Outlet, Link } from "react-router-dom";
import { ShopContext } from '../context/shop-context'

function Header() {
  const { totalItems } = useContext(ShopContext);

  return (
    <div className="pt-2 pb-3 fixed top-0 w-full h-[4rem] bg-white shadow-md z-50">
      <header className="flex justify-between">
        <div className="head-container ml-[20vh] mt-1 gap-5">
          <div className="bar">
            <Sidebar />
          </div>
          <h1 className="head-text font-Montserrat font-[500] leading-[17px] text-3xl pt-3">
              Beach Store
          </h1>
        </div>
        <div className="mr-[13vh] pt-2">
          <ul className="flex justify-evenly gap-[3rem] font-normal text-xl ">
            <div className="mt-1 flex justify-evenly gap-[3rem] font-Montserrat font-[450] ">
              <li className="hide-list-btn">
                <button className="hover:underline btn">
                  <Link to="/">Home</Link>
                </button>
              </li>
              <li  className="hide-list-btn">
                <button className="hover:underline">
                  <Link to="/about">About</Link>
                </button>
              </li>
              <li  className="hide-list-btn">
                <button className="hover:underline">
                  <Link to="/contact">Contact</Link>
                </button>
              </li>
              <Link to="/shop">
              <li  className="hide-list-btn">
                <button className="hover:underline">Shop</button>
              </li>
              </Link>
            </div>
            <li>
              <div  className="cart-profile">
                <Link to="/cart">
                  <button className="mr-4 relative">
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
                    {totalItems > 0 && (
                      <span className="absolute bottom-3 left-5 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                        {totalItems}
                      </span>
                    )}
                  </button>
                </Link>
                <Link to="/admin">
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
                </Link>
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
