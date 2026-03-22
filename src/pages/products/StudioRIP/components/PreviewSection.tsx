const PreviewSection = () => {
  return (
    <div className="bg-[#f6f7fb] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold text-[#2f3e6e] mb-3">
          See Your Output Before You Print
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-sm md:text-base mb-10 max-w-3xl mx-auto">
          StudioRIP’s preview shows your job to printed, screening, trapping,
          and colour before a single sheet is print
        </p>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/images/STUDIO-RIP-PRODUCT-IMAGE.png" // replace with your image
            alt="StudioRIP Preview"
            className="
              w-full md:w-[85%]
              rounded-md
              border border-gray-200
              shadow-[0_8px_20px_rgba(0,0,0,0.08)]
            "
          />
        </div>

      </div>
    </div>
  );
};

export default PreviewSection;