import Hero from "../components/Hero";
import Institutional from "../components/Institutional";
import Services from "../components/Services";
import Highlights from "../components/Highlights";
import WorkingProcess from "../components/WorkingProcess";
import Credentials from "../components/Credentials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Institutional />
      <Services />
      <Highlights />
      <WorkingProcess />
      <Credentials />
      <FAQ />
      <Contact />
      <ContactForm />
    </>
  );
};

export default HomePage;
