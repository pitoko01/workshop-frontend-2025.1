"use client";

import { useEffect, useState } from "react";

export default function Card() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await fetch(
          "https://api.pokemontcg.io/v2/cards?pageSize=16"
        );
        const data = await response.json();
        console.log("API Response:", data);

        const shuffleCards = data.data.sort(() => 0.1 - Math.random());
        setCards(shuffleCards.slice(0, 20));
        setLoading(false);
      } catch (error) {
        console.error("Error", error);
        setLoading(false);
      }
    }

    fetchCards();
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
    <div className="flex justify-center items-center min-h-screen mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="p-2 rounded-md shadow-sm transform transition-transform duration-300 hover:scale-105 hover:shadow-lg max-w-xs"
          >
            <img
              src={card.images.large}
              alt={card.name}
              className="w-full h-auto"
            />
            <h2 className="text-base font-extralight text-center text-gray-700">
              Nome: {card.name}
            </h2>
            <h2 className="text-base font-extralight text-center text-gray-700 mt-1">
              Tipo: {card.types}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}