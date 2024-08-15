import React from "react";
import { BsFillCheckCircleFill, BsStarFill } from "react-icons/bs";
import test1 from "../../../../public/assets/test1.png";
import test2 from "../../../../public/assets/test2.png";
import test3 from "../../../../public/assets/test3.png";
import test4 from "../../../../public/assets/test4.png";
import Image from "next/image";

const TestimonialSection = () => {
  const testimonial = [
    {
      name: "Afolabi Oluwasegun",
      content:
        "I recently had the pleasure of working with Urban Opulence Interior for a complete redesign of my home, and I couldn’t be happier with the results. From the initial consultation to the final reveal, the team displayed exceptional professionalism, creativity, and attention to detail. They listened carefully to my ideas and preferences, offering insightful suggestions and incorporating my vision seamlessly into the design.",
      image: test1,
    },
    {
      name: "Mr Stephen Okon",
      content:
        "UrbanOpulenceInteriors did a great job at renovating the new space I got. It was quite easy. Everything, right from to consultation to the delivery, was with professionalism. I also liked how I was carried along all through the working process. I got what I needed and the quality was satisfactory.",
      image: test2,
    },
    {
      name: "Olaniyi Oluwaseyi Israel",
      content:
        "Urban Opulence interior is one of the best in the industry, they did wonderful a job in making my home luxurious as can be, I had no complaint because they got the job done neatly and on time. Kudos 👍🏽",
      image: test3,
    },
    {
      name: "Daniel Ojo",
      content:
        "I needed to work on my personal office space and upgrade things a little bit. I got in contact UrbanOpulenceInteriors and I really applaud how they carried my carried ideas and even introduced me to a better design. I didn't have to talk much and the delivery was prompt. Every moment was worth it.",
      image: test4,
    },
  ];
  return (
    <section className=" flex flex-col py-20 justify-center w-full items-center">
      <div className="  bg-gray-100  p-3 pt-8 lg:p-20 rounded-xl w-full  max-w-7xl ">
        <div className=" relative gap-5  flex-col flex-start w-full max-w-6xl  ">
          <div className=" flex-1 flex flex-col justify-center items-center w-full text-center  ">
            <div
              data-aos="fade-up"
              className="uppercase  font-satoshi text-primary p-2 px-3 rounded-full text-sm border-primary/50 backdrop-blur-lg border mb-4 bg-[rgba(146,68,161,0.5)]"
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
              We take immense pride in transforming spaces and bringing our
              clients&apos; visions to life. But don&apos;t just take our word
              for it. Here&apos;s what our satisfied clients have to say about
              their experiences with us. Discover how our dedication to
              elegance, functionality, and personalized design has left a
              lasting impression.
            </h4>
          </div>
          <div className="  w-full mt-9 lg:w-full gap-3  grid lg:grid-cols-2">
            {testimonial.map((item, index) => (
              <div
                key={index}
                data-aos-delay={(100 * index).toString()}
                data-aos="fade-up"
                className={` bg-white shadow-md  shadow-gray-200 p-4 font-satoshi rounded-xl`}
              >
                <h3 className=" font-semibold">{item.name}</h3>
                <p className=" my-2 text-sm">{item.content}</p>
                <div>
                  <div className=" relative w-fit rounded-full">
                    <div className="w-12 h-12 overflow-hidden bg-gray-300 relative rounded-full">
                      <Image
                        src={item.image}
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
