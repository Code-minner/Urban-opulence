"use client";
import React, { useEffect, useState } from "react";
import PhotoAlbum, { Photo } from "react-photo-album";
import Button from "@/components/atom/Button";
import { FileInfo, listOfFiles } from "@uploadcare/rest-client";
import uploadcareSimpleAuthSchema from "@/utils/galleryCDN";
import { BarLoader } from "react-spinners";

const PortfolioGallery = () => {
  const [images, setImages] = useState<FileInfo[]>([]);

  const photos = images.map(
    ({ originalFileUrl, size }) =>
      ({
        src: originalFileUrl,
        width: size,
        height: size,
      } as Photo)
  );

  const fetchPortfolio = async () => {
    try {
      const result = await listOfFiles(
        {},
        { authSchema: uploadcareSimpleAuthSchema }
      );
      if (result) {
        setImages(result.results);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  return (
    <div className=" w-full flex py-10 flex-col justify-center items-center">
      {images.length > 0 ? (
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
        </section>
      ) : (
        <BarLoader />
      )}
      <a href="assets/brochure.pdf" download>
        <Button className=" text-base py-3 font-satoshi mt-8 px-10">
          Download Brochure
        </Button>
      </a>
    </div>
  );
};

export default PortfolioGallery;
