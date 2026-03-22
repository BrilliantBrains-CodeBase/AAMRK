import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "High-Speed RIP",
    description:
      "Output your file with our RIP engine. Process large, complex print files simultaneously, manage multiple printers, and enforce precise colour profiles.",
    image: "images/rip.png",
    bg: "bg-gradient-to-br from-[#8fa2d9] to-[#b4bce8]",
    route: "/studiorip",
  },
  {
    title: "ERP",
    description:
      "Streamline every aspect of your business with ERP software. Automate quotes, job scheduling, inventory and finances in one system.",
    image: "images/erp.png",
    bg: "bg-gradient-to-br from-[#e6d39c] to-[#f3e2b6]",
    route: "/erp-pack",
  },
  {
    title: "Arden’s ImpactCAD",
    description:
      "Design complex boxes with precision dielines and 3D mock-ups. Accelerate structural design and nesting for faster production.",
    image: "images/erp.png",
    bg: "bg-gradient-to-br from-[#e6d39c] to-[#f3e2b6]",
    route: "/impact-cad",
  },
  {
    title: "Top CNC",
    description:
      "Digital Cutting – Boost finishing speed and precision with advanced flatbed cutters featuring auto-loading and CCD camera guidance.",
    image: "images/cnc.png",
    bg: "bg-gradient-to-br from-[#e6d39c] to-[#f3e2b6]",
    route: "/top-cnc",
  },
];

const WhatWeDo = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f6f7fb] py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#2f3e6e] mb-16">
          What We Do
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="
                bg-white rounded-xl overflow-hidden
                shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]
              "
            >
              
              {/* TOP IMAGE BLOCK */}
              <div className={`${item.bg} p-6 flex justify-center`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[120px] h-[120px] object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col items-center text-center">
                
                <h3 className="text-[#2f3e6e] font-semibold text-lg mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                <button
                  onClick={() => navigate(item.route)}
                  className="bg-[#2f2f2f] hover:bg-black text-white px-4 py-2 rounded-md text-sm transition"
                >
                  Learn More
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default WhatWeDo;