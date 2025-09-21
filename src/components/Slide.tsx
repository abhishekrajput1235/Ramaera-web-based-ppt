import { motion } from "framer-motion";

interface SlideProps {
  title: string;
  content: string;
  bg: string;
}

const Slide: React.FC<SlideProps> = ({ title, content, bg }) => {
  return (
    <motion.div
      className={`w-full h-screen flex flex-col justify-center items-center text-white ${bg}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="text-5xl font-bold mb-6">{title}</h1>
      <p className="text-xl max-w-2xl text-center">{content}</p>
    </motion.div>
  );
};

export default Slide;
