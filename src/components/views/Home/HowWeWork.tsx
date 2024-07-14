import React from "react";
import watermark from "./../../../../public/assets/watermark.png";
import image1 from "./../../../../public/assets/whoWeAre/image1.png";
import image2 from "./../../../../public/assets/whoWeAre/image2.png";
import image3 from "./../../../../public/assets/whoWeAre/image3.png";
import image4 from "./../../../../public/assets/whoWeAre/image4.png";
import image5 from "./../../../../public/assets/whoWeAre/image5.png";
import Image, { StaticImageData } from "next/image";
import Button from "@/components/atom/Button";

type Item = {
  title: string;
  desc: string;
  image: StaticImageData;
  background: string;
  border: string;
};

const WhoWeAreItemCard = ({ item }: { item: Item }) => {
  return (
    <div
      data-aos-delay="100"
      data-aos="zoom-in"
      style={{
        background: item.background,
        borderColor: item.border,
      }}
      className=" border font-satoshi rounded-xl p-5"
    >
      <Image src={item.image} className="w-28 lg:w-32" alt={item.title} />
      <h2 className=" text-2xl mt-2">{item.title}</h2>
      <p className=" text-base">{item.desc}</p>
    </div>
  );
};

const HowWeWork = () => {
  const features = [
    {
      title: "Consultation",
      desc: "We work towards understanding your vision, needs, and budget.",
      image: image1,
      background: "#10A03F1A",
      border: "#10A03F",
    },
    {
      title: "Planning",
      desc: "We go through detailed planning and selecting materials.",
      image: image2,
      background: "#FFFFFF",
      border: "#CCCCCC",
    },
    {
      title: "Design Concept",
      desc: "We suggest initial design ideas and create mood boards.",
      image: image3,
      background: "#FFF8F8",
      border: "#8B6343",
    },
    {
      title: "Execution",
      desc: "We bring designs to life with meticulous attention to detail.",
      image: image4,
      background: "#4F0E821A",
      border: "#4F0E82",
    },
    {
      title: "Aesthetics",
      desc: "We ensure every detail is perfect before the big reveal.",
      image: image5,
      background: "#C7A7041A",
      border: "#C7A704",
    },
  ];

  return (
    <section className="column-center py-20">
      <div className="flex items-center">
        <Image src={watermark} alt="watermark" className="absolute" />
        <div className="column-center text-center items-center">
          <div
            data-aos="fade-up"
            className="uppercase w-fit font-satoshi text-primary p-2 px-3 rounded-full text-sm border-primary/50 backdrop-blur-lg border mb-4 bg-[rgba(146,68,161,0.5)]"
          >
            How We Work
          </div>
          <h1
            data-aos-delay="100"
            data-aos="fade-up"
            className="lg:text-4xl text-3xl font-center leading-snug max-w-2xl font-bold font-satoshi"
          >
            Interested in knowing
            <br className="lg:hidden" /> our thought process{" "}
            <br className="lg:hidden" /> at work?
          </h1>
          <p
            data-aos-delay="100"
            data-aos="fade-up"
            className="font-satoshi max-w-xl text-lg px-10 lg:px-0 lg:text-xl font-normal mt-4 lg:pl-2"
          >
            We transform ordinary rooms into extraordinary environments that
            reflect your unique styles and needs.
          </p>
        </div>
      </div>
      <div
        className="mt-20  relative
       z-50 w-full max-w-5xl px-3 lg:px-0 gap-3 grid lg:grid-cols-3"
      >
        {features.slice(0, 3).map((item) => (
          <WhoWeAreItemCard key={item.title} item={item} />
        ))}
      </div>
      <div className=" flex px-3 lg:px-0 justify-center w-fullitems-center">
        <div
          className=" w-fit   lg:px-40 relative
       z-50 mt-3 max-w-5xl gap-3 grid lg:grid-cols-2"
        >
          {features.slice(3, 5).map((item) => (
            <WhoWeAreItemCard key={item.title} item={item} />
          ))}
        </div>
      </div>
      <a data-aos-delay="100" data-aos="fade-up" href="/contact">
        <Button className=" text-base font-satoshi mt-8 px-10">
          Request Service
        </Button>
      </a>
    </section>
  );
};

export default HowWeWork;
