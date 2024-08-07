import React from "react";
import "../landing-page-features/testimonial.css"

function Testimonial() {
  return (
    <div>
      <div className=" text-center">
        <h1 className=" uppercase font-semibold font-display text-4xl pt-20 pb-5">
          What our customers say
        </h1>
      </div>

      <div className="ml-[4rem] pt-10 grid grid-cols-3">
        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-7 ml-[7cm]"
            >
              <path d="M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72z" />
            </svg>
          </div>
          <div className="pb-2">
            <p className=" w-[50vh]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              dicta nobis, unde magni voluptatibus nesciunt nam rem ipsam
              incidunt modi obcaecati ipsa quisquam possimus, ipsum saepe
              recusandae! Eaque, ex rem.
            </p>
          </div>
          <div className=" rounded-full w-10 h-10 bg-white shadow-md pt-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 ml-2"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h2 className="font-jerry font-[500] text-base tracking-[1px]">Jeremiah</h2>
        </div>

        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-7 ml-[7cm]"
            >
              <path d="M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72z" />
            </svg>
          </div>
          <div className="pb-2">
            <p className=" w-[50vh]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              dicta nobis, unde magni voluptatibus nesciunt nam rem ipsam
              incidunt modi obcaecati ipsa quisquam possimus, ipsum saepe
              recusandae! Eaque, ex rem.
            </p>
          </div>
          <div className=" rounded-full w-10 h-10 bg-white shadow-md pt-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 ml-2"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h2 className="font-jerry font-[500] text-base tracking-[1px]">Harry</h2>
        </div>

        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-7 ml-[7cm]"
            >
              <path d="M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72z" />
            </svg>
          </div>
          <div className="pb-2">
            <p className=" w-[50vh]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              dicta nobis, unde magni voluptatibus nesciunt nam rem ipsam
              incidunt modi obcaecati ipsa quisquam possimus, ipsum saepe
              recusandae! Eaque, ex rem.
            </p>
          </div>
          <div className=" rounded-full w-10 h-10 bg-white shadow-md pt-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 ml-2"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h2 className="font-jerry font-[500] text-base tracking-[1px]">Happiness</h2>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
