import Button from "@/components/atom/Button";
import React from "react";

type ProjectProps = {
  description: String;
  title: String;
};

const ProjectItemCard = ({ title, description }: ProjectProps) => {
  return (
    <div
      data-aos="fade-up"
      className=" font-satoshi w-full lg:w-fit px-4  flex flex-col  shadow-gray-100  justify-center h-[180px] lg:h-[160px] rounded-xl border  shadow"
    >
      <h3 className=" font-satoshi font-bold text-xl">{title}</h3>
      <p className="mt-1">{description}</p>
      <Button outlined className=" mt-4 w-fit">
        View Project
      </Button>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section className=" flex items-center justify-center  w-full">
      <div className=" py-10">
        <div className=" flex lg:flex-row flex-col justify-center items-center lg:space-x-4 space-y-3 lg:space-y-4 w-full px-3 lg:px-0  max-w-6xl">
          <ProjectItemCard
            title={"Residential Design"}
            description={
              "We provide solutions for homes that embody your personal style."
            }
          />
          <ProjectItemCard
            title={"Custom Furniture"}
            description={
              "We create unique pieces that perfectly fit your space."
            }
          />
        </div>
        <div className=" flex lg:flex-row flex-col pt-3 lg:pt-0  justify-center items-center lg:space-x-4 space-y-3 lg:space-y-4 px-3 lg:px-0 w-full max-w-6xl">
          <ProjectItemCard
            title={"Renovation Projects"}
            description={
              "We transform outdated spaces into modern masterpieces."
            }
          />
          <ProjectItemCard
            title={"Commercial Design"}
            description={
              "We create functional and inviting spaces for businesses to thrive."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
