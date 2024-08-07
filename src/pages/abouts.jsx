import React from "react";
import Header from "../components/Header";
import "./abouts.css";
import Footer from "../components/Footer";

function Abouts() {
  return (
    <div>
      <div className="img-1">
        <div className="text">
          <Header />
        </div>

        <div className=" font-Montserrat text-center mt-[13rem] font-[400] text-[6rem]">
          <h1 className="text">WHO ARE WE?</h1>
        </div>
      </div>

      <div className="flex">
        <img
          src="https://images.pexels.com/photos/7148673/pexels-photo-7148673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className=" object-cover mt-[9rem] ml-[8rem] w-[33rem] h-[23rem]"
        />

        <div className="w-[20rem] ml-[5rem] mt-[9rem]">
          <h1 className="font-Montserrat font-bold text-[3rem]">Our Mission</h1>
          <p className="font-jerry w-[20rem] text-base font-[100]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            deserunt quibusdam consectetur saepe cumque, sit sed, modi minima
            iure maxime eligendi doloribus! Fugiat ratione, illo unde corrupti
            possimus expedita nam.
          </p>
        </div>
      </div>

      <div className="back mt-[10rem]">
        <div className=" mt-[14rem]">
          <div className=" bg-transparent w-[198vh] h-[30vh]">
            <div className=" justify-center text-center pt-[9rem]">
              <h1 className=" capitalize text-6xl font-display font-semibold">
                Give the Gift of a Postcard
              </h1>
              <h2 className=" capitalize font-semibold mt-4 mb-4 font-Montserrat ">
                Give the gift of a lasting memory with a postcard
              </h2>
              <button className=" capitalize bg-black text-white w-[17rem] h-[7vh] rounded-sm mt-3 tracking-[3px] text-xl font-normal font-Montserrat">
                Purchase A Postcard
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Abouts;
