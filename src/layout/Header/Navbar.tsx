import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition ${
      isActive ? "text-blue-500" : "text-gray-500 hover:text-blue-500"
    }`;

  return (
    <div className="w-full bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="images/logo_aamrk.png" // replace with your actual logo path
            alt="AAMRK"
            className="h-12 object-contain"
          />
          
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>
            HOME
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            ABOUT
          </NavLink>

          {/* PRODUCT Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              {/* Trigger */}
              <div className="flex items-center gap-1 cursor-pointer text-gray-500 font-medium text-sm">
                PRODUCTS
              </div>

              {/* Invisible hover bridge (fixes gap issue) */}
              <div className="absolute top-full left-0 w-full h-4"></div>

              {/* Dropdown */}
              {productOpen && (
                <div className="absolute top-full right-0 bg-white shadow-lg rounded-md w-56 py-2">
                  <Link to="/impact-cad" className="block px-4 py-2 hover:bg-gray-100">
                    IMPACT CAD
                  </Link>
                  <Link to="/studiorip" className="block px-4 py-2 hover:bg-gray-100">
                    STUDIORIP
                  </Link>
                  <Link to="/erp-pack" className="block px-4 py-2 hover:bg-gray-100">
                    ERPPACK
                  </Link>
                  <Link to="/top-cnc" className="block px-4 py-2 hover:bg-gray-100">
                    TOP CNC
                  </Link>
                </div>
              )}
            </div>

          {/* <span className="text-gray-400 text-sm">BLOGS</span> */}

          <NavLink to="/contact-us2" className={navLinkClass}>
            CONTACT US
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <div className="flex items-center gap-3">
            <img src="images/logo_aamrk.png" alt="AAMRK" className="h-10" />
            
          </div>

          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col px-4 py-4 gap-4 text-sm">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-blue-500">
            HOME
          </Link>

          <Link to="/about" onClick={() => setIsOpen(false)} className="text-gray-600">
            ABOUT
          </Link>

          {/* PRODUCT collapsible */}
          <div>
            <div
              onClick={() => setProductOpen(!productOpen)}
              className="flex justify-between items-center cursor-pointer text-gray-600"
            >
              PRODUCTS <ChevronDown className="w-4 h-4" />
            </div>

            {productOpen && (
              <div className="mt-2 ml-3 flex flex-col gap-2 text-gray-500">
                <Link to="/impact-cad" onClick={() => setIsOpen(false)}>
                  IMPACT CAD
                </Link>
                <Link to="/studiorip" onClick={() => setIsOpen(false)}>
                  STUDIORIP
                </Link>
                <Link to="/erp-pack" onClick={() => setIsOpen(false)}>
                  ERPPACK
                </Link>
                <Link to="/top-cnc" onClick={() => setIsOpen(false)}>
                  TOP CNC
                </Link>
              </div>
            )}
          </div>

          {/* <span className="text-gray-400">BLOGS</span> */}

          <Link to="/contact-us2" onClick={() => setIsOpen(false)} className="text-gray-600">
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;