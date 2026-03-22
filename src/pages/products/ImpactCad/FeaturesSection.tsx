const FeaturesSection = () => {
  const features = [
    {
      title: "Faster Approvals",
      desc: "Photoreal 3D proofs get client sign-off in hours, not days",
      image: "/images/pack-1.png",
    },
    {
      title: "Fewer Errors",
      desc: "Automated preflight and collision checks catch issues before production",
      image: "/images/pack-2.png",
    },
    {
      title: "Machine-Ready Output",
      desc: "Direct export to CNC cutters, lasers, and rule benders",
      image: "/images/pack-3.png",
    },
    {
      title: "Less Waste",
      desc: "Advanced nesting algorithms maximize material yield",
      image: "/images/pack-4.png",
    },
    {
      title: "Team Collaboration",
      desc: "Central database with version control across sites",
      image: "/images/pack-5.png",
    },
    {
      title: "Rapid Prototyping",
      desc: "Go from concept to validated design in a single session",
      image: "/images/pack-6.png",
    },
  ];

  return (
    <div className="bg-[#f6f7fb] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold text-[#2f3e6e] mb-16">
          Why packaging teams choose Impact CAD
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8">
          {features.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 rounded-full object-cover mb-5"
              />

              {/* Title */}
              <h3 className="text-[#2f3e6e] font-semibold text-lg mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                {item.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FeaturesSection;