import React from "react";
import Iphone from "../Image/Iphone.jpg";
import Shirt from "../Image/Shirt.jpg";
import Shoe from "../Image/Shoe.jpg";
import "../landing-page-features/Items.css";

function Items() {
  return (
    <>
      <div className="mt-[38vh]  bg-white h-screen">
        <div className="grid grid-cols-3 pt-24 ml-10">
          <div className="image-container">
            <img
              src={Iphone}
              width={200}
              height={200}
              alt="iphone"
              className="object-cover w-[50vh] h-[50vh]"
            />
            <div className="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                className="size-6 icon shadow-lg cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>

            <div>
            <h1 className=" text-[#bfbfbf] capitalize">posters</h1>
              <h1 className="pt-1 font-semibold text-lg">Posters</h1>
              <h2 className="text-[#5a5753] text-base font-bold mt-2">$99.99</h2>
            </div>
          </div>

          <div className="image-container">
            <img
              src={Shoe}
              width={200}
              height={200}
              alt="iphone"
              className="object-cover w-[50vh] h-[50vh]"
            />
            <div className="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke=" black"
                className="size-6 icon shadow-lg cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>

            <div>
            <h1 className=" text-[#bfbfbf] capitalize">posters</h1>
              <h1 className="pt-1 font-semibold text-lg">Posters</h1>
              <h2 className="text-[#5a5753] text-base font-bold mt-2">$20.99</h2>
            </div>
          </div>

          <div className="image-container">
            <img
              src={Shirt}
              width={200}
              height={200}
              alt="iphone"
              className="object-cover w-[50vh] h-[50vh]"
            />
            <div className="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke=" black"
                className="size-6 icon shadow-lg cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>

            <div>
            <h1 className=" text-[#bfbfbf] capitalize">posters</h1>
              <h1 className="pt-1 font-semibold text-lg">Posters</h1>
              <h2 className="text-[#5a5753] text-base font-bold mt-2">$5.99</h2>
            </div>
          </div>

          <div className=" w-[90vw] h-[1px] bg-black mt-32">
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Items;
