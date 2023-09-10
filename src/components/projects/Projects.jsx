import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide_image from "../../assets/videos/ntg.png";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Projects.css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


export default function Projects() {
   const data = [
     {
       customer: "Nepal Travel Guide",
       url: "https://www.nepal-travel-guide.com/",
       img: slide_image,
     },
     {
       customer: "Nepal Guide",
       url: "https://www.nepal-travel-guide.com/",
       img: slide_image,
     },
     {
       customer: "Travel Guide",
       url: "https://www.nepal-travel-guide.com/",
       img: slide_image,
     },
     {
       customer: "Travel Guide",
       url: "https://www.nepal-travel-guide.com/",
       img: slide_image,
     },
     {
       customer: "Travel Guide",
       url: "https://www.nepal-travel-guide.com/",
       img: slide_image,
     },
     {
       customer: "Travel Guide",
       url: "https://www.nepal-travel-guide.com/",
       img: slide_image,
     },
     {
       customer: "Travel Guide",
       url: "https://www.nepal-travel-guide.com/",
       img: slide_image,
     },
     {
       customer: "Travel Guide",
       url: "https://www.nepal-travel-guide.com/",
       img: slide_image,
     },
   ];
  return (
    <div className="container p-4 d-flex align-items-center vh-100">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_containerx"
      >
        {data.map((d, index) => {
          const { img } = d;
          return (
            <SwiperSlide key={index}>
              <img src={img} alt="worksProject-ntg" />
            </SwiperSlide>
          );
        })}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
