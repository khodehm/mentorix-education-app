import {Swiper , SwiperSlide} from "swiper/react"
import {Pagination} from "swiper/modules"
import pic2 from "../assets/image/undraw_book-lover_cmz5.svg"
import pic3 from "../assets/image/undraw_bookshelves_vhu6.svg"
import pic4 from "../assets/image/undraw_education_3vwh.svg"
import { motion } from "motion/react"

const Features = () => {
   const fileds = [
    {
     title:"این اپلیکیشن آموزشی یک پلتفرم پیشرفته است که به کاربران این امکان را می‌دهد تا در هر زمان و مکان، از یادگیری آنلاین بهره‌مند شوند. این اپلیکیشن با ارائه دوره‌های آموزشی جامع و متنوع در زمینه‌های مختلف مانند فناوری، زبان‌شناسی، روانشناسی، و مهارت‌های زندگی، به افراد کمک می‌کند تا دانش و مهارت‌های خود را به‌روز کنند" ,
     image:pic2,
    },
    {
     title:"این اپلیکیشن نه تنها یک ابزار یادگیری است، بلکه یک همراه ارزشمند برای افرادی است که به دنبال رشد و پیشرفت فردی و شغلی هستند. طراحی زیبا، سرعت بالای عملکرد، و محتوای تخصصی و با کیفیت این اپلیکیشن، آن را از سایر اپلیکیشن‌های مشابه متمایز می‌کند." ,
     image:pic3, 
    },
    {
     title:"با استفاده از این اپلیکیشن می‌توانید مهارت‌های جدیدی یاد بگیرید و به‌طور مستمر در مسیر پیشرفت شخصی و حرفه‌ای خود گام بردارید. به جمع هزاران کاربر دیگر بپیوندید و از دوره‌های آموزشی معتبر و موثر بهره‌مند شوید." ,
     image:pic4,
    },

   ]
    return (
        <>
        <motion.article initial={{opacity:0}} animate={{opacity:1 , animation:"ease-in-out"}} className="relative h-[90%] p-4  py-4 text-center ">
        <p className="font-bold text-3xl sm:text-2xl my-4 ">محصولات</p>
        {/* <motion.section initial={{rotate:"100deg" , animation: "ease" }}  className="absolute right-[-30rem] top-[15rem] w-[40%] h-[40%] z-10"> <motion.img src={pic}></motion.img></motion.section> */}
        <section className="relative z-auto flex flex-col   bg-bg2 rounded-lg  mb-4 ">
         <Swiper modules={[ Pagination]} pagination={true} className=" md:h-full  h-full overflow-auto  w-full" >
            {fileds.map((e:any) => {
                return(                     
                    <SwiperSlide className="flex flex-col md:flex-row justify-center items-center  p-4 " key={e.title} style={{display:"flex"}}>
                        <div className="w-full flex gap-4 justify-center "> <img className="sm:w-[50%] xl:w-[30%]" src={e.image} alt="feature"/></div>
                        <p className="font-normal my-8 text-lg">{e.title}</p>
                    </SwiperSlide>                  
                )
            })}
         </Swiper>
        </section>    
        </motion.article>
        </>
    )
}

export default Features ;