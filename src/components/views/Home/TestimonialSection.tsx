import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import { BsFillCheckCircleFill, BsStarFill } from "react-icons/bs";

const TestimonialSection = () => {
  return (
    <section className=" flex flex-col py-20 justify-center w-full items-center">
      <div className="  bg-gray-100  p-3 pt-8 lg:p-20 rounded-xl w-full  max-w-7xl ">
        <div className=" relative gap-5  lg:flex-row flex-col flex-start w-full max-w-6xl  ">
          <div className=" flex-1  ">
            <div
              data-aos="fade-up"
              className="uppercase w-fit font-satoshi text-primary p-2 px-3 rounded-full text-sm border-primary/50 backdrop-blur-lg border mb-4 bg-[rgba(146,68,161,0.5)]"
            >
              WHAT THEY SAY ABOUT US
            </div>
            <h1
              data-aos-delay="100"
              data-aos="fade-up"
              className=" text-4xl   leading-tight lg:leading-snug max-w-2xl  font-bold  font-satoshi"
            >
              Hear from our <br className="lg:hidden" /> past clients
            </h1>
            <h4
              data-aos-delay="100"
              data-aos="fade-up"
              className="  lg:w-[80%] max-w-2xl font-light leading-tight font-satoshi text-lg lg:text-xl mt-2 "
            >
              We transform ordinary rooms into extraordinary environments that
              reflect your unique styles and needs.
            </h4>
          </div>
          <div className="  w-full  lg:w-[50%] gap-3  grid lg:grid-cols-2">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                data-aos-delay={(100 * index).toString()}
                data-aos="fade-up"
                className={` bg-white shadow-md  shadow-gray-200 p-4 font-satoshi rounded-xl ${
                  index === 2
                    ? "lg:invisible lg:block hidden"
                    : " block lg:visible"
                }`}
              >
                <h3 className=" font-semibold">Jane Doe</h3>
                <p className=" my-2 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                  nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
                </p>
                <div>
                  <div className=" relative w-fit rounded-full">
                    <div className="w-12 h-12 overflow-hidden bg-gray-300 relative rounded-full">
                      <img
                        src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100278.jpg?t=st=1720885278~exp=1720888878~hmac=7dbf23c959edcc72969c0a93c27ae609c1935204610128c693b54f21eb7a5cbe&w=740"
                        alt="image"
                        className="w-full h-full object-cover "
                      />
                    </div>
                    <div className="bottom-0 right-0 absolute bg-white rounded-full">
                      <BsFillCheckCircleFill className=" text-blue-700 " />
                    </div>
                  </div>
                  <div className=" flex-start gap-1 mt-3">
                    <p>4.0</p>
                    <div className=" flex-center gap-1">
                      <BsStarFill color="#F5B546" size={16} />
                      <BsStarFill color="#F5B546" size={16} />
                      <BsStarFill color="#F5B546" size={16} />
                      <BsStarFill color="#F5B546" size={16} />
                      <BsStarFill color="#F5B546" size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
