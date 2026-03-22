const CTASection = () => {
  const handleScroll = () => {
    document.getElementById("lead-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="relative bg-[#36457a] py-16 md:py-20 overflow-hidden">
      
      {/* LEFT TRIANGLE DECOR */}
      <div className="hidden md:block absolute left-10 top-1/2 -translate-y-1/2 opacity-20">
        <div className="w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[100px] border-b-white rotate-90"></div>
      </div>

      {/* RIGHT DOT GRID */}
      <div className="hidden md:grid grid-cols-8 gap-2 absolute right-10 top-1/2 -translate-y-1/2 opacity-30">
        {Array.from({ length: 48 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
        
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          Ready to Transform Your Print & Packaging Operations?
        </h2>

        <p className="text-sm md:text-base text-white/80 mb-8 leading-relaxed">
          Book a demo or request a quote today. Our experts will show you how
          AAMRK can streamline your processes and save costs. We respond to
          inquiries within 24 business hours – let’s get you on the path to
          smarter.
        </p>

        <button
          onClick={handleScroll}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium transition"
        >
          Book a Demo
        </button>
      </div>

      {/* SMALL DECOR LINE (optional subtle wave) */}
      <div className="hidden md:block absolute left-1/2 bottom-6 -translate-x-1/2 opacity-20 text-green-300 text-xl">
        ~~~
      </div>
    </div>
  );
};

export default CTASection;