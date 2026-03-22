const StudioRipSteps = () => {
  const steps = [
    {
      title: "Step 1 – Upload Files",
      desc: "Import your design files — PDF, TIFF, or native formats",
      image: "/images/rip-step-1.png",
    },
    {
      title: "Step 2 – Auto-Check & Optimize",
      desc: "StudioRIP runs preflight, screening, and color management",
      image: "/images/rip-step-3.png",
    },
    {
      title: "Step 3 – Output & Produce",
      desc: "Send production-ready files to your printer or CTP device",
      image: "/images/rip-step-2.png",
    },
  ];

  return (
    <div className="bg-[#f6f7fb] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold text-[#2f3e6e] mb-3">
          How It Works
        </h2>

        <p className="text-gray-500 text-sm mb-12">
          From file upload to production-ready output in three simple steps
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, i) => (
            <div
              key={i}
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
                className="w-32 h-32 object-cover mx-auto mb-5"
              />

              {/* Title */}
              <h3 className="text-[#2f3e6e] font-semibold text-lg mb-2">
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

export default StudioRipSteps;