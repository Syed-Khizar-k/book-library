import React from "react";
import { Send } from "lucide-react";

const NewsLetter = () => {
  return (
    
      <section className="py-[115px] px-[62px] flex justify-center items-center w-full ">
        <div className="flex justify-between items-center container">
          <div className=" px-[62px] w-[500px]">
            <h1 className="capitalize text-[48px] text-[#111111] font-[600]">
              Subscribe to our news letter
            </h1>
          </div>
          <div className="w-[50%] flex flex-col gap-6">
            <p>
              Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit
              amet, consectetur. Elit adipiscing enim pharetra hac.
            </p>
            <div className="border-[#6F6F6F] border-b-2 flex justify-between items-center pb-2 ">
              <input
                type="email"
                placeholder="Enter your email addresss here"
                className="w-full py-1.5 px-3 outline-none"
              />
              <button className="text-[#ED553B] text-[20px] cursor-pointer flex justify-around items-center gap-2">
                <span>Send</span> <Send size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

  );
};
export default NewsLetter;
