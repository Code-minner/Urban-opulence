"use client";
import Button from "@/components/atom/Button";
import TextInput from "@/components/atom/TextInput";
import React, { useState } from "react";
import { BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { PiMapPinFill } from "react-icons/pi";

const ContactForm = () => {
  const [firstname, setFirstname] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const contact = [
    {
      title: "Call us or Whatsapp",
      icon: <BiPhone />,
      value: "08139335342, 09025363821",
    },
    {
      title: "Email us",
      icon: <MdEmail />,
      value: "info@opulenceinteriors.com.ng",
    },
    {
      title: "Visit us",
      icon: <PiMapPinFill />,
      value: "19, Iroko Estate Lagos, Nigeria",
    },
  ];

  return (
    <section className=" flex  font-satoshi  w-full py-5  items-center justify-center">
      <div className=" flex  flex-col items-center w-full max-w-6xl ">
        <div className="bg-gray-100 grid lg:grid-cols-3 rounded-xl pt-10 gap-y-6 lg:gap-y-0 lg:pt-20 px-3 lg:px-20 pb-52 w-full">
          {contact.map((items, index) => (
            <div key={index}>
              <div className=" flex-start">
                <div className=" bg-white text-lg text-primary w-10 h-10 rounded-full flex-center">
                  {items.icon}
                </div>
                <div>
                  <p className="  text-md font-bold">{items.title}</p>
                  <p className=" ">{items.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl  column-center  shadow p-5 h-fit   max-w-5xl w-full -translate-y-40">
          <div className="grid lg:grid-cols-2 mb-5 w-full gap-5 ">
            <TextInput
              type="text"
              value={firstname}
              setValue={setFirstname}
              name="firstname"
              label="First Name"
              placeholder="i.e. John Doe"
            />
            <TextInput
              type="email"
              value={email}
              setValue={setEmail}
              name="email"
              label="Email"
              placeholder="i.e. john@mail.com"
            />
            <TextInput
              type="tel"
              value={phoneNumber}
              setValue={setPhoneNumber}
              name="phone number"
              label="Phone Number"
              placeholder="i.e.+234-802-555-0178"
            />
            <TextInput
              type="text"
              value={subject}
              setValue={setSubject}
              name="Subject"
              label="Subject"
              placeholder="i.e. John Doe"
            />
          </div>

          <TextInput
            isTextArea
            type="text"
            value={message}
            setValue={setMessage}
            name="message"
            label="Message"
            placeholder="i.e. John Doe"
          />
          <Button className=" w-full lg:w-[50%]  text-base font-satoshi mt-10 px-10">
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
