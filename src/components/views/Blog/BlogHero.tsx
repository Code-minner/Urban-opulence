'use client';

import React from "react";
import herobg from "../../../../public/assets/gridbg.png";
import gradient from "../../../../public/assets/gradient.png";
import Image from "next/image";

interface BlogHeroProps {
  onSearch: (value: string) => void;
}

const BlogHero: React.FC<BlogHeroProps> = ({ onSearch }) => {
  return (
    <section className="w-full pt-20 relative h-[60vh] lg:h-[80vh] max-h-[500px] overflow-hidden bg-white column-start items-center">
      <Image
        src={herobg}
        alt="herobg"
        className="w-full absolute top-0 object-cover h-full"
      />
      <Image
        src={gradient}
        alt="gradient"
        className="w-full absolute top-0 object-cover h-full"
      />
      <section className="px-5 lg:px-0 overflow-hidden text-center relative h-fit flex-start w-full max-w-6xl">
        <div className="flex-1 column-center justify-start pt-10 lg:pt-20">
          <div className="p-2 text-sm lg:text-base font-satoshi px-3 rounded-full border-white border mb-4 bg-[rgba(255,255,255,0.5)]">
            Luxury & Customized Interior Design Solutions.
          </div>
          <h1 className="mt-8 font-satoshi font-bold leading-[4rem] text-4xl lg:text-7xl">
            Get Latest <span className="text-purple-700">Feeds</span>
          </h1>
          <p className="font-satoshi max-w-2xl text-lg lg:text-2xl mt-8 pl-1">
            We turn ordinary rooms into stunning spaces that showcase your unique style and needs.
          </p>
          {/* Input field */}
          <div className="mt-8 w-full pr-[1%] pl-[1%]">
            <input
              type="text"
              placeholder="Search blog posts..."
              onChange={(e) => onSearch(e.target.value)}
              className="w-full p-2 border mb-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary font-satoshi text-[1.6em] max-sm:text-[1.4em] rounded-[80px] px-5 py-2.5"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default BlogHero;
