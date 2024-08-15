"use client";
import React, { Ref, useEffect, useRef, useState } from "react";
import gridBg from "../../../../public/assets/gridbg.png";
import Image from "next/image";
import Swiper from "swiper";
import { Swiper as SwiperInstance } from "swiper/types";
import { BsArrowUpLeft, BsArrowUpRight } from "react-icons/bs";
import Button from "@/components/atom/Button";
import { Autoplay } from "swiper/modules";
import { FileInfo, listOfFiles } from "@uploadcare/rest-client";
import uploadcareSimpleAuthSchema from "@/utils/galleryCDN";

const PortolioSection = () => {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [images, setImages] = useState<FileInfo[]>([]);

  const fetchPortfolio = async () => {
    try {
      const result = await listOfFiles(
        {},
        { authSchema: uploadcareSimpleAuthSchema }
      );
      if (result) {
        setImages(result.results);
      }
    } catch (e) {
      console.log(e);
    }
  };

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

    fetchPortfolio();

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
            {images?.map((image, index) => (
              <div
                key={index}
                className="swiper-slide overflow-hidden h-[400px]  w-[300px] "
              >
                <Image
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                  src={image.originalFileUrl as string}
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
