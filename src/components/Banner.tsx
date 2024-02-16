/*"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function Banner({ banners }: { banners: [IBannerAttribute] }) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"

      //onSlideChange={() => console.log("slide change")}
      //onSwiper={(swiper) => console.log(swiper)}
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <Image
            width={1920}
            height={600}
            alt={banner.name}
            src={banner.bannerImage.url}
            priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
*/
