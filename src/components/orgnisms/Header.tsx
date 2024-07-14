import React from "react";
import Navbar from "../molecules/Navbar";
import logo from "../../../public/assets/logo.png";
import Image from "next/image";
import Button from "../atom/Button";

function Header() {
  return (
    <section className=" w-screen py-1 lg:py-3 px-3 lg:px-0 z-[1000] backdrop-blur-sm  fixed top-0  bg-[rgba(255,255,255,0.5)]  column-center">
      <nav className=" flex-between  w-full max-w-6xl h-12  ">
        {/* Logo */}
        <a href="/">
          <Image src={logo} alt="Website Logo" className=" w-32 lg:w-36" />
        </a>

        <Navbar />

        <div className="pl-3 hidden lg:flex flex-center">
          <Button className="  text-base font-satoshi  px-5">
            Explore Store
          </Button>
        </div>
      </nav>
    </section>
  );
}

export default Header;
