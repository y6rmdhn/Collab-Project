import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../style/index.css";
import { Pagination } from "swiper/modules";

export const SwiperJs = () => {
  return (
    <Swiper
      className="mySwiper px-[20px]"
      spaceBetween={10}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <img src="https://static.nike.com/a/images/f_auto/dpr_0.9,cs_srgb/h_400,c_limit/52cc5902-5fed-4320-8776-0c1161c978c9/nike-just-do-it.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://static.nike.com/a/images/f_auto/dpr_0.9,cs_srgb/h_400,c_limit/d349028a-633e-4d26-bedc-1d20062edb82/nike-just-do-it.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://static.nike.com/a/images/f_auto/dpr_0.9,cs_srgb/w_1492,c_limit/be5fa28d-45c2-45b5-a60f-c698163aee18/nike-just-do-it.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_400,c_limit/bce4329e-4d2d-4558-8276-655299b5eb42/nike-just-do-it.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
