const TopCNCWhy = () => {
  const features = [
    {
      img: "/images/why-cnc-1.png",
      title: "Precision & Repeatability",
      desc: "Sub-micro adjustments for consistent tolerances across every cut, every time.",
    },
    {
      img: "/images/why-cnc-2.png",
      title: "Fast Cycle Times",
      desc: "Optimized axis control and multi-head systems deliver higher throughput.",
    },
    {
      img: "/images/why-cnc-3.png",
      title: "Easy Integration",
      desc: "Accept industry standard DXF files for seamless workflow integration.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#f5f6f8]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold text-[#2f3e6e] mb-12">
          Why Choose TOP CNC?
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-8 md:p-10 text-center hover:shadow-md transition"
            >
              {/* Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-[#2f3e6e] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCNCWhy;