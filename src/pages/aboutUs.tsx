import { motion } from "motion/react"
import pic from "../assets/image/sahpeblue.svg";
import pic2 from "../assets/image/undraw_educator_6dgp.svg";
import { useLocation } from "react-router-dom";

const About = () => {
    const location =useLocation()   
    const isActive =Boolean(location.pathname === "/about") 
    
    
    return (
        <>
        <section className="relative flex text-center p-4 my-4 flex-col h-full">
        <motion.section initial={{opacity:isActive? 1 :0}} animate={{opacity:1 , rotate:isActive? "80deg" : "0deg"  }} transition={{ duration:1 ,animation:"ease-in"}}  className="absolute right-[-30rem] top-[15rem] w-[40%] h-[40%] sm:right-[-20rem] z-10"> <motion.img src={pic} className={`${isActive ? "flex" : "hidden"}`}></motion.img></motion.section>
            <p className="font-bold text-3xl sm:text-2xl">درباره ما </p>
            <div className=" flex  h-[80%] overflow-auto z-20">
                <section className={"grid xsm:grid-cols-1 md:grid-cols-2  gap-4  xsm:flex-col justify-center  items-center  md:flex-row  w-full h-full" }>
                    <motion.section className="w-full h-full flex justify-center"> <motion.img  src={pic2}></motion.img></motion.section>
                    <p className="flex justify-center items-center text-center p-4 text-lg h-[50%] text-balance  ">
                        شرکت ما با هدف ترویج آموزش آنلاین و فراهم آوردن دسترسی آسان به محتوای آموزشی با کیفیت بالا تأسیس شد. ما به شدت به این باور داریم که هر فرد، بدون توجه به موقعیت جغرافیایی یا وضعیت اقتصادی، باید به امکانات آموزشی با کیفیت دسترسی داشته باشد.                         .
                    </p>
                </section>

            </div>
        </section>
        </>
    )
}
export default About