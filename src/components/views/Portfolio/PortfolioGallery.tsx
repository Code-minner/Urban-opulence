import React from "react";
import PhotoAlbum from "react-photo-album";
import photos from "./photos";
import Button from "@/components/atom/Button";

const PortfolioGallery = () => {
  return (
    <div className=" w-full flex py-10 flex-col justify-center items-center">
      <section className=" w-full px-3 lg:px-0 max-w-6xl">
        <PhotoAlbum
          breakpoints={[
            480, // Mobile: 2 columns
            768, // Tablet: 3 columns
            1024, // Desktop: 4 columns
          ]}
          layout="columns"
          photos={photos}
        />
        ;
      </section>
      <Button className=" text-base py-3 font-satoshi mt-8 px-10">
        Download Brochure
      </Button>
    </div>
  );
};

export default PortfolioGallery;
