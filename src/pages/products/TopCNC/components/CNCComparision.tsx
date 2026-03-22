const CNCComparison = () => {
  const rows = [
    {
      label: "Cutting Area Range",
      top: "600mm–2500mm",
      traditional: "Limited sizes",
    },
    {
      label: "Multi-Tool Support",
      top: "Yes (5+ tools)",
      traditional: "1–2 tools",
    },
    {
      label: "Auto-Loading",
      top: "Standard",
      traditional: "Manual only",
    },
    {
      label: "Precision Tolerance",
      top: "±0.05mm",
      traditional: "±0.5mm",
    },
    {
      label: "Setup Time",
      top: "< 30 mins",
      traditional: "2+ hours",
    },
    {
      label: "Warranty",
      top: "2 years",
      traditional: "6–12 months",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#f5f6f8]">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Top Label */}
        <p className="text-center text-xs font-semibold tracking-widest text-blue-500 mb-3">
          SIDE-BY-SIDE
        </p>

        {/* Heading */}
        <h2 className="text-center text-2xl md:text-4xl font-semibold text-[#2f3e6e] mb-10">
          How We Compare
        </h2>

        {/* Table */}
        <div className="overflow-hidden rounded-xl shadow-sm bg-white">
          <table className="w-full text-sm md:text-base">
            
            {/* Header */}
            <thead className="bg-[#e9eff7] text-left">
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-700">
                  Capability
                </th>
                <th className="px-6 py-4 font-semibold text-blue-600">
                  TOP CNC
                </th>
                <th className="px-6 py-4 font-semibold text-gray-700">
                  Traditional CNC
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-200"
                >
                  <td className="px-6 py-4 text-gray-600">
                    {row.label}
                  </td>
                  <td className="px-6 py-4 text-blue-600 font-medium">
                    {row.top}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {row.traditional}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </section>
  );
};

export default CNCComparison;