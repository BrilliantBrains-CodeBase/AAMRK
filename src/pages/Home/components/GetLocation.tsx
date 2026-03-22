import { MapPin, Phone, Mail } from "lucide-react";

const GetLocation = () => {
  const handleDirections = () => {
    window.open(
      "https://www.google.com/maps?q=17.430434917964604,78.3716554277915",
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = "tel:+918377862382";
  };

  const handleReviews = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=WellWork+MPM+Corporate+Office",
      "_blank"
    );
  };

  return (
    <div className="bg-[#f6f7fb] py-5 md:py-4">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#2f3e6e] mb-12 md:mb-16">
          Get Our Location
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          
          {/* LEFT INFO */}
          <div className="space-y-8">
            
            <div className="flex items-start gap-4">
              <MapPin className="text-blue-600 w-6 h-6 mt-1" />
              <p className="text-gray-700 leading-relaxed">
                B3 2nd Floor, MPM Corporate House, Plot No. 44,
                Jayabheri Pine Valley, Gachibowli, Hyderabad,
                Telangana 500032
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-blue-600 w-6 h-6" />
              <a href="tel:+918377862382" className="text-gray-700">
                +91-8377862382
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-blue-600 w-6 h-6" />
              <a href="mailto:info@aamrk.com" className="text-gray-700">
                info@aamrk.com
              </a>
            </div>
          </div>

          {/* RIGHT MAP + OVERLAY */}
          <div className="relative w-full h-[320px] md:h-[420px] rounded-lg overflow-hidden">
            
            {/* MAP */}
            <iframe
              src="https://www.google.com/maps?q=17.430434917964604,78.3716554277915&z=16&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />

            {/* GMB STYLE CARD */}
            <div className="absolute top-4 left-4 bg-white rounded-xl shadow-lg p-4 w-[280px]">
              
              <h3 className="font-semibold text-sm text-gray-800">
                WellWork MPM Corporate Office
              </h3>

              <p className="text-xs text-gray-500 mb-2">
                Coworking Space Gachibowli, Hyderabad
              </p>

              {/* Rating */}
              <div className="text-xs text-yellow-500 mb-2">
                ⭐ 4.9 (17 Google reviews)
              </div>

              <p className="text-xs text-gray-600 mb-3">
                5th Floor, MPM Corporate House, Plot No. 44,
                Jayabheri Pine Valley, Hyderabad
              </p>

              {/* Buttons */}
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={handleDirections}
                  className="text-xs border px-3 py-1 rounded-md hover:bg-gray-100"
                >
                  Directions
                </button>

                <button
                  onClick={handleCall}
                  className="text-xs border px-3 py-1 rounded-md hover:bg-gray-100"
                >
                  Call
                </button>

                <button
                  onClick={handleReviews}
                  className="text-xs border px-3 py-1 rounded-md hover:bg-gray-100"
                >
                  Reviews
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GetLocation;