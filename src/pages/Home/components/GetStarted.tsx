const steps = [
  {
    title: "Step 1 – Analyze Your Print Workflow",
    description:
      "We audit your current print and packaging process to identify bottlenecks and inefficiencies. Using our expertise and tools, we map out areas for automation and improvement",
    image: "images/step-1.png",
  },
  {
    title: "Step 2 – Implement Automated Solutions",
    description:
      "We configure and deploy the right mix of AAMRK software solutions– tailored to your operation. Your team receives hands-on training to ensure a smooth launch.",
    image: "images/step-2.png",
  },
  {
    title: "Step 3 – Optimize & Support:",
    description:
      "Beyond go-live, we monitor performance and fine-tune settings. Regular reviews and responsive support ensure you continue gaining efficiency and ROI from automation.",
    image: "images/step-3.png",
  },
];

const GetStarted = () => {
  const handleScroll = () => {
    document.getElementById("lead-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#f6f7fb] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#2f3e6e] mb-14 md:mb-16">
          GET STARTED WITH AAMRK SOLUTIONS
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {steps.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#f1f2f6]
                rounded-xl
                px-8 py-10
                text-center
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
              "
            >
              
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-[90px] h-[90px] object-cover mx-auto mb-6"
              />

              {/* Title */}
              <h3 className="text-[#2f3e6e] font-semibold text-lg mb-4 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16">
          <button
            onClick={handleScroll}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-medium transition"
          >
            Schedule a Consultation
          </button>
        </div>

      </div>
    </div>
  );
};

export default GetStarted;