import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import ramaeraBg from "../assets/spice.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const spiceFactoryData = {
  title: "SUCCESS STORY: SPICE FACTORY",
  location: "Hajipur, Bihar - ₹2.2 Crore Investment",
  points: [
    { icon: "✅", text: "Fully operational and profitable" },
    { icon: "👥", text: "4,000+ investors participating" },
    { icon: "🏭", text: "60+ jobs created locally" },
    { icon: "⚙️", text: "Modern processing equipment installed" },
    { icon: "💰", text: "Monthly profit sharing active" },
  ],
};

const SpiceFactorySuccessSlide = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false, // Fix overlap
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div
      className="w-full min-h-screen relative flex items-center justify-center bg-cover bg-center px-4 md:px-6"
      style={{ backgroundImage: `url(${ramaeraBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/85"></div>

      <motion.div
        className="relative z-10 w-full max-w-6xl flex flex-col items-center text-center gap-10 py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {spiceFactoryData.title}
        </motion.h2>

        {/* Location */}
        <motion.h3
          className="text-lg md:text-2xl text-amber-400 font-semibold drop-shadow-md"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {spiceFactoryData.location}
        </motion.h3>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-5 gap-6 w-full">
          {spiceFactoryData.points.map((point, index) => (
            <motion.div
              key={index}
              className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 flex flex-col items-center justify-center shadow-xl hover:scale-105 transition-transform duration-500 overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Glossy overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-white/10 to-white/0 opacity-30 rounded-3xl pointer-events-none"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-4xl md:text-5xl mb-4">{point.icon}</div>
                <p className="text-white text-lg md:text-xl font-semibold text-center">{point.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden w-full">
          <Slider {...sliderSettings}>
            {spiceFactoryData.points.map((point, index) => (
              <motion.div
                key={index}
                className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 flex flex-col items-center justify-center shadow-xl mx-4 sm:mx-6 overflow-hidden"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-white/10 to-white/0 opacity-30 rounded-3xl pointer-events-none"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="text-5xl mb-4">{point.icon}</div>
                  <p className="text-white text-lg font-semibold text-center">{point.text}</p>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>

        {/* CTA Button */}
        <motion.a
          href="https://ramaera.com/success-stories"
          className="mt-8 px-12 py-4 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-white font-bold rounded-full shadow-2xl hover:shadow-3xl hover:from-yellow-400 hover:to-amber-500 transition-all duration-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore More Success Stories
        </motion.a>
      </motion.div>
    </div>
  );
};

export default SpiceFactorySuccessSlide;
