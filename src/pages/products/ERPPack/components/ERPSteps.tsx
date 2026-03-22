const ERPSteps = () => {
  const steps = [
    {
      title: "Step 1 – Manage Enquiries",
      desc: "Streamline customer enquiries and generate accurate quotes instantly",
      image: "images/erp-step-1.png",
    },
    {
      title: "Step 2 – Track & Optimize",
      desc: "Monitor real-time inventory and production workflows in one place.",
      image: "images/erp-step-2.png",
    },
    {
      title: "Step 3 – Single Click Invoicing",
      desc: "Automated Invoicing & Payment Tracking",
      image: "images/erp-step-3.png",
    },
    {
      title: "Step 4 – Grow Relationships",
      desc: "Build stronger customer and vendor relationships with integrated CRM.",
      image: "images/erp-step-4.png",
    },
  ];

  return (
    <div className="bg-[#f6f7fb] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold text-[#2f3e6e] mb-12">
          How ERPack Works
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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

export default ERPSteps;