const features = [
  {
    title: "On Time Support",
    image: "/images/why-1.png",
  },
  {
    title: "State of Art Solution",
    image: "/images/why-2.png",
  },
  {
    title: "Efficiency",
    image: "/images/why-3.png",
  },
  {
    title: "Process Automation",
    image: "/images/why-4.png",
  },
];

const WhyChooseUs = () => {

      const handleScroll = () => {
    document.getElementById("lead-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-[#f5f6fa] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT */}
        <div>
          <h2 className="text-[34px] md:text-[42px] font-semibold text-[#2f3e6e] mb-4">
            Why Choose Us
          </h2>

          <p className="text-[#2f3e6e] font-medium mb-6">
            Your Partner in End-to-End Print & Packaging Automation.
          </p>

          <p className="text-gray-500 leading-relaxed mb-8 max-w-xl">
            At AAMRK, we live and breathe print and packaging. Our Products CAD,
            Imposition, ERP, RIP are designed for today’s fast-moving market.
            By automating production and business processes, we help companies
            reduce cycle times and costs. Our Solutions boost efficiency and
            maintain the highest quality standards.
          </p>

          <button 
          onClick={handleScroll}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium transition">
            Book a Consultation.
          </button>
        </div>

        {/* RIGHT */}
        <div className="relative h-[560px] hidden md:block">
          
          {/* CARD BASE STYLE */}
          {/* reuse mentally: tall, soft bg, centered */}
          
          {/* Top Left */}
          <div className="absolute top-0 left-16 w-[190px] h-[230px] bg-[#eef1f7] rounded-xl flex flex-col items-center justify-center text-center px-4">
            <img src={features[0].image} className="w-24 h-24 rounded-full object-cover mb-4" />
            <p className="text-[#2f3e6e] font-medium text-[15px] leading-snug">
              On Time <br /> Support
            </p>
          </div>

          {/* Top Right */}
          <div className="absolute top-10 right-0 w-[190px] h-[230px] bg-[#eef1f7] rounded-xl flex flex-col items-center justify-center text-center px-4">
            <img src={features[1].image} className="w-24 h-24 rounded-full object-cover mb-4" />
            <p className="text-[#2f3e6e] font-medium text-[15px] leading-snug">
              State of Art <br /> Solution
            </p>
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-16 left-0 w-[190px] h-[230px] bg-[#eef1f7] rounded-xl flex flex-col items-center justify-center text-center px-4">
            <img src={features[2].image} className="w-24 h-24 rounded-full object-cover mb-4" />
            <p className="text-[#2f3e6e] font-medium text-[15px]">
              Efficiency
            </p>
          </div>

          {/* Bottom Right */}
          <div className="absolute bottom-0 right-10 w-[190px] h-[230px] bg-[#eef1f7] rounded-xl flex flex-col items-center justify-center text-center px-4">
            <img src={features[3].image} className="w-24 h-24 rounded-full object-cover mb-4" />
            <p className="text-[#2f3e6e] font-medium text-[15px] leading-snug">
              Process <br /> Automation
            </p>
          </div>
        </div>

        {/* MOBILE */}
        <div className="grid grid-cols-2 gap-2 md:hidden">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-[#eef1f7] rounded-xl p-5 flex flex-col items-center text-center"
            >
              <img
                src={item.image}
                className="w-20 h-20 rounded-full object-cover mb-3"
              />
              <p className="text-[#2f3e6e] text-sm font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;