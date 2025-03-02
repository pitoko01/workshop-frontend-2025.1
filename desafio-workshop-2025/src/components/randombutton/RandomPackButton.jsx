"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

export default function RandomPackButton() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRandomCards = async () => {
    try {
      const response = await fetch(
        "https://api.pokemontcg.io/v2/cards?pageSize=20"
      );
      const data = await response.json();
      console.log("API Response:", data);

      const shuffledCards = data.data
        .sort(() => Math.random() - 0.5)
        .slice(0, 6);
      setCards(shuffledCards);
    } catch (error) {
      console.error("Error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomCards();
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
    <div className="flex flex-col justify-center items-center p-4">
      <button
        onClick={fetchRandomCards}
        className="mb-5 px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer mt-6"
      >
        Abrir Pacote
      </button>

      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="w-full max-w-xs sm:max-w-md md:max-w-lg"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="p-2 rounded-md shadow-sm">
              <img
                src={card.images.large}
                alt={`Card of ${card.name}`}
                className="w-full h-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}