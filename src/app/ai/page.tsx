import React from "react";
import ctabg2 from "../../../public/assets/aibg.png";
import ctabg3 from "../../../public/assets/ctabg2.png";
import frame from "../../../public/assets/frame.png";
import Image from "next/image";
import Button from "@/components/atom/Button";

const Hero = () => {
  return (
    <div className=" w-full flex  flex-center bg-gradient-to-r from-purple-950 via-purple-950  to-orange-700  py-40 relative h-fit bg-primary">
      <div className="bg-gradient-to-r  absolute w-full h-full z-20 from-transparent via-[#45056f76] to-orange-900   "></div>
      <Image
        alt="background"
        src={ctabg2}
        width={1000}
        height={1000}
        className="w-full h-full opacity-60  absolute object-cover"
      />
      <Image
        alt="background"
        src={frame}
        width={1000}
        height={1000}
        className="w-full h-full  absolute object-cover"
      />
      <div className=" relative gap-20 z-50 flex-center w-full max-w-6xl  ">
        <div className=" text-center text-white column-center">
          <div className=" text-sm lg:text-base  p-2 font-satoshi px-3 rounded-full  border-white border mb-4 bg-[rgba(255,255,255,0.5)]">
            Luxury & Customized Interior Design Solutions.
          </div>
          <h1 className="  font-satoshi font-bold  leading-[4rem] text-5xl lg:text-6xl">
            Design Your Space With AI
          </h1>
          <p className=" font-satoshi max-w-xl text-lg px-20 lg:px-0 lg:text-xl font-normal mt-4 lg:pl-2">
            Bring your ideas to life by yourself with AI
          </p>
          <Button
            lightHover
            className=" bg-white mt-8 px-10  text-base text-primary"
          >
            <p className="text-primary">Get Started</p>
          </Button>
        </div>
      </div>
    </div>
  );
};
const ComingSoon = () => {
  return (
    <div className=" w-full flex mt-1  flex-center bg-gradient-to-b from-[#4F0E82] to-[#36095A]  py-20 lg:py-40 relative h-fit bg-primary">
      <Image
        alt="background"
        src={ctabg3}
        width={1000}
        height={1000}
        className="w-full h-full opacity-60 absolute object-cover"
      />
      <Image
        alt="background"
        src={frame}
        width={1000}
        height={1000}
        className="w-full h-full  absolute object-cover"
      />
      <div className=" relative gap-20  flex-center w-full max-w-6xl  ">
        <div className=" text-center column-center">
          <h1 className=" uppercase text-4xl lg:text-[8rem] leading-snug max-w-6xl text-white font-bold  font-satoshi">
            Coming Soon!!!
          </h1>
        </div>
      </div>
    </div>
  );
};
const AIPage = () => {
  return (
    <main>
      <Hero />
      <ComingSoon />
    </main>
  );
};

export default AIPage;
