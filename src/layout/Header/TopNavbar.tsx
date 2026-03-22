import { Phone, Mail, Clock } from "lucide-react";

const TopNavbar = () => {
  return (
    <div className="w-full bg-[#f3f3f3] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-2">
        
        {/* Desktop */}
        <div className="hidden md:flex justify-end items-center gap-6 text-sm text-gray-600">
          
          <a href="tel:+918377862382" className="flex items-center gap-2 hover:text-black transition">
            <Phone className="w-4 h-4 text-blue-500" />
            +91-8377862382
          </a>

          <a href="mailto:info@aamrk.com" className="flex items-center gap-2 hover:text-black transition">
            <Mail className="w-4 h-4 text-blue-500" />
            info@aamrk.com
          </a>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-500" />
            Mon - Fri: 09:00 - 18:00
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden justify-center items-center gap-2 text-xs text-gray-600">
          
          <a href="tel:+918377862382" className="flex items-center gap-1">
            <Phone className="w-4 h-4 text-blue-500" />
            +91-8377862382
          </a>

          <a href="mailto:info@aamrk.com" className="flex items-center gap-1">
            <Mail className="w-4 h-4 text-blue-500" />
            info@aamrk.com
          </a>

          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-blue-500" />
            Mon - Fri: 09:00 - 18:00
          </div>

        </div>
      </div>
    </div>
  );
};

export default TopNavbar;