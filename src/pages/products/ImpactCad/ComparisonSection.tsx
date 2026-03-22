import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const without = [
    "Manual dieline creation takes hours",
    "Expensive prototyping errors and rework",
    "Slow approval cycles with physical samples",
    "Disconnected design and production systems",
    "Material waste from poor nesting",
    "Manual repetitive tasks",
  ];

  const withImpact = [
    "Template-based design in minutes",
    "Built-in preflight catches errors early",
    "3D previews get instant client approvals",
    "Direct machine output, no conversion",
    "Smart nesting maximizes yield",
    "Automated operations.",
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
              Without Impact CAD
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
              With Impact CAD
            </h3>

            <ul className="space-y-4">
              {withImpact.map((item, i) => (
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

export default ComparisonSection;