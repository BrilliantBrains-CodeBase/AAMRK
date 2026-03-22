import { Outlet } from "react-router-dom";
import TopNavbar from "./Header/TopNavbar";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">

        
      <TopNavbar /> 
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;