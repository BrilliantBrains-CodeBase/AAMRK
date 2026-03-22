import CTASection from "../../Home/components/CTASection";
import ComparisonSection from "./ComparisonSection";
import DiemakingSteps from "./DiemakingSteps";
import FeaturesSection from "./FeaturesSection";
import ImpactHero from "./ImpactHero";
import StepsSection from "./StepsSection";
import { Helmet } from "react-helmet-async";

const ImpactCad = () => {
  return (
    <div>
      <Helmet>
        <title>Impact CAD Software | Packaging & Die-Making Automation</title>

        <meta
          name="description"
          content="Impact CAD helps packaging and die-making teams design faster, reduce errors, and generate machine-ready outputs with automation, 3D previews, and smart nesting."
        />

        {/* Canonical */}
        <link rel="canonical" href="https://aamrk.co.in/impact-cad" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Impact CAD Software | AAMRK Solutions"
        />
        <meta
          property="og:description"
          content="Design faster, reduce rework, and export machine-ready packaging layouts with Impact CAD."
        />
        <meta property="og:url" content="https://aamrk.co.in/impact-cad" />
        <meta property="og:type" content="website" />

        {/* Optional but recommended */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ImpactHero></ImpactHero>
      <StepsSection />
      <DiemakingSteps />
      <ComparisonSection />
      <div className="w-full flex justify-center">
        <img
          src="/images/impact-cad-product.png" // replace with your image path
          alt="Section Banner"
          className="w-[80%] h-auto object-cover"
        />
      </div>
      <FeaturesSection />
      <CTASection />
    </div>
  );
};

export default ImpactCad;
