import { motion } from "motion/react";
import flower from "../assets/image/flower.png";
import coffee from "../assets/image/coffee.png";
import laptop from "../assets/image/laptop.png";
import { useLocation } from "react-router-dom";
import  logo from "../assets/icons/logo.png"
const Home = () => {
  const location =useLocation();
  const isActive = Boolean(location.pathname === "/home");
  const containerVariants = {
    hidden: { opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="hero-section flex flex-col  justify-center text-center overflow-hidden    h-full bg-white">
      <div className="  gap-2 flex flex-col justify-center items-center ">
        <img src={logo} alt="" className=" w-[5rem] rounded-full"/>
        <p className="font-bold text-3xl text-2xl">گروه نرم افزاری منتوریکس</p>
        <p className="text-lg"> سامانه آموزش و کالج منتوریکس</p>
      </div>

      <motion.div
      key={isActive ? "active" : "inactive"}
        className="relative  w-full flex flex-row-reverse hover:translate-x-10  transition-transform  duration-300 ease-linear"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 1, 
          ease: "easeInOut",
        }}
      >
        <motion.img
          src={flower}
          alt="Image 1"
          className="absolute xsm:h-[10rem] xsm:right-10 xsm: top-[-20rem] 2xl:right-[30%] xl:righ-[30%] xl:top-[-20rem] 2xl:top-[-30rem] xl:h-auto "
          variants={imageVariants}
        />
        <motion.img
          src={laptop}
          alt="Image 3"
          className="absolute xsm:w-[70%] xsm:left-[-10rem] xsm:top-[-30rem] sm:left-[-30rem] sm:top-[-50rem] 2xl:w-[50%] sm:w-[70%]"
          //  w-[70%] left-[-10rem] top-[-30rem] sm:left-[-30rem] sm:top-[-50rem] 2xl:w-[50%] sm:w-[70%]
          variants={imageVariants}
        />
        <motion.img
          src={coffee}
          alt="Image 2"
          className="absolute xsm:w-[15rem] xsm:bottom-[-15rem] 2xl:bottom-[-30rem] xl:bottom-[-15rem] sm:w-auto  xl:right-[60%] right-[40%] "
          variants={imageVariants}
        />
      </motion.div>
    </div>
  );
};

export default Home;
