import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useActiveRoute from "../../hooks/useActiveRoute";
import { Mousewheel, EffectFade } from "swiper/modules";
import Home from "../../pages/home";
import About from "../../pages/aboutUs";
import Features from "../../pages/features";
const MainLayout = () => {
  const navigation = useNavigate();
  const routes = ["home", "about", "features", "college"];
  const { handleChange } = useActiveRoute(navigation, routes);
  return (
    <>
      {/* <Menu/> */}
        <Swiper
          onSlideChange={handleChange}
          slidesPerView={1}
          direction="vertical"
          modules={[Mousewheel, EffectFade]}
          mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
          speed={800}
          className="h-screen "
        >
          <SwiperSlide>
            <Home />
          </SwiperSlide>
          <SwiperSlide>
            <About />
          </SwiperSlide>
          <SwiperSlide>
            <>
              <Features />
            </>
          </SwiperSlide>
        </Swiper>
    </>
  );
};

export default MainLayout;
