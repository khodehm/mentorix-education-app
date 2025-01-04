import { motion } from "motion/react";
import { useLocation } from "react-router-dom";
const CourseDetails = () => {
  const location = useLocation();
  const course: any = location.state;
  const varients = {
    hidden: {opacity : 0 },
    visible:{
    opacity : 1,
    transition : {duration: 0.5 , ease:"easeInOut"},    
    } 
  }
  

  return (
    <>
      <motion.section variants={varients} initial="hidden" animate="visible" className="relative flex flex-col w-full h-screen">
        <div className=" absolute top-0 left-0 w-full h-[35%] lg:h-[30%]  overflow-hidden">
            <div className=""><img className="h-full w-full" src={course.image} style={{backgroundPosition:"center" , backgroundRepeat:"repeat" , backgroundSize:"80%"}}/></div>
        </div>
        <section className="relative top-[40%]  p-4" dir="rtl">
        <div className="flex flex-col items-start text-balance">
            <p className="text-2xl font-bold ">{course.title}</p>
            <p className="text-lg">{course.description}</p>
            <div className=" relative bottom-10 w-full"><button className={`flex justify-center p-3 rounded-xl w-full text-lg font-bold text-white `} style={{background:course.btn}}>برو بریم !</button></div>
        </div>
        </section>
      </motion.section>
    </>
  );
};
export default CourseDetails;
