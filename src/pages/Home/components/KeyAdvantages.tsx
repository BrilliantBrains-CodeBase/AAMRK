const advantages = [
  {
    title: "Cutting-Edge Solutions",
    description:
      "Harness cutting-edge CAD for packaging and print automation. Our software automates repetitive prepress tasks, letting designers focus on innovation. The result is faster previews and fewer prototype iterations.",
    image: "/images/cutting-edge-solutiuon.png",
  },
  {
    title: "Industry Expertise",
    description:
      "Decades of print/packaging know-how back every project. Our engineers and consultants understand the challenges of both Indian and global printers. From initial setup to ongoing support, we’re with you at every step.",
    image: "/images/industry-expertise.png",
  },
  {
    title: "Scalable, Cost-Effective Plans",
    description:
      "Invest only in what you need. Our modular ERP software reduces waste and labor costs by automating planning and inventory. Choose per-module pricing or bundles that grow with your business",
    image: "/images/scalable-cost-effective.png",
  },
];

const KeyAdvantages = () => {

      const handleScroll = () => {
    document.getElementById("lead-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#f6f7fb] py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#2f3e6e] mb-16">
          Key Advantages
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="
                bg-transparent
                rounded-xl
                p-8
                flex flex-col items-center text-center
                transition-all duration-300 ease-in-out
                hover:bg-white
                hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                hover:-translate-y-2
              "
            >
              
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-[110px] h-[110px] object-cover mb-6"
              />

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-[#2f3e6e] mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <button 
          onClick={handleScroll}
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-md text-sm md:text-base font-medium transition">
            Contact for pricing plans and volume discounts
          </button>
        </div>
      </div>
    </div>
  );
};

export default KeyAdvantages;