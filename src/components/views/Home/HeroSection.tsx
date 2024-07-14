import Button from "@/components/atom/Button";
import React from "react";
import herobg from "../../../../public/assets/herobg.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className=" w-full pt-20 relative h-[120vh] max-h-[750px] overflow-hidden bg-white  column-start items-center">
      <Image
        src={herobg}
        alt="herobg"
        className="w-full  absolute top-0 object-cover h-full"
      />
      <section className=" overflow-hidden text-center relative h-fit flex-start w-full px-3 lg:px-0 max-w-6xl">
        <div className=" flex-1  column-center  justify-start pt-10">
          <div
            data-aos="fade-up"
            className="  p-2 text-sm lg:text-base font-satoshi px-3 rounded-full  border-white border mb-4 bg-[rgba(255,255,255,0.5)]"
          >
            Luxury & Customized Interior Design Solutions.
          </div>
          <h1
            data-aos-delay="200"
            data-aos="fade-up"
            className="  font-satoshi font-bold  lg:leading-[4rem] text-3xl lg:text-6xl"
          >
            Transforming <br className="lg:hidden" /> Your Space into
            <br className="lg:hidden" /> Something Exceptional
          </h1>
          <p
            data-aos-delay="300"
            data-aos="fade-up"
            className=" font-satoshi max-w-xl text-lg leading-tight lg:text-xl font-normal mt-4 px-3 lg:pr-0 lg:pl-2"
          >
            We transform ordinary rooms into extraordinary environments that
            reflect your unique styles and needs.
          </p>
          <a href="#" data-aos="zoom-in" data-aos-delay="400">
            <Button className=" text-base font-satoshi mt-8 px-10">
              Get Started
            </Button>
          </a>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
