import { motion } from "motion/react"
import pic from "../assets/image/sahpeblue.svg";
import pic2 from "../assets/image/undraw_educator_6dgp.svg";
import { useLocation } from "react-router-dom";

const About = () => {
    const location =useLocation()   
    const isActive =Boolean(location.pathname === "/about") 
    
    
    return (
        <>
        <section className="relative flex text-center px-4 my-4 flex-col h-full py-32">
        <motion.section  initial={{ opacity: 0, x: 420 , rotate: 0 }}
          animate={{opacity: 1,x: 420,rotate: isActive ? 50 : 0,}} transition={{ duration: 1 }} className="absolute right-0 z-10 sm:top-10 sm:w-[800px] xl:w-[1000px] ">
          <motion.img src={pic} className={isActive ? "flex" : "hidden"}/>
        </motion.section>
            <p className="font-bold text-3xl sm:text-2xl">درباره ما </p>
            <div className=" flex  h-[80%]  z-20">
                <section className={"grid sm:grid-cols-2 gap-4  justify-center  items-center  md:flex-row  w-full h-full"}>
                    <motion.section className="w-full h-[70%]  flex justify-center"> <motion.img initial={{opacity:0  ,x:120}} animate={{opacity:1 , x:0 }} transition={{duration:1}} src={pic2}></motion.img></motion.section>
                    <p className="flex font-vazir-blod justify-center items-center text-center p-4 text-lg h-[50%] text-balance  ">
                        شرکت ما با هدف ترویج آموزش آنلاین و فراهم آوردن دسترسی آسان به محتوای آموزشی با کیفیت بالا تأسیس شد. ما به شدت به این باور داریم که هر فرد، بدون توجه به موقعیت جغرافیایی یا وضعیت اقتصادی، باید به امکانات آموزشی با کیفیت دسترسی داشته باشد.                         .
                    </p>
                </section>

            </div>
        </section>
        </>
    )
}
export default About