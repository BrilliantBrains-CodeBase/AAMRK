import { Helmet } from "react-helmet-async";
import WhyChooseUs from "../Home/components/WhyChooseUs";
import AboutSection from "./components/AboutSection";

const About = () => {
  return (
    <div>
      {/* META */}
      <Helmet>
        <title>About Us | AAMRK Solutions</title>
        <meta
          name="description"
          content="Learn about AAMRK Solutions – experts in print and packaging automation. Discover how we help businesses streamline workflows, reduce costs, and improve productivity."
        />
      </Helmet>

      {/* HERO */}
      <div className="bg-[#3c4a6b] py-16 md:py-20 text-center">
        <div className="max-w-5xl mx-auto px-4 text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            About Us
          </h2>

          <p className="text-sm md:text-lg text-white/90 leading-relaxed">
            For packaging designers, die-makers, and converters who need to move
            from concept to machine-ready output — without the rework.
          </p>
        </div>
      </div>

      <WhyChooseUs />
      <AboutSection />
    </div>
  );
};

export default About;