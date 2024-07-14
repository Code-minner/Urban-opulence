import React from "react";
import herobg from "../../../../public/assets/gridbg.png";
import gradient from "../../../../public/assets/gradient.png";
import Image from "next/image";

const ContactUsHero = () => {
  return (
    <section className=" w-full pt-20 relative h-[60vh] lg:h-[90vh] max-h-[750px] overflow-hidden bg-white  column-start items-center">
      <Image
        src={herobg}
        alt="herobg"
        className="w-full  absolute top-0 object-cover h-full"
      />

      <Image
        src={gradient}
        alt="gradient"
        className="w-full  absolute top-0 object-cover h-full"
      />
      <section className="px-5 lg:px-0 overflow-hidden text-center relative h-fit flex-start w-full max-w-6xl">
        <div className=" flex-1  column-center  justify-start pt-10 lg:pt-20">
          <div className="  p-2 text-sm lg:text-base font-satoshi px-3 rounded-full  border-white border mb-4 bg-[rgba(255,255,255,0.5)]">
            Luxury & Customized Interior Design Solutions.
          </div>
          <h1 className=" mt-8 font-satoshi font-bold  leading-[4rem] text-4xl lg:text-7xl">
            Contact Us
          </h1>
          <p className=" font-satoshi max-w-2xl  text-lg lg:text-2xl mt-8 pl-2">
            We transform ordinary rooms into extraordinary environments that
            reflect your unique styles and needs.
          </p>
        </div>
      </section>
    </section>
  );
};

export default ContactUsHero;
