import LeadForm from "../../../layout/lead form/LeadForm";
import CTASection from "../../Home/components/CTASection";
import CNCComparison from "./components/CNCComparision";
import CNCMachines from "./components/CNCMachines";
import TopCNCHero from "./components/TopCNCHero";
import TopCNCSteps from "./components/TopCNCSteps";
import TopCNCWhy from "./components/TopCNCWhy";
import { Helmet } from "react-helmet-async";

const TopCNC = () => {
  return (
    <div>
      <Helmet>
        <title>
          Top CNC Machines for Packaging & Industrial Cutting | AAMRK Solutions
        </title>
        <meta
          name="description"
          content="Explore high-performance TOP CNC digital cutting machines for packaging, signage, and industrial applications. Achieve precision, faster throughput, and seamless automation with AAMRK Solutions."
        />
        <link rel="canonical" href="https://aamrk.co.in/top-cnc" />
      </Helmet>
      <TopCNCHero />
      <TopCNCSteps />
      <TopCNCWhy />
      <CNCMachines />
      <CNCComparison />
      <CTASection />
      <LeadForm />
    </div>
  );
};

export default TopCNC;
