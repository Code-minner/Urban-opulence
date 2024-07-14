import Image from "next/image";
import React, { ReactNode } from "react";
import { BiGlobe, BiPhone } from "react-icons/bi";
import { BsMailbox } from "react-icons/bs";
import { PiMapPinFill } from "react-icons/pi";
import logowhite from "../../../public/assets/logowhite.png";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const services = [
    "Custom Furniture",
    "Commercial Design",
    "Renovation Projects",
    "Residential Design",
  ];

  const contact = [
    {
      type: "address",
      value: "19, Iroko Estate Lagos, Nigeria",
    },
    {
      type: "phone",
      value: "08108744697",
    },
    {
      type: "email",
      value: "info@opulenceinteriors.com.ng",
    },
    {
      type: "website",
      value: "www.opulenceinteriors.com.ng",
    },
  ];

  const renderIcon = (type: string): ReactNode => {
    switch (type) {
      case "address":
        return <PiMapPinFill size={20} />;

      case "phone":
        return <BiPhone size={20} />;

      case "email":
        return <MdEmail size={20} />;

      case "website":
        return <BiGlobe size={20} />;
      default:
    }
  };
  return (
    <div className=" bg-[#161313] mt-10 font-satoshi flex flex-col justify-center items-center text-white w-full py-20">
      <div className="  w-full max-w-6xl gap-x-20 lg:gap-y-0 gap-y-14 px-3 lg:px-0 lg:flex-row flex-col flex items-center ">
        <div className="w-full lg:w-[40%]">
          <Image className="w-44" alt="logowhite" src={logowhite} />
          <p className=" mt-4 pr-10 lg:pr-0 text-sm">
            We'd love to hear from you! Either you're ready to Kickstart your
            project or you just have some questions, we're here to help
          </p>
          <p className="text-[#645D5D] mt-10">
            © 2024 URBAN OPLENCE INTERIORS. All rights reserved.
          </p>
        </div>
        <div className=" lg:flex-1 w-full">
          <h3>Services</h3>
          <div className="  text-sm column-start gap-y-2 mt-4">
            {services.map((item, index) => (
              <a
                key={index}
                className=" text-[#645D5D] hover:text-white "
                href="#"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="w-full lg:flex-1">
          <h3>Contact Us</h3>
          <div className="  text-sm column-start gap-y-2 mt-4">
            {contact.map((item, index) => (
              <a className=" e flex-start gap-2" key={index} href="#">
                {renderIcon(item.type)}
                <p className="text-[#645D5D] hover:text-white">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
