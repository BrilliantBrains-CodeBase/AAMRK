const TopCNCSteps = () => {
  const steps = [
    {
      img: "/images/cnc-step-1.png",
      title: "Step 1 – Choose",
      desc: "Select the CNC that fits your production needs.",
    },
    {
      img: "/images/cnc-step-3.png",
      title: "Step 2 – Schedule",
      desc: "Book a demo or trial run at your site or ours.",
    },
    {
      img: "/images/cnc-step-2.png",
      title: "Step 3 – Deploy",
      desc: "Quick install, training, and 24/7 support.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#f5f6f8]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold text-[#2f3e6e] mb-12">
          Get Started in 3 Simple Steps
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-8 md:p-10 text-center hover:shadow-md transition"
            >
              {/* Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-[#2f3e6e] mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCNCSteps;