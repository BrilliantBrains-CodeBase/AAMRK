import CTASection from "../../Home/components/CTASection"
import ERPHero from "./components/ERPHero"
import ERPSteps from "./components/ERPSteps"

const ERPPack = () => {
  return (
    <div>
      <ERPHero />
      <ERPSteps />
      <div className="w-full flex justify-center py-6">
        <img
          src="/images/product_erpack_img.png" // replace with your image path
          alt="Section Banner"
          className="w-[80%] h-auto object-cover"
        />
      </div>
      <CTASection />
    </div>
  )
}

export default ERPPack
