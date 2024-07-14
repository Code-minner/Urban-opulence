"use client";
import React, { Ref, useEffect, useRef } from "react";
import gridBg from "../../../../public/assets/gridbg.png";
import Image from "next/image";
import Swiper from "swiper";
import { Swiper as SwiperInstance } from "swiper/types";
import { BsArrowUpLeft, BsArrowUpRight } from "react-icons/bs";
import Button from "@/components/atom/Button";
import { Autoplay } from "swiper/modules";

const PortolioSection = () => {
  const swiperRef = useRef<SwiperInstance | null>(null);

  useEffect(() => {
    // Initialize Swiper
    const swiperInstance = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 20,
      direction: "horizontal",
      loop: true,
      modules: [Autoplay],
      autoplay: {
        delay: 3000,
      },
    });

    swiperRef.current = swiperInstance;

    return () => {
      // Clean up Swiper instance
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className=" flex flex-col justify-center relative  py-20 overflow-hidden items-center w-full">
      <Image src={gridBg} alt="gridBG" className="   absolute" />
      <div className=" w-full max-w-6xl flex flex-col justify-center items-center  relative">
        <div
          data-aos="fade-up"
          className="  p-2 px-3 font-satoshi rounded-full  border-[#10A03F] border mb-4 bg-[#10A03F1A]"
        >
          Luxury & Customized Interior Design Solutions.
        </div>
        <div className="swiper-container relative mt-5 lg:mt-3 w-full ">
          <button
            onClick={goToPrevSlide}
            className=" absolute w-12 flex-center  rounded-full z-[100] h-12 hover:bg-purple-700  cursor-pointer bg-primary left-10 top-0"
          >
            <BsArrowUpLeft size={24} color="white" />
          </button>
          <button
            className=" absolute w-12 flex-center  rounded-full z-[100] h-12 bg-primary hover:bg-purple-700  cursor-pointer  right-10 top-0"
            onClick={goToNextSlide}
          >
            <BsArrowUpRight size={24} color="white" />
          </button>
          <div className="swiper-wrapper pl-2 lg:pl-0 mt-8">
            {[1, 2, 3, 4, 4, 5, 6, 6].map((item) => (
              <div className="swiper-slide overflow-hidden h-[400px]  w-[300px] bg-gray-300">
                <img
                  className="w-full h-full object-cover"
                  src="https://img.freepik.com/free-photo/modern-styled-entryway_23-2150695795.jpg?t=st=1720898423~exp=1720902023~hmac=bf99c8f533d27c96ea62ed01a411d690c4d109a738d01c1c591c0dbffe1184f4&w=360"
                  alt="image"
                />
              </div>
            ))}
          </div>
        </div>
        <a href="/portfolio">
          <Button className=" text-base font-satoshi mt-8 px-10">
            Explore Full Portfolio
          </Button>
        </a>
      </div>
    </div>
  );
};

export default PortolioSection;
