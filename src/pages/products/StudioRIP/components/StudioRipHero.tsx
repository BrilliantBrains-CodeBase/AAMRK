const StudioRipHero = () => {
  const handleScroll = () => {
    document.getElementById("lead-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#36457a] py-16 md:py-20 text-center text-white">
      <div className="max-w-5xl mx-auto px-4">
        
        <h1 className="text-2xl md:text-4xl font-semibold mb-4">
          Print-Ready Output in Minutes, Not Hours
        </h1>

        <p className="text-sm md:text-lg text-white/90 mb-6 leading-relaxed">
          For commercial printers and packaging producers who need fast,
          error-free RIP processing without complex setups or specialized training.
        </p>

        <button
          onClick={handleScroll}
          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-md font-medium transition"
        >
          Request 15 Min Demo
        </button>

      </div>
    </div>
  );
};

export default StudioRipHero;