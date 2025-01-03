import {  Outlet, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useActiveRoute from "../../hooks/useActiveRoute";
import { Mousewheel, EffectFade } from "swiper/modules";
const SwiperLayout = () =>{
  const navigation = useNavigate();
  const routes = ["home", "about", "college" , "features",];
   const { handleChange ,activeIndex } = useActiveRoute(navigation, routes);
    return(

        <>
            <Swiper initialSlide={activeIndex} 
             onSlideChange={handleChange} slidesPerView={1} spaceBetween={100} direction="vertical" modules={[Mousewheel, EffectFade]} mousewheel={{ forceToAxis: true, releaseOnEdges: true ,sensitivity:1000  }} speed={800} className="h-screen w-screen">
              {routes.map((route) => (
                <SwiperSlide key={route} style={{height:"100%"}}>
                  {/* className={index === activeIndex ? ' h-full opacity-100' : 'opacity-0  pointer-events-none'} */}
                 <Outlet key={route}/>
                </SwiperSlide>
              ))}
            </Swiper>
        </>
    )
}
export default SwiperLayout ;