const DiemakingSteps = () => {
  const steps = [
    {
      title: "Step 1 – Import Customer File",
      desc: "Remove file errors by inbuilt preflight",
      image: "/images/dieamaking-step-1.png",
    },
    {
      title: "Step 2 – Faster Dieboard",
      desc: "Flat/Rotary dieboard in few clicks",
      image: "/images/diemaking-step-2.png",
    },
    {
      title: "Step 3 – Export to Machine",
      desc: "Send the files to laser, rule bender..etc and export the material usage data.",
      image: "/images/diemaking-step-3.png",
    },
  ];

  return (
    <div className="bg-[#f6f7fb] py-6 md:py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold text-[#2f3e6e] mb-12">
          Get Started in 3 Simple Steps for Diemaking
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {steps.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#a8cbd6]
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
              <p className="text-[#2f3e6e]/80 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default DiemakingSteps;