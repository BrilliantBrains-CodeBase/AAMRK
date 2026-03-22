import { Helmet } from "react-helmet-async";

import LeadForm from "../../layout/lead form/LeadForm";
import CTASection from "./components/CTASection";
import GetLocation from "./components/GetLocation";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import KeyAdvantages from "./components/KeyAdvantages";
import WhatWeDo from "./components/WhatWeDo";
import WhyChooseUs from "./components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      {/* META */}
      <Helmet>
        <title>
          AAMRK Solutions | Packaging, CAD, ERP & CNC Software Solutions
        </title>

        <meta
          name="description"
          content="AAMRK Solutions provides advanced CAD, ERP, RIP, and CNC solutions for the print and packaging industry. Streamline workflows, reduce costs, and boost productivity."
        />

        {/* Canonical */}
        <link rel="canonical" href="https://aamrk.co.in/" />

        {/* Open Graph */}
        <meta property="og:title" content="AAMRK Solutions" />
        <meta
          property="og:description"
          content="Smart software and machinery solutions for print and packaging industries."
        />
        <meta property="og:url" content="https://aamrk.co.in/" />
        <meta property="og:type" content="website" />

        {/* Optional but recommended */}
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* PAGE CONTENT */}
      <Hero />
      <KeyAdvantages />
      <WhyChooseUs />
      <WhatWeDo />
      <GetStarted />
      <GetLocation />
      <CTASection />
      <LeadForm />
    </div>
  );
};

export default Home;