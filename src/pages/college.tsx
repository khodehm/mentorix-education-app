import tsPic from "../assets/image/ts.webp"
import jsPic from "../assets/image/js.webp"
import nextPic from "../assets/image/next.webp"
import angularPic from "../assets/image/angular.webp"
import vuePic from "../assets/image/vue.webp"
import { Card } from "../components/card"

const College = () => {
    const collegeItems = [
   {
            title: "دوره تایپ اسکریپت",
            description: "یک دوره جامع برای یادگیری تایپ اسکریپت، از مفاهیم پایه تا استفاده پیشرفته در پروژه‌های واقعی. مناسب برای توسعه‌دهندگان جاوا اسکریپت که به دنبال کدنویسی ایمن‌تر و سازمان‌یافته‌تر هستند.",
            image: tsPic,
        },
        {
            title: "دوره انگولار",
            description: "دوره‌ای کامل برای یادگیری انگولار، یکی از محبوب‌ترین فریمورک‌های فرانت‌اند. شامل مفاهیم اولیه، معماری کامپوننت، مدیریت وضعیت، و پیاده‌سازی پروژه‌های حرفه‌ای.",
            image: angularPic,
        },
        {
            title: "دوره جاوا اسکریپت",
            description: "آموزشی جامع از اصول پایه‌ای تا مفاهیم پیشرفته جاوا اسکریپت. ایده‌آل برای مبتدیان و کسانی که می‌خواهند مهارت‌های خود را در برنامه‌نویسی وب تقویت کنند.",
            image: jsPic,
        },
        {
            title: "دوره ویو",
            description: "یادگیری فریمورک ویو از ابتدا تا حرفه‌ای، شامل ساخت کامپوننت‌ها، مدیریت داده، و پیاده‌سازی اپلیکیشن‌های مدرن و کاربرپسند.",
            image: vuePic,
        },
        {
            title: "دوره نکست",
            description: "یک دوره کامل برای یادگیری نکست جی‌اس، فریمورک محبوب ریکت برای توسعه وب اپلیکیشن‌های سریع، سئو محور و مدرن.",
            image: nextPic,
        },
 

    ]
    
    
    return (
        <>
        <section className="my-4 bg-bg2 h-screen overflow-auto">
            <p className="text-3xl font-bold text-center py-4">دوره‌های ما</p>
            <section className="grid w-full sm:grid-cols-2 xl:grid-cols-3 justify-center items-center p-4 gap-4 xl:gap-8" dir="rtl">
                {collegeItems.map((item , index) => (
                    <Card className={'bg-bg1 sm:h-[200px]'} title={item.title} dsc={item.description} src={item.image} key={index} />
                ))}   
           
            </section>
        </section>
        </>
    )
}
export default College ;