import React from "react";
import "./contact.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <div className="img-2">
        <div className="text "> 
          <div className="text-black">
          <Header />
          </div>
        
        </div>

        <div className="text font-Montserrat text-center mt-[3rem] font-[400] text-[6rem]">
          <h1 className="pt-[13rem]">Contact Us</h1>
        </div>
      </div>

      <div className="grid grid-cols-2 text-center">
        <div className="pt-[8rem] pb-[10rem]">
          <h1 className="font-Montserrat font-[500] text-[2rem] capitalize pr-[8rem] ">
            Get in Touch
          </h1>

          <div className="bg-white shadow-xl h-[30rem] w-[35rem] pb-10 ml-[5rem]">
            <form className="pt-10 pr-[2rem]" action="">
              <input
                className="bg-[#fafafa] w-[25rem] h-[3rem]  border-[1px] border-black focus:bg-white focus:border-dotted  focus:outline-none placeholder:pl-3 placeholder:text-[1.2rem]"
                type="text"
                placeholder="Your Name"
              />
              <br />
              <input
                className="bg-[#fafafa] w-[25rem] h-[3rem] border-[1px] border-black mt-5 focus:bg-white focus:border-dotted  focus:outline-none placeholder:pl-3 placeholder:text-[1.2rem]"
                type="number"
                placeholder="Phone Number"
              />
              <input
                className="bg-[#fafafa] w-[25rem] h-[3rem] border-[1px] border-black mt-5 focus:bg-white focus:border-dotted  focus:outline-none placeholder:pl-3 placeholder:text-[1.2rem]"
                type="text"
                placeholder="Email"
              />
              <input
                className="bg-[#fafafa] w-[25rem] h-[5rem] border-[1px] border-black mt-5 focus:bg-white focus:border-dotted  focus:outline-none  placeholder:pl-3 pb-12 placeholder:text-[1.2rem]"
                type="text"
                placeholder="Message"
              />
            </form>

            <button className="w-[8rem] h-[3rem] bg-green-500 mr-[19rem] mt-7 rounded font-jerry text-[1.3rem]">
              Send Now
            </button>
          </div>
        </div>

        <div className="pt-[8rem] mb-[10rem] pl-[2rem]">
          <div className="  ml-[5rem]">
            <div className="pb-4 pr-[13rem]">
              <h1 className="font-Montserrat font-[500] text-[2rem] capitalize pr-20 ">
                Talk To Us
              </h1>
            </div>

            <div className="flex pb-[4rem]">
              <div className="w-10 h-10 rounded-3xl border-[1px] border-black shadow-md ml-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 mt-[6px] ml-[8px]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>

              <div className="">
                <h1 className="mr-[6.5rem] font-display font-[700] text-[25px]">
                  Email
                </h1>
                <p className="pl-[27px]  font-jerry text-[20px] font-[400]">
                  something@tyler.com
                </p>
              </div>
            </div>

            <div className="flex pb-[4rem]">
              <div className="w-10 h-10 rounded-3xl border-[1px] border-black shadow-md ml-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 mt-[6px] ml-[8px]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </div>

              <div className="">
                <h1 className="mr-[6.5rem] font-display font-[700] text-[25px]">
                  Phone
                </h1>
                <p className="pl-[27px]  font-jerry text-[20px] font-[400]">
                  +234-090-162-336-91
                </p>
              </div>
            </div>

            <div className="flex pb-[4rem]">
              <div className="w-10 h-10 rounded-3xl border-[1px] border-black shadow-md ml-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6  mt-[6px] ml-[8px]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>

              <div className="">
                <h1 className="mr-[2rem] font-display font-[700] text-[25px]">
                  Location
                </h1>
                <p className="pl-[28px]  font-jerry text-[20px] font-[400]">
                  Nigeria, Kaduna
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
