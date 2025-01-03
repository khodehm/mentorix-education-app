import { Card } from "../components/card"
import useCourse from "../hooks/useCourse"

const College = () => {
    const {courseList,handleCourseClick} = useCourse();  
    
    return (
        <>
        <section className=" bg-bg4 h-screen flex flex-col xl:justify-center  xl:items-center overflow-auto">
            <p className="text-3xl font-bold text-center py-4">دوره‌های ما</p>
            <section className="grid w-full sm:grid-cols-2 xl:grid-cols-3 justify-center items-center p-4 gap-4 xl:gap-8" dir="rtl">
                {courseList.map((item , index) => (
                    <Card className={'bg-bg1 sm:h-[200px]'} title={item.title} dsc={item.description} src={item.image} key={index} 
                    onClick={()=>handleCourseClick(index)}/>
                ))}   
           
            </section>
        </section>
        </>
    )
}
export default College ;