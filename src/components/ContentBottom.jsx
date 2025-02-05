import Footer from "./Footer";
import { SwiperJs } from "./Swiper";
import { Button } from "./UI/Button";

export const ContentBottom = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-center pt-10 px-[24px]">
        <h3 className="text-4xl font-extrabold mt-5">LATEST DROP</h3>
        <p className="text-base text-center mt-2 mb-2">Featuring Air Jordan 3 Black-Cement & more.</p>
        <Button bgColor={"#000"}>Shop New Arrivals</Button>
      </div>

      <div className="w-full mt-10">
        <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_542,c_limit/e52883f4-6407-4355-9414-baeb1c7d5a03/nike-just-do-it.jpg" alt="" />
      </div>

      <div className="flex flex-col items-center justify-center px-[24px] mx-5">
        <h3 className="text-4xl font-extrabold mt-5 mb-5">SHOP BY CLASSIC</h3>
      </div>

      <SwiperJs />

      <div className="flex flex-col">
        <div className="mt-20">
          <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_320,c_limit/82524845-2637-4b3c-a7cb-67a416108197/nike-just-do-it.png" alt="" />
        </div>

        <div className="flex gap-10 justify-center mt-10 text-base mx-[24px]">
          <p>Find a Store</p>
          <p>Help</p>
          <p>Join Us</p>
        </div>
      </div>

      <Footer />
    </section>
  );
};
