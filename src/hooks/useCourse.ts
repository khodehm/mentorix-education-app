import React from "react";
import tsPic from "../assets/image/ts.webp"
import jsPic from "../assets/image/js.webp"
import nextPic from "../assets/image/next.webp"
import angularPic from "../assets/image/angular.webp"
import vuePic from "../assets/image/vue.webp"
import { useNavigate } from "react-router-dom";
interface ICourse{
    title : string;
    description : string ;
    image : string ;
    btn :string
}
export default function useCourse  () {
    const [courseList, setCourseList] = React.useState<ICourse[]>(
        [
            {
                title: "دوره تایپ اسکریپت",
                description: "یک دوره جامع برای یادگیری تایپ اسکریپت، از مفاهیم پایه تا استفاده پیشرفته در پروژه‌های واقعی. مناسب برای توسعه‌دهندگان جاوا اسکریپت که به دنبال کدنویسی ایمن‌تر و سازمان‌یافته‌تر هستند.",
                image: tsPic,
                btn: "#08b5e7"
            },
            {
                title: "دوره انگولار",
                description: "دوره‌ای کامل برای یادگیری انگولار، یکی از محبوب‌ترین فریمورک‌های فرانت‌اند. شامل مفاهیم اولیه، معماری کامپوننت، مدیریت وضعیت، و پیاده‌سازی پروژه‌های حرفه‌ای.",
                image: angularPic,
                btn: "#e83a4e"

            },
            {
                title: "دوره جاوا اسکریپت",
                description: "آموزشی جامع از اصول پایه‌ای تا مفاهیم پیشرفته جاوا اسکریپت. ایده‌آل برای مبتدیان و کسانی که می‌خواهند مهارت‌های خود را در برنامه‌نویسی وب تقویت کنند.",
                image: jsPic,
                btn: "#fff38a"

            },
            {
                title: "دوره ویو",
                description: "یادگیری فریمورک ویو از ابتدا تا حرفه‌ای، شامل ساخت کامپوننت‌ها، مدیریت داده، و پیاده‌سازی اپلیکیشن‌های مدرن و کاربرپسند.",
                image: vuePic,
                btn: "#15d576"

            },
            {
                title: "دوره نکست",
                description: "یک دوره کامل برای یادگیری نکست جی‌اس، فریمورک محبوب ریکت برای توسعه وب اپلیکیشن‌های سریع، سئو محور و مدرن.",
                image: nextPic,
                btn: "#2c2a2d"

            },
               
        ]
    );
    const [selectedCourse, setSelectedCourse] = React.useState<ICourse | null>(null);

    const navigate = useNavigate();
  
    const handleCourseClick = React.useCallback(
      (index: number) => {
        const course = courseList[index];
        if (course) {
          setSelectedCourse(course);
          
          navigate(`/course/${course.title}` ,{state:course});
        }
      },
      [courseList] 
    );
  
    return { courseList, selectedCourse, handleCourseClick ,setCourseList };
  }