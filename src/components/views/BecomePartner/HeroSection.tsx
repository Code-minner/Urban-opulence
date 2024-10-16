import Button from "@/components/atom/Button";
import Image from "next/image";
import React from "react";
import ctaBG from "../../../../public/assets/ctaBG.png";
import partner from "../../../../public/assets/partner.svg";
const HeroSection = () => {
  return (
    <div className=" w-full flex  flex-center  py-20 relative h-fit bg-primary">
      <Image
        alt="background"
        src={ctaBG}
        width={1000}
        height={1000}
        className="w-full h-full absolute object-cover"
      />
      <div className=" flex-1  flex flex-col justify-center text-white relative z-50 items-center w-full pt-10 lg:pt-20">
        <div
          data-aos-delay="200"
          data-aos="fade-up"
          className="  p-2 text-sm lg:text-base font-satoshi px-3 rounded-full  border-white border mb-4 bg-[rgba(255,255,255,0.5)]"
        >
          Luxury & Customized Interior Design Solutions.
        </div>
        <h1
          data-aos-delay="300"
          data-aos="fade-up"
          className=" mt-8 font-satoshi text-center font-bold  leading-[3rem] text-4xl lg:text-6xl"
        >
          Want to Become a Partner?
        </h1>
        <div data-aos-delay="400" data-aos="fade-up">
          <Button
            lightHover
            className=" bg-white mt-8 px-10  text-base text-primary"
          >
            <p className="text-primary">Become a Partner</p>
          </Button>
        </div>

        <Image
          data-aos-delay="500"
          data-aos="fade-up"
          alt="background"
          src={partner}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default HeroSection;
