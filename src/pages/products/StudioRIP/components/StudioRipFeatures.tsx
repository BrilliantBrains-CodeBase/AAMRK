const StudioRipFeatures = () => {
  const features = [
    {
      title: "Faster Processing",
      desc: "Automated workflows cut job processing time dramatically",
      image: "/images/rip1.png",
    },
    {
      title: "Colour Consistency",
      desc: "Colour processing tools & colour profiles ensure consistent prints.",
      image: "/images/rip2.png",
    },
    {
      title: "Efficient Production",
      desc: "Automatic preflight colour profiles and error reporting.",
      image: "/images/rip3.png",
    },
    {
      title: "Quick Setup",
      desc: "Works on Windows & Mac get your team running in hours",
      image: "/images/rip4.png",
    },
    {
      title: "Inbuilt Imposition",
      desc: "Imposition tool for book and cutsheet forms.",
      image: "/images/rip5.png",
    },
  ];

  return (
    <div className="bg-[#f6f7fb] py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold text-[#2f3e6e] mb-16">
          Why Print Professionals Choose StudioRIP
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8">
          {features.map((item, i) => (
            <div
              key={i}
              className={`
                flex flex-col items-center text-center
                ${features.length === 5 && i >= 3 ? "md:col-span-1" : ""}
              `}
            >
              
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

export default StudioRipFeatures;