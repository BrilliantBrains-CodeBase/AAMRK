import { Helmet } from "react-helmet-async";
import CTASection from "../../Home/components/CTASection";
import PreviewSection from "./components/PreviewSection";
import StudioRipComparison from "./components/StudioRipComparision";
import StudioRipFeatures from "./components/StudioRipFeatures";
import StudioRipHero from "./components/StudioRipHero";
import StudioRipSteps from "./components/StudioRipSteps";
import LeadForm from "../../../layout/lead form/LeadForm";

const StudioRip = () => {
  return (
    <div>
      {/* META */}
      <Helmet>
        <title>StudioRIP Software | Fast & Accurate Print RIP Processing</title>

        <meta
          name="description"
          content="StudioRIP automates preflight, color management, and print workflows to deliver fast, error-free, and consistent print-ready outputs for commercial printers."
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://aamrk.co.in/studiorip"
        />

        {/* Open Graph */}
        <meta property="og:title" content="StudioRIP Software | AAMRK Solutions" />
        <meta
          property="og:description"
          content="Achieve faster processing, color consistency, and efficient production with StudioRIP."
        />
        <meta property="og:url" content="https://aamrk.co.in/studiorip" />
        <meta property="og:type" content="website" />

        {/* Optional */}
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* PAGE CONTENT */}
      <StudioRipHero />
      <StudioRipSteps />
      <StudioRipComparison />
      <PreviewSection />
      <StudioRipFeatures />
      <CTASection />
      <LeadForm />
    </div>
  );
};

export default StudioRip;