const CNCMachines = () => {
  const machines = [
    {
      img: "/images/cnc-machine-1.png",
      title: "Auto-Loading Table Digital Knife Cutting Machine",
      subtitle: "Ideal for Packaging, Textiles, and Signage",
      points: [
        "Fast, automated cutting solution designed to maximize productivity while delivering high-precision output.",
        "Cutting Area: 600×400mm to 2500×1600mm (Customizable)",
        "Oscillating Cutting Tool: Smooth and accurate cutting performance",
        "Creasing Tool: Three-wheel creasing system for precise folds",
        "Multi-Tool System: V-Cut, Kiss Cut & Punching tools supported",
        "Servo Motors: Taiwan Delta / Germany servo motors for precise movement",
      ],
    },
    {
      img: "/images/cnc-machine-2.png",
      title: "Multi-Functional Four Heads Digital Cutting Machine",
      subtitle: "Perfect for High-Volume Production in Packaging & Textile Industries",
      points: [
        "High-speed multi-head system built for large-scale operations and complex cutting requirements.",
        "Cutting Area: 1600×1200mm",
        "Four Cutting Heads: Simultaneous cutting for faster production",
        "Integrated Safety System: Corner safety switches for secure operation",
        "High-End Pneumatic Cutter: Accurate cutting on hard & soft materials",
        "Spindle & Rotary Tool: Suitable for cutting and engraving applications",
      ],
    },
    {
      img: "/images/cnc-machine-3.png",
      title: "Auto-Loading Table Digital Knife Cutting Machine",
      subtitle: "Optimized for Signage and Packaging Applications",
      points: [
        "Automated stacking and pickup system ensures consistent quality with minimal manual intervention.",
        "Cutting Area: 1200×1200mm to 1600×2500mm",
        "Oscillating Knife Tool: Efficient cutting for foam, PVC, cardboard & more",
        "Creasing & Punching Tools: Designed for packaging material processing",
        "CCD Camera: Accurate material alignment and positioning",
        "Warranty: 3-Year Standard Warranty Included",
      ],
    },
    {
      img: "/images/cnc-macine-4.png",
      title: "Heavy Duty Digital Knife Cutting Machine",
      subtitle: "For Heavy-Duty Packaging & Industrial Cutting Applications",
      points: [
        "Powerful cutting solution engineered for tough materials and industrial-grade performance.",
        "Cutting Area: 600×900mm to 1600×2500mm",
        "Heavy-Duty Servo Motors: Taiwan Delta / Germany motors for high-speed accuracy",
        "Premium Oscillating Tool: Designed for thick and rigid materials",
        "Vacuum System: Strong material hold-down for stable cutting",
        "Automatic Tool Measurement: Consistent tool height calibration",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#f5f6f8]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-4xl font-semibold text-[#2f3e6e] mb-12">
          Choose Your Machine
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {machines.map((machine, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 md:p-8 hover:shadow-md transition"
            >
              {/* Image */}
              <div className="mb-6 flex justify-center">
                <img
                  src={machine.img}
                  alt={machine.title}
                  className="w-full max-h-[260px] object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-[#0ea5e9] mb-2">
                {machine.title}
              </h3>

              {/* Subtitle */}
              <p className="text-gray-600 text-sm mb-4">
                {machine.subtitle}
              </p>

              {/* Bullet Points */}
              <ul className="text-gray-600 text-sm space-y-2 mb-6 list-disc pl-5">
                {machine.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded-md transition"
                onClick={() =>
                  document
                    .getElementById("lead-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Request Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CNCMachines;