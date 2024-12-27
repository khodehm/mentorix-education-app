import { motion } from "motion/react";
import flower from "../assets/image/flower.png";
import coffee from "../assets/image/coffee.png";
import laptop from "../assets/image/laptop.png";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location =useLocation();
  const isActive = Boolean(location.pathname === "/home");
  const containerVariants = {
    hidden: { opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger animation for images
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="hero-section flex flex-col  justify-center text-center  h-full bg-white">
      {/* Static Logo */}
      <div className="  gap-2 flex flex-col ">
         <p className="font-bold text-3xl xsm:text-2xl"> گروه نرم افزاری لرن لوپ</p>
         <p className="text-lg"> سامانه آموزش و کالج لرن لوپ</p>
      </div>

      {/* Animated Images */}
      <motion.div
      key={isActive ? "active" : "inactive"}
        className="relative w-full flex flex-row-reverse hover:translate-x-10 transform-cpu duration-300 ease-linear"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 1, // Duration for smooth transition
          ease: "easeInOut", // Smooth easing effect
        }}
      >
        <motion.img
          src={flower}
          alt="Image 1"
          className="absolute  xsm:h-[10rem] xsm:right-0 sm:rihgt-[70%] sm:h-auto "
          variants={imageVariants}
        />
        <motion.img
          src={laptop}
          alt="Image 3"
          className="absolute xsm:w-[70%] xsm:left-[-8rem] xsm:top-[-30rem] sm:left-[-40rem] sm:top-[-40rem] sm:w-auto"
          variants={imageVariants}
        />
        <motion.img
          src={coffee}
          alt="Image 2"
          className="absolute xsm:w-[10rem] xsm:bottom-[-15rem] sm:bottom-[-30rem] sm:w-auto right-[50%] "
          variants={imageVariants}
        />
      </motion.div>
    </div>
  );
};

export default Home;
