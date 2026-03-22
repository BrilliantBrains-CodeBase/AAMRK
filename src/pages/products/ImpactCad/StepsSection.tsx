const StepsSection = () => {
  const steps = [
    {
      title: "Step 1 – Select Template",
      desc: "100+ templates for folding cartons, corrugated..etc are available",
      image: "/images/impact-step1.png",
    },
    {
      title: "Step 2 – Design & 3D Preview",
      desc: "Inbuilt 3D tool for visualisation.",
      image: "/images/impact step-2.png",
    },
    {
      title: "Step 3 – Build Manufacturing Layout",
      desc: "Efficient & error free nested layouts.",
      image: "/images/impact step-3.png",
    },
  ];

  return (
    <div className="bg-[#f6f7fb] py-6 md:py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold text-[#2f3e6e] mb-12">
          Get Started in 3 Simple Steps for Packaging
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {steps.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#f1f2f6]
                rounded-xl
                px-6 py-8
                text-center
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]
              "
            >
              
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-5"
              />

              {/* Title */}
              <h3 className="text-[#2f3e6e] font-semibold text-base md:text-lg mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default StepsSection;