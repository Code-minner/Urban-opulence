import React from "react";
import ctabg2 from "../../../../public/assets/ctabg2.png";
import frame from "../../../../public/assets/frame.png";
import Image from "next/image";
import Button from "@/components/atom/Button";

const CtaSection_2 = () => {
  return (
    <div className=" w-full flex  flex-center bg-gradient-to-b from-[#4F0E82] to-[#36095A]  py-40 relative h-fit bg-primary">
      <Image
        alt="background"
        src={ctabg2}
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
          <h1
            data-aos="fade-up"
            className="text-3xl lg:text-6xl lg:leading-snug max-w-4xl text-white font-bold  font-satoshi"
          >
            Transforming <br className="lg:hidden" /> Your Space into
            <br className="lg:hidden" /> Something Exceptional
          </h1>
          <h4
            data-aos-delay="100"
            data-aos="fade-up"
            className=" text-white max-w-2xl px-5 pt-5 lg:pt-0 lg:px-0 leading-tight font-light font-satoshi  text-lg lg:text-xl mt-3"
          >
            We transform ordinary rooms into extraordinary environments that
            reflect your unique styles and needs.
          </h4>
          <a href="/contact" data-aos-delay="100" data-aos="fade-up">
            <Button
              lightHover
              className=" bg-white mt-8 px-10 text-base text-primary"
            >
              <p className="text-primary">Contact Us</p>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CtaSection_2;
