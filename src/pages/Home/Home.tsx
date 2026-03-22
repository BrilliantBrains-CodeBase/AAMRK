import LeadForm from "../../layout/lead form/LeadForm"
import CTASection from "./components/CTASection"
import GetLocation from "./components/GetLocation"
import GetStarted from "./components/GetStarted"
import Hero from "./components/Hero"
import KeyAdvantages from "./components/KeyAdvantages"
import WhatWeDo from "./components/WhatWeDo"
import WhyChooseUs from "./components/WhyChooseUs"

const Home = () => {
  return (
    <div>
      <Hero />
      <KeyAdvantages />
      <WhyChooseUs />
      <WhatWeDo />
      <GetStarted />
      <GetLocation />
      <CTASection />
      <LeadForm />
    </div>
  )
}

export default Home
