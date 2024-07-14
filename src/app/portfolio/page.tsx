import CtaSection_2 from "@/components/views/Home/CtaSection_2";
import PortfolioGallery from "@/components/views/Portfolio/PortfolioGallery";
import PortfolioHero from "@/components/views/Portfolio/PortfolioHero";
import React from "react";

const Portfolio = () => {
  return (
    <main>
      <PortfolioHero />
      <PortfolioGallery />
      <CtaSection_2 />
    </main>
  );
};

export default Portfolio;
