import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Revolutionize Your Packaging Workflow: Design to Estimate to Print",
    description:
      "CAD for packaging, RIP workflow automation and ERP software to streamline design-to-delivery",
    image: "/images/Hero_Banner-1.png",
    buttonText: "Contact Us Now",
  },
  {
    title: "Revolutionizing Manufacturing with Smart ERP Solutions",
    description:
      "Our ERP solution accelerates production with real-time insights, optimizing estimating, job tracking, and production planning for small manufacturing businesses.",
    image: "/images/hero-banner.png",
    buttonText: "Get A Quote",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    document.getElementById("lead-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

    const variants = {
    enter: (dir: number) => ({
        x: dir > 0 ? "100%" : "-100%",
    }),
    center: {
        x: 0,
    },
    exit: (dir: number) => ({
        x: dir > 0 ? "-100%" : "100%",
    }),
    };

  return (
    <div className="relative overflow-hidden h-[520px] md:h-[650px]">

      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* BACKGROUND IMAGE */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[current].image})`,
            }}
          />

          {/* OPTIONAL OVERLAY (gradient tint) */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#3f5fbf]/90 to-[#6c87d6]/70" /> */}

          {/* CONTENT */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-xl space-y-6">
              
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                {slides[current].title}
              </h1>

              <p className="text-sm md:text-base text-white/90">
                {slides[current].description}
              </p>

              <button
                onClick={handleScroll}
                className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-md font-medium"
              >
                {slides[current].buttonText}
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ARROWS */}
      <button
        onClick={prevSlide}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-white bg-white/20 p-2 rounded-full"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-white bg-white/20 p-2 rounded-full"
      >
        <ChevronRight />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
              current === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;