import { Helmet } from "react-helmet-async";
import CTASection from "../../Home/components/CTASection";
import ERPHero from "./components/ERPHero";
import ERPSteps from "./components/ERPSteps";
import LeadForm from "../../../layout/lead form/LeadForm";

const ERPPack = () => {
  return (
    <div>
      {/* META */}
      <Helmet>
        <title>ERP Software for Manufacturing | ERPPack by AAMRK</title>

        <meta
          name="description"
          content="ERPPack simplifies manufacturing operations by integrating inventory, production, CRM, and invoicing into one platform. Improve efficiency, visibility, and control."
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://aamrk.co.in/erp-pack"
        />

        {/* Open Graph */}
        <meta property="og:title" content="ERPPack Software | AAMRK Solutions" />
        <meta
          property="og:description"
          content="Manage your entire manufacturing workflow with ERPPack — from enquiries to invoicing — in one unified platform."
        />
        <meta property="og:url" content="https://aamrk.co.in/erp-pack" />
        <meta property="og:type" content="website" />

        {/* Optional */}
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* PAGE CONTENT */}
      <ERPHero />
      <ERPSteps />

      <div className="w-full flex justify-center py-6">
        <img
          src="/images/product_erpack_img.png"
          alt="ERPPack Product"
          className="w-[80%] h-auto object-cover"
        />
      </div>

      <CTASection />
      <LeadForm />
    </div>
  );
};

export default ERPPack;