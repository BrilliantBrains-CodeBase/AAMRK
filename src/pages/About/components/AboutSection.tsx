const AboutSection = () => {
  return (
    <div className="bg-[#f6f7fb] py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2f3e6e] mb-6">
            AboutUs
          </h2>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base space-y-4">
            At AAMRK, we help the Print and Packaging industry with innovative,
            reliable, and future-ready software and hardware solutions. As a fast-growing
            startup backed by deep industry expertise, we combine cutting-edge technology
            with decades of practical knowledge to help printing, packaging, and pre-press
            businesses streamline their workflows, reduce costs, and achieve higher productivity.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base mt-4">
            With years of experience in print, packaging, CAD design, pre-press automation,
            and production workflows, our company brings a unique blend of real-world insight
            and modern engineering. This expertise drives our mission: to simplify complex
            print and packaging processes through intelligent, user-friendly technology.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full">
          <img
            src="/images/about.jpg" // replace with your image
            alt="About AAMRK"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

      </div>
    </div>
  );
};

export default AboutSection;