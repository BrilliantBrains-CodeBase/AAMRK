const ERPHero = () => {
  const handleScroll = () => {
    document.getElementById("lead-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#36457a] py-20 md:py-28 text-center text-white">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Heading */}
        <h1 className="text-2xl md:text-5xl font-semibold leading-tight mb-6">
          Stop Managing Chaos. Start Running a Streamlined Operation.
        </h1>

        {/* Description */}
        <p className="text-sm md:text-lg text-white/90 leading-relaxed mb-8">
          ERPack unifies your manufacturing workflows — inventory, production,
          CRM, and invoicing — into one simple platform.
        </p>

        {/* CTA */}
        <button
          onClick={handleScroll}
          className="bg-green-500 hover:bg-green-600 px-6 py-3 md:px-8 md:py-3 rounded-md font-medium transition"
        >
          Request 15 Min Demo
        </button>

      </div>
    </div>
  );
};

export default ERPHero;