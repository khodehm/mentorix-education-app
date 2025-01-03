import { motion } from "motion/react";
import { useLocation, useNavigate } from "react-router-dom";
import pic from "../assets/image/shape.svg"
import pic2 from "../assets/image/teaching.svg"

const College = () => {
    const locataion = useLocation()
    const navigate = useNavigate();
    const isActive = Boolean(locataion.pathname === "/college")
    const handleClick = () =>{
        navigate("/courses")
    }
    return (
        <>
        <section className="relative flex text-center px-4  flex-col h-screen py-10">
            <motion.section  initial={{ opacity: 0, x: -420 , rotate: 0 }}
              animate={{opacity: 1,x: -420,rotate: isActive ? 50 : 0,}} transition={{ duration: 1 }} className="absolute left-0 z-10 sm:top-10 sm:w-[800px] xl:w-[1000px] ">
              <motion.img src={pic} className={isActive ? "flex" : "hidden"}/>
            </motion.section>
            <p className="font-bold text-3xl sm:text-2xl">کالج منتوریکس</p>
            <section className={"relative flex gap-10 xsm:my-4 md:my-10 xsm:flex-col-reverse sm:flex-col-reverse  md:flex-row xsm:justify-between items-center w-full z-10 md:h-full"}>
                <div className="relative flex flex-col">
                    <p className="flex  justify-center items-center text-center p-4 text-lg h-[50%] text-balance  ">                        
                     منتوریکس با هدف تسهیل یادگیری دوره‌های آموزشی متنوع و کاربردی راه‌اندازی شد. این پلتفرم بستری فراهم می‌کند تا دانشجویان و علاقه‌مندان به مهارت‌های جدید بتوانند دوره‌های مرتبط با نیازهای تحصیلی و شغلی خود را بیابند و با یادگیری مهارت‌های به‌روز، مسیر رشد خود را هموار کنند.
                    </p>
                    <motion.button className="absolute left-4  top-[11rem] flex gap-2 p-2  rounded-xl bg-indigo-500 text-white "
                    initial={{scale:1}} whileTap={{scale:1.1}}
                    onClick={handleClick}>
                    <span>از اینجا شروع کن </span>
                    <span className="relative flex h-3 w-3 ">
                      <span className="animate-ping absolute  inline-flex h-full w-full rounded-full bg-indigo-200 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-400"></span>
                    </span>
                  </motion.button>
                </div>
                <motion.section className="w-full h-[80%]  flex justify-center"> <motion.img initial={{opacity:0  ,x:120}} animate={{opacity:1 , x:0 }} transition={{duration:1}} src={pic2}></motion.img></motion.section>
            </section>
          
        </section>
        </>
    )
}
export default College ;