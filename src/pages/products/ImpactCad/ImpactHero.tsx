const ImpactHero = () => {
  const handleScroll = () => {
    document.getElementById("lead-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full h-[400px] md:h-[520px] overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/Product-Banner-Image.png')`, // replace with your banner image
        }}
      />

      {/* OVERLAY (optional for readability) */}
      <div className="absolute inset-0 bg-black/20" />

      {/* CTA (BOTTOM CENTER) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={handleScroll}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 md:px-8 md:py-3 rounded-md font-medium shadow-lg transition"
        >
          Request 15 Min Demo
        </button>
      </div>
    </div>
  );
};

export default ImpactHero;