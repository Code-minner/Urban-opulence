import Image from "next/image";
import React from "react";

import ctaBG from "../../../../public/assets/ctaBG.png";

import home from "../../../../public/assets/home.png";
import Button from "@/components/atom/Button";

const CtaSection_1 = () => {
  return (
    <div className=" w-full flex  flex-center  py-10 relative h-fit bg-primary">
      <Image
        alt="background"
        src={ctaBG}
        width={1000}
        height={1000}
        className="w-full h-full absolute object-cover"
      />
      <div className=" relative gap-10 lg:gap-20  flex-center  lg:flex-row flex-col w-full lg:px-0 px-3 max-w-6xl  ">
        <div className=" column-center text-center lg:text-start lg:column-start">
          <div
            data-aos="fade-up"
            className=" uppercase w-fit  font-satoshi  text-primary  p-2 px-3 rounded-full text-sm border-white/50 backdrop-blur-lg border mb-4 bg-[rgba(255,255,255,0.5)]"
          >
            Who We Are
          </div>
          <h1
            data-aos-delay="100"
            data-aos="fade-up"
            className=" text-3xl lg:text-5xl lg:leading-snug leading-tight  max-w-2xl text-white font-bold  font-satoshi"
          >
            Transforming <br className="lg:hidden" /> Your Space into
            <br className="lg:hidden" />
            Something Exceptional
          </h1>
          <h4
            data-aos-delay="200"
            data-aos="fade-up"
            className=" text-white max-w-2xl font-light font-satoshi  text-lg lg:text-xl mt-2 "
          >
            We transform ordinary rooms into extraordinary environments that
            reflect your unique styles and needs.
          </h4>
          <a href="/contact" data-aos-delay="300" data-aos="fade-up">
            <Button
              lightHover
              className="text-base bg-white mt-5 lg:mt-8 text-primary"
            >
              <p className="text-primary">Explore Our Solution</p>
            </Button>
          </a>
        </div>
        <div data-aos-delay="400" data-aos="fade-up">
          <Image src={home} alt="home" />
        </div>
      </div>
    </div>
  );
};

export default CtaSection_1;
