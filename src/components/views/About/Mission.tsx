import React from "react";
import Image from "next/image";

const AboutMission = () => {
  return (
    <>
      <section className=" flex flex-col py-10 justify-center w-full items-center">
        <div className="    p-3 lg:p-20 rounded-xl w-full  max-w-7xl ">
          <div className=" relative lg:gap-40  flex-start w-full  lg:flex-row flex-col px-3 lg:px-0 max-w-6xl  ">
            <div className=" mt-4 lg:mt-0  lg:w-[40%] ">
              <Image
                alt="chair"
                width={300}
                height={300}
                className="w-full object-cover h-full"
                src={
                  "https://ucarecdn.com/0ca962e3-d48e-4645-a4dd-7884b9ca2f99/Group1630.png"
                }
              />
            </div>
            <div className=" flex-1  ">
              <div className="uppercase w-fit font-satoshi text-primary p-2 px-3 rounded-full text-sm border-primary/50 backdrop-blur-lg border mb-4 bg-[rgba(146,68,161,0.5)]">
                WHO WE ARE
              </div>
              <h1 className=" text-3xl lg:text-4xl leading-snug max-w-2xl  font-bold  font-satoshi">
                What makes us stand out
              </h1>
              <h4 className=" w-full  max-w-2xl font-light font-satoshi text-base  text-justify lg:text-xl mt-2 ">
                Welcome to Urban Opulence Interiors, where luxury meets
                functionality. Our expert team creates elegant, personalized
                spaces for both residential and commercial projects. We are
                dedicated to delivering bespoke solutions that enhance your
                living experience and inspire beauty in every detail.
              </h4>
            </div>
          </div>
        </div>
        <div className="   p-3 lg:px-20 rounded-xl w-full  max-w-7xl ">
          <div className=" relative lg:gap-40  flex-start w-full  lg:flex-row flex-col-reverse px-3 lg:px-0  ">
            <div className=" flex-1 mt-5 lg:mt-0  ">
              <div className="uppercase w-fit font-satoshi text-primary p-2 px-3 rounded-full text-sm border-primary/50 backdrop-blur-lg border mb-4 bg-[rgba(146,68,161,0.5)]">
                MISSION STATEMENT
              </div>
              <h1 className=" text-3xl lg:text-4xl leading-snug max-w-2xl  font-bold  font-satoshi">
                What we want to do
              </h1>
              <h4 className=" w-full max-w-2xl font-light font-satoshi text-base  text-justify lg:text-xl mt-2 ">
                Our mission is to design personalized, functional, and visually
                appealing spaces while delivering exceptional service through
                clear and open communication, ensuring every project is
                completed on time and within budget.
              </h4>
            </div>
            <div className=" mt-4 lg:mt-0  overflow-hidden lg:h-72 lg:w-[40%] ">
              <Image
                width={300}
                height={300}
                alt="chair"
                className="w-full object-cover h-full"
                src={
                  "https://ucarecdn.com/16cb0a58-887f-460f-bdd1-0b86d53652d5/IMG_20240808_154148_121.jpg"
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMission;
