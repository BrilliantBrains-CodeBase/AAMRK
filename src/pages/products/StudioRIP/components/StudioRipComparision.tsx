import { Check, X } from "lucide-react";

const StudioRipComparison = () => {
  const without = [
    "Manual preflight checks causing production delays",
    "Inconsistent color output across different jobs",
    "Complex RIP setups that require specialized training",
    "Wasted materials from screening and trapping errors",
  ];

  const withStudioRip = [
    "Automated preflight catches errors before production",
    "Advanced color management ensures consistent output",
    "Intuitive interface — production-ready in hours, not weeks",
    "Smart screening and collision detection eliminate waste",
  ];

  return (
    <div className="bg-[#f6f7fb] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-4xl font-semibold text-[#2f3e6e] mb-12">
          Stop wasting time on rework
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* WITHOUT */}
          <div className="bg-[#f7e9e9] border border-red-200 rounded-xl p-6 md:p-8">
            <h3 className="text-red-500 font-semibold mb-6 text-lg">
              Without StudioRIP
            </h3>

            <ul className="space-y-4">
              {without.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                  <span className="bg-red-100 text-red-500 p-1 rounded-full">
                    <X size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* WITH */}
          <div className="bg-[#e6f3ee] border border-green-200 rounded-xl p-6 md:p-8">
            <h3 className="text-green-600 font-semibold mb-6 text-lg">
              With StudioRIP
            </h3>

            <ul className="space-y-4">
              {withStudioRip.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                  <span className="bg-green-100 text-green-600 p-1 rounded-full">
                    <Check size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StudioRipComparison;