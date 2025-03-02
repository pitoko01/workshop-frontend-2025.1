"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function HorizontalCards() {
  const [cardImages, setCardImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCardImages() {
      try {
        const response = await fetch(
          "https://api.pokemontcg.io/v2/cards?pageSize=7"
        );
        const data = await response.json();
        const images = data.data.map((card) => card.images.large);
        setCardImages(images);
        setLoading(false);
      } catch (error) {
        console.error("Error", error);
        setLoading(false);
      }
    }

    fetchCardImages();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <img
          src="/pikachuloading-unscreen (1).gif"
          alt="Loading"
          className="w-20 h-20 sm:w-40 sm:h-40"
        />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center max-h-min mt-10">
      <Swiper
        effect={"coverflow"}
        direction={"horizontal"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={5}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full h-[500px]"
      >
        {cardImages.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-full">
              <img
                src={src}
                alt={`Card ${index + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
