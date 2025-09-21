import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

// Import your thumbnails (small preview images)
import thumb1 from "../assets/thumbnails/thumb1.png";
import thumb2 from "../assets/thumbnails/thumb2.png";
import thumb3 from "../assets/thumbnails/thumb3.png";
import thumb4 from "../assets/thumbnails/thumb4.png";
import thumb5 from "../assets/thumbnails/thumb5.png";
import thumb6 from "../assets/thumbnails/thumb6.png";
import thumb7 from "../assets/thumbnails/thumb7.png";
import thumb8 from "../assets/thumbnails/thumb8.png";
import thumb9 from "../assets/thumbnails/thumb9.png";
import thumb10 from "../assets/thumbnails/thumb10.png";
import thumb11 from "../assets/thumbnails/thumb11.png";
import thumb12 from "../assets/thumbnails/thumb12.png";
import thumb13 from "../assets/thumbnails/thumb13.png";
import thumb14 from "../assets/thumbnails/thumb14.png";
import thumb15 from "../assets/thumbnails/thumb15.png";
import thumb16 from "../assets/thumbnails/thumb16.png";
import thumb17 from "../assets/thumbnails/thumb17.png";
import thumb18 from "../assets/thumbnails/thumb18.png";
import thumb19 from "../assets/thumbnails/thumb19.png";
import thumb20 from "../assets/thumbnails/thumb20.png";
import thumb21 from "../assets/thumbnails/thumb21.png";
import thumb22 from "../assets/thumbnails/thumb22.png";
import thumb23 from "../assets/thumbnails/thumb23.png";
import thumb24 from "../assets/thumbnails/thumb24.png";
import thumb25 from "../assets/thumbnails/thumb25.png";
import thumb26 from "../assets/thumbnails/thumb26.png";
import thumb27 from "../assets/thumbnails/thumb27.png";
import thumb28 from "../assets/thumbnails/thumb29.png";
import thumb29 from "../assets/thumbnails/thumb291.png";
import thumb30 from "../assets/thumbnails/thumb30.png";

// ... add all 30 thumbnails

// Import your actual slide components
import Slide1 from "../slides/Slide1";
import Slide2 from "../slides/Slide2";
import Slide3 from "../slides/Slide3";
import Slide4 from "../slides/Slide4";
import Slide5 from "../slides/Slide5";
import Slide6 from "../slides/Slide6";
import Slide7 from "../slides/Slide7";
import Slide8 from "../slides/Slide8";
import Slide9 from "../slides/Slide9";
import Slide10 from "../slides/Slide10";
import Slide11 from "../slides/Slide11";
import Slide12 from "../slides/Slide12";
import Slide13 from "../slides/Slide13";
import Slide14 from "../slides/Slide14";
import Slide15 from "../slides/Slide15";
import Slide16 from "../slides/Slide16";
import Slide17 from "../slides/Slide17";
import Slide18 from "../slides/Slide18";
import Slide19 from "../slides/Slide19";
import Slide20 from "../slides/Slide20";
import Slide21 from "../slides/Slide21";
import Slide22 from "../slides/Slide22";
import Slide23 from "../slides/Slide23";
import Slide24 from "../slides/Slide24";
import Slide25 from "../slides/Slide25";
import Slide26 from "../slides/Slide26";
import Slide27 from "../slides/Slide27";
import Slide28 from "../slides/Slide28";
import Slide29 from "../slides/Slide29";
import Slide30 from "../slides/Slide30";

// ... add all 30 slides

const slides = [
  <Slide1 />,
  <Slide2 />,
  <Slide3 />,
  <Slide4 />,
  <Slide5 />,
  <Slide6 />,
  <Slide7 />,
  <Slide8 />,
  <Slide9 />,
  <Slide10 />,
  <Slide11 />,
  <Slide12 />,
  <Slide13 />,
  <Slide14 />,
  <Slide15 />,
  <Slide16 />,
  <Slide17 />,
  <Slide18 />,
  <Slide19 />,
  <Slide20 />,
  <Slide21 />,
  <Slide22 />,
  <Slide23 />,
  <Slide24 />,
  <Slide25 />,
  <Slide26 />,
  <Slide27 />,
  <Slide28 />,
  <Slide29 />,
  <Slide30 />,
];

// Array of thumbnail image sources
const thumbnails = [
  thumb1,
  thumb2,
  thumb3,
  thumb4,
  thumb5,
  thumb6,
  thumb7,
  thumb8,
  thumb9,
  thumb10,
  thumb11,
  thumb12,
  thumb13,
  thumb14,
  thumb15,
  thumb16,
  thumb17,
  thumb18,
  thumb19,
  thumb20,
  thumb21,
  thumb22,
  thumb23,
  thumb24,
  thumb25,
  thumb26,
  thumb27,
  thumb28,
  thumb29,
  thumb30,
];


const PresentationWrapper: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const SLIDE_DURATION = 5000; // ms

  // Auto play
  useEffect(() => {
    if (!isPlaying) return;
    const step = 100 / (SLIDE_DURATION / 100);
    let interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setCurrent((prev) => (prev + 1) % slides.length);
          return 0;
        }
        return p + step;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    setProgress(0);
  }, [current]);

  const nextSlide = useCallback(() => {
    if (!animating) setCurrent((prev) => (prev + 1) % slides.length);
  }, [animating]);

  const prevSlide = useCallback(() => {
    if (!animating) setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [animating]);

  const togglePlay = () => setIsPlaying((prev) => !prev);

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === " ") {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [nextSlide, prevSlide]);

  return (
    <div className="relative overflow-hidden w-full h-screen bg-black">
      {/* Slide Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full h-full"
          onAnimationStart={() => setAnimating(true)}
          onAnimationComplete={() => setAnimating(false)}
        >
          {slides[current]}
        </motion.div>
      </AnimatePresence>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/20 z-[9999]">
        <motion.div
          className="h-full bg-gradient-to-r from-pink-500 to-yellow-400"
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear", duration: 0.1 }}
        />
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 right-6 flex items-center gap-3 z-[9999]">
        <button
          onClick={prevSlide}
          disabled={animating}
          className="bg-white/20 backdrop-blur-md px-3 py-2 rounded-full text-white hover:bg-pink-500/70 transition shadow-lg"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={togglePlay}
          className="bg-white/20 backdrop-blur-md px-3 py-2 rounded-full text-white hover:bg-green-500/70 transition shadow-lg"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>

        <button
          onClick={nextSlide}
          disabled={animating}
          className="bg-white/20 backdrop-blur-md px-3 py-2 rounded-full text-white hover:bg-pink-500/70 transition shadow-lg"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Counter */}
      <div className="absolute bottom-6 left-6 text-white text-sm bg-white/20 backdrop-blur-md px-3 py-1 rounded-md z-[9999]">
        {current + 1} / {slides.length}
      </div>

      {/* Dots with Thumbnail Preview */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex gap-2 z-[9999]">
        {slides.map((_, i) => (
          <div
            key={i}
            className="relative group"
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <button
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === current ? "bg-yellow-400 scale-125" : "bg-white/40 hover:bg-white/70"
              }`}
            />
            {/* Thumbnail preview */}
            <AnimatePresence>
              {hoverIndex === i && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: -10 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 w-40 h-24 rounded-lg overflow-hidden border border-white/30 shadow-xl"
                >
                  <img
                    src={thumbnails[i]}
                    alt={`Slide ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PresentationWrapper;


