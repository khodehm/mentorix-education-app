import { Card } from "../components/card"
import useCourse from "../hooks/useCourse"

const Courses = () => {
    const {courseList,handleCourseClick} = useCourse();  

    return(
        <>
            <section className="relative bg-bg1 h-full overflow-auto flex flex-col xl:justify-center  xl:items-center ">
                <p className="text-3xl font-bold text-center py-4">دوره‌های ما</p>        
                <section className="grid w-full h-full sm:grid-cols-2 xl:grid-cols-3 justify-center items-center p-4 gap-4 xl:gap-8 my-4" dir="rtl">
                    {courseList.map((item , index) => (
                        <Card className={`relative  h-[350px] `} title={item.title} dsc={item.description} src={item.image} key={index} 
                        onClick={()=>handleCourseClick(index)}/>
                    ))}   

                </section>
            </section>
        </>
    )
}
export default Courses;