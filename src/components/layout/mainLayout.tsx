import {  Outlet, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useActiveRoute from "../../hooks/useActiveRoute";
import { Mousewheel, EffectFade } from "swiper/modules";

import Menu from "../navigation";
import NavBar from "../desktopNav";
const MainLayout = () => {
  const navigation = useNavigate();
  const routes = ["home", "about", "features", "college"];
  const { handleChange ,activeIndex } = useActiveRoute(navigation, routes);

  return (
    <>
     <NavBar />
      <Menu/>
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
  );
  
};

export default MainLayout;
