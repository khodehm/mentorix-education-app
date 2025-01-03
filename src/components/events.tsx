import { Swiper, SwiperSlide } from "swiper/react";
import pic from "../assets/image/Amigos - Books.png";
import { Pagination } from "swiper/modules";
import { Card } from "./card";
const Events = () => {
  const events = [
    {
      title: "تخفیف خرید اولین دوره",
      pic: pic,
      description: " با خرید اولین دوره آموزشی از ما تخفیف بگیرید ",
      color: "",
    },
    {
      title: " با ما بیشتر اشنا بشید",
      pic: pic,
      description: " درباره ما",
      color: "",
    },
    {
      title: "مسابقات ما ",
      pic: pic,
      description: " با شرکت در مسابقه های ما دوره رایگان برنده شوید!",
      color: "",
    },
    {
      title: "کالج ",
      pic: pic,
      description: " تا حالا کالج ما رو امتحان کردی",
      color: "",
    },
  ];
  return (
    <Swiper
      direction="vertical"
      slidesPerView={3}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="w-[30%]"
    >
      <SwiperSlide>
        <>
          {events.map((e: any) => {
            return (
              <Card
                title={e.title}
                dsc={e.description}
                src={pic}
                hasBtn={true}
                btnBg={"#00b4d8"}
                btnText="بزن بریم"
                className={""}
              />
            );
          })}
        </>
      </SwiperSlide>
    </Swiper>
  );
};

export default Events;
