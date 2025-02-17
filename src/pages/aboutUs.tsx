import { motion } from "motion/react"
import pic from "../assets/image/sahpeblue.svg";
import pic2 from "../assets/image/undraw_educator_6dgp.svg";
import { useLocation } from "react-router-dom";

const About = () => {
    const location = useLocation()   
    const isActive = Boolean(location.pathname === "/about")   
    return (
        <>
        <section className="relative flex text-center px-4 my-8  flex-col h-full ">
        <motion.section  initial={{ opacity: 0, x: 420 , rotate: 0 }}
          animate={{opacity: 1,x: 420,rotate: isActive ? 50 : 0,}} transition={{ duration: 1 }} className="absolute right-0 z-10 sm:top-10 sm:w-[800px] xl:w-[1000px] ">
          <motion.img src={pic} className={isActive ? "flex" : "hidden"}/>
        </motion.section>
            <p className="font-bold text-3xl sm:text-2xl">درباره ما </p>
            <div className=" flex  h-[80%]  z-20">
                <section className={"grid sm:grid-cols-2 gap-4  justify-center  items-center  md:flex-row  w-full h-full"}>
                    <motion.section className="w-full h-[70%]  flex justify-center"> <motion.img initial={{opacity:0  ,x:120}} animate={{opacity:1 , x:0 }} transition={{duration:1}} src={pic2}></motion.img></motion.section>
                    <p className="flex justify-center items-center text-center p-4 text-lg h-[50%] text-pretty  ">
                    همه‌چیز از دغدغه‌های دوران دانشجویی شروع شد، زمانی که با چالش‌هایی مثل انتخاب مسیر شغلی، مدیریت زمان و یافتن فرصت‌های رشد روبرو بودم و نیاز به یک راهنما را احساس می‌کردم. پس از فارغ‌التحصیلی و ورود به بازار کار، دیدم این مشکلات همچنان برای بسیاری وجود دارد. از همین‌جا ایده‌ی ساخت منتوریکس شکل گرفت؛ پلتفرمی برای اتصال دانشجویان و افراد تازه‌کار به منتورهای باتجربه، تا مسیر رشدشان را سریع‌تر و بهتر طی کنند.
                    </p>
                </section>
            </div>
        </section>
        </>
    )
}
export default About