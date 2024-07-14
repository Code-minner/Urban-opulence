import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import chair from "../../../../public/assets/chair.png";
import Image from "next/image";

const AboutMission = () => {
  return (
    <section className=" flex flex-col py-10 justify-center w-full items-center">
      <div className="  bg-gray-100  p-3 pt-10 lg:p-20 rounded-xl w-full  max-w-7xl ">
        <div className=" relative gap-5  flex-start w-full  lg:flex-row flex-col px-3 lg:px-0 max-w-6xl  ">
          <div className=" flex-1  ">
            <div className="uppercase w-fit font-satoshi text-primary p-2 px-3 rounded-full text-sm border-primary/50 backdrop-blur-lg border mb-4 bg-[rgba(146,68,161,0.5)]">
              MISSION STATEMENT
            </div>
            <h1 className=" text-3xl lg:text-4xl leading-snug max-w-2xl  font-bold  font-satoshi">
              What we want to do
            </h1>
            <h4 className=" w-full lg:w-[80%] max-w-2xl font-light font-satoshi text-base  text-justify lg:text-xl mt-2 ">
              Our mission is to design personalized, functional, and visually
              appealing spaces while delivering exceptional service through
              clear and open communication, ensuring every project is completed
              on time and within budget.
            </h4>
          </div>
          <div className=" mt-4 lg:mt-0  lg:w-[40%] ">
            <Image
              alt="chair"
              className="w-full object-cover h-full"
              src={chair}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
