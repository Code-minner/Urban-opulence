import Image from "next/image";
import React from "react";
import watermark from "../../../../public/assets/watermark.png";
import Button from "@/components/atom/Button";
import box from "../../../../public/assets/box.svg";
import home from "../../../../public/assets/home.svg";
import cash from "../../../../public/assets/cash.svg";
import ring from "../../../../public/assets/ring.svg";
import star from "../../../../public/assets/star.svg";
import chart from "../../../../public/assets/chart.svg";
import basic from "../../../../public/assets/basic.svg";
import freemium from "../../../../public/assets/freemium.svg";
import premium from "../../../../public/assets/premium.svg";
const Content = () => {
  const features = [
    {
      icon: box,
      desc: "You get a special package containing the business brochure, the Urban Opulence Interiors Merch, your business card/ID, welcoming you as an official partner.",
      highlight: "Urban Opulence Interiors", // No highlight for this item
    },
    {
      icon: home,
      desc: "You get exclusive access to various packages from Urban Opulence Interiors as they come as well as free pass into events hosted by the brand. ",
      highlight: "Urban Opulence Interiors", // Highlight this portion
    },
    {
      icon: chart,
      desc: "You get to focus on the long-term strategic goals of the company, aligning operations with the business's vision and objectives",
      highlight: "", // Highlight this portion
    },
    {
      icon: cash,
      desc: "As a managing partner you get a 10% commission on every client that works with Urban Opulence Interiors through you",
      highlight: "Urban Opulence Interiors", // No highlight for this item
    },
    {
      icon: star,
      desc: "As managing partner, you are welcome to providing views that ensure that the company invests in areas that drive growth and success",
      highlight: "managing partner", // Highlight this portion
    },
    {
      icon: ring,
      desc: "As part of the managing partners, you get to actively identify areas for improvement and implement changes to enhance efficiency and productivity",
      highlight: "", // Highlight this portion
    },
  ];

  const packages = [
    {
      icon: basic,
      title: "Silver Touch",
      price: "₦100,000",
      desc: [
        `You get a special package containing the business brochure, the Urban Opulence Interiors Merch, your business card/ID, welcoming you as an official partner.`,
        `As a managing partner you get a 5% commission on every client that works with Urban Opulence Interiors through you.`,
        `Guaranteed Returns: Earn a competitive annual return of 10% on your investment.`,
        `Exclusive Updates: Receive quarterly reports detailing company progress, upcoming projects, and market insights.`,
        `You get to focus on the long-term strategic goals of the company, aligning operations with the business's vision and objectives.`,
        `Investor Recognition: Your name will be featured on our website's “Silver Investors” section, showcasing your support.`,
        `Exclusive Discounts: You enjoy a 5% discount on all interior design services and products offered by Urban Opulence Interiors.`,
        `Early Access: You get early access to new product launches and exclusive design collections.`,
        `Personalized consultations: You receive one complimentary consultation with our top interior designers every year`,
      ],
    },
    {
      icon: freemium,
      title: "Golden Elegance",
      price: "₦250,000",
      desc: [
        `You get a special package containing the business brochure, the Urban Opulence Interiors Merch, your business card/ID, welcoming you as an official partner`,
        `As a managing partner you get a 7.5% commission on every client that works with Urban Opulence Interiors through you.`,
        `Enhanced Returns: Benefit from a 12% annual return on your investment`,
        `Exclusive Events: Receive invitations to Urban Opulence Interiors' design workshops and networking events`,
        `You get to focus on the long-term strategic goals of the company, aligning operations with the business's vision and objectives.`,
        `Exclusive Updates: Receive quarterly reports detailing company progress, upcoming projects, and market insights.`,
        `Investor Recognition: Prominent feature on our website's “Golden Investors” section.`,
        `You Exclusive Discounts: You enjoy a 10% discount on all interior design services and products`,
        `Early Access: You get early access to new product launches and exclusive design collections.`,
        `Personalized Design Service: Receive two complimentary consultations with our top interior designers annually with a dedicated project manager for your interior design needs.`,
      ],
    },
    {
      icon: premium,
      title: "Platinum Opulence",
      price: "₦500,000",
      desc: [
        `You get a special package containing the business brochure, the Urban Opulence Interiors Merch, your business card/ID, welcoming you as an official partner.`,
        `As a managing partner you get a 10% commission on every client that works with Urban Opulence Interiors through you.`,
        `Premium Returns: You receive a return of up to 20% on your investment at the end of the year and other packages.`,
        `Exclusive Discounts: You enjoy a 15% discount on all interior design services and products.`,
        `Premium VIP Experience: You get access to private events, including one-on-one sessions with top industry designers, luxury home tours, and early-bird deals on limited-edition collections`,
        `Strategic Involvement: Participate in semi-annual strategy meetings to provide input and insights.`,
        `You get to focus on the long-term strategic goals of the company, aligning operations with the business's vision and objectives`,
        `Investor Recognition: Featured prominently on our website's “Platinum Investors” section and in all our marketing materials.`,
        `Early Access: You get early access to new product launches and exclusive design collections.`,
        `Comprehensive Design Package: You receive three complimentary consultations with our top interior designers annually, plus priority project execution and a full design report for your projects.`,
      ],
    },
  ];
  return (
    <div className="w-full justify-center flex flex-col items-center">
      <div className="w-full max-w-7xl flex flex-col items-center lg:px-0 justify-center px-5 py-10">
        <div className="flex flex-col  relative text-center justify-center w-full items-center">
          <Image src={watermark} alt="watermark" className="absolute -top-20" />
          <div className="uppercase w-fit font-satoshi text-primary p-2 px-3 rounded-full text-sm border-primary/50 backdrop-blur-lg border mb-4 bg-[rgba(146,68,161,0.5)]">
            BENEFITS
          </div>
          <h1 className="text-3xl lg:text-4xl leading-snug max-w-2xl font-bold font-satoshi">
            Managing Partner Benefits
          </h1>
          <p className="mt-3 text-lg lg:text-2xl">
            At Urban Opulence Interiors, You invest in us, we invest in you
            also.
          </p>
        </div>
        <div className="grid  relative z-50 lg:px-20 lg:grid-cols-2 gap-5 py-10 grid-cols-1">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-2xl shadow-[rgba(100,100,100,0.2)]"
            >
              <div className="w-12 h-12  flex justify-center items-center rounded-full border-2 border-primary">
                <Image
                  alt="icon"
                  src={item.icon}
                  width={100}
                  height={100}
                  className="w-6 h-6"
                />
              </div>
              <p className="font-satoshi mt-3 font-medium text-base">
                {item.highlight ? (
                  <>
                    {item.desc.split(item.highlight)[0]}
                    <span className="text-primary">{item.highlight}</span>
                    {item.desc.split(item.highlight)[1]}
                  </>
                ) : (
                  item.desc
                )}
              </p>
            </div>
          ))}
        </div>
        <Button className=" w-full mb-20 lg:w-[50%]  text-base font-satoshi mt-10 px-10">
          Become a Managing Partner
        </Button>
        <div className="flex flex-col  relative text-center justify-start items-center">
          <div className="uppercase w-fit font-satoshi text-primary p-2 px-3 rounded-full text-sm border-primary/50 backdrop-blur-lg border mb-4 bg-[rgba(146,68,161,0.5)]">
            PACKAGES
          </div>
          <h1 className="text-3xl lg:text-4xl leading-snug max-w-2xl font-bold font-satoshi">
            Managing Partner Packages
          </h1>
          <p className="mt-3 text-lg lg:text-2xl ">
            At Urban Opulence Interiors, You invest in us, we invest in you
            also.
          </p>
        </div>
        <div className="grid  relative z-50 lg:px-20 w-full gap-5 py-10 grid-cols-1">
          {packages.map((item, index) => (
            <div
              key={index}
              className={`bg-[#CAB7DA66] p-5  pt-10 w-full rounded-xl border-primary/50 border  shadow-[rgba(100,100,100,0.2)] ${
                index === 1 && " lg:translate-x-10"
              }`}
            >
              <div className="flex flex-col lg:flex:row items-center w-full relative justify-between">
                <p className=" text-lg font-bold text-primary">{item.title}</p>
                <div className=" relative  flex-1 justify-center items-center flex ">
                  <Image
                    alt="icon"
                    src={item.icon}
                    width={300}
                    height={300}
                    className={` my-3 lg:my-0  lg:absolute self-center${
                      index === 1
                        ? "w-10 h-10"
                        : index === 0
                        ? "w-10 h-10"
                        : "w-10 h-10"
                    }`}
                  />
                </div>
                <p className=" text-lg font-bold text-primary">{item.price}</p>
              </div>
              <div className=" p-10 text-[#575555]">
                <ul className=" list-disc">
                  {item.desc.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
