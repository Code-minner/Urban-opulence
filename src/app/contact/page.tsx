import ContactForm from "@/components/views/Contact/ContactForm";
import ContactUsHero from "@/components/views/Contact/ContactUsHero";
import CtaSection_2 from "@/components/views/Home/CtaSection_2";
import React from "react";

const ContactUs = () => {
  return (
    <main>
      <ContactUsHero />
      <ContactForm />
      <CtaSection_2 />
    </main>
  );
};

export default ContactUs;
