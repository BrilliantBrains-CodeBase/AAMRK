import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#3c4a6b] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          
          {/* LOGO + ADDRESS */}
          <div className="md:col-span-2">
            <img
              src="images/logo_aamrk.png" // replace with your logo
              alt="AAMRK"
              className="h-12 mb-4"
            />

            <p className="text-sm text-white/80 leading-relaxed max-w-sm">
              1st Floor, MPM Corporate House, Plot No. 44,
              Jayabheri Pine Valley, Gachibowli,
              Hyderabad, Telangana 500032
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/aamrksolutions"
                target="_blank"
                className="hover:text-green-400"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/aamrk_solutions/"
                target="_blank"
                className="hover:text-green-400"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/aamrksolutions/"
                target="_blank"
                className="hover:text-green-400"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact-us2">Contact Us</Link></li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/impact-cad">CAD</Link></li>
              <li><Link to="/erp-pack">ERP</Link></li>
              <li><Link to="/studiorip">RIP</Link></li>
              <li><Link to="/top-cnc">Top CNC</Link></li>
            </ul>
          </div>

          {/* IMPORTANT LINKS */}
          <div>
            <h4 className="font-semibold mb-4">Important Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          {/* RESOURCES */}
          {/* <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Support</li>
            </ul>
          </div> */}

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-white/70">
          AAMRK Solutions by ACS. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;