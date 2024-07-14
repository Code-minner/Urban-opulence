import CtaSection_1 from "@/components/views/Home/CtaSection_1";
import CtaSection_2 from "@/components/views/Home/CtaSection_2";
import HeroSection from "@/components/views/Home/HeroSection";
import HowWeWork from "@/components/views/Home/HowWeWork";
import PortolioSection from "@/components/views/Home/PortolioSection";
import ProjectsSection from "@/components/views/Home/ProjectsSection";
import TestimonialSection from "@/components/views/Home/TestimonialSection";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <HeroSection />
      <ProjectsSection />
      <CtaSection_1 />
      <HowWeWork />
      <PortolioSection />
      <TestimonialSection />
      <CtaSection_2 />
    </main>
  );
}
