"use client";

import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Digite o nome ou tipo do Pokemon.");
      return;
    }

    try {
      const response = await fetch(
        `https://api.pokemontcg.io/v2/cards?q=name:${query}* OR types:${query}*&pageSize=8`
      );
      if (!response.ok) {
        throw new Error("Pokémon não encontrado");
      }
      const data = await response.json();
      setPokemon(data.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setPokemon([]);
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Pesquise seu Pokemon"
        className="mt-5 p-2 w-80 rounded-md shadow-md bg-yellow-400 focus:outline-none text-blue-900"
      />
      <button
        onClick={handleSearch}
        className="cursor-pointer ml-2 mt-5 p-2 bg-blue-500 text-gray-700 rounded-md shadow-md hover:bg-blue-600 focus:outline-none text-center justify-center"
      >
        Buscar
      </button>
      {error && <p className="text-lg font-extralight justify-center align-center text-center text-gray-700">{error}</p>}
      {pokemon.length > 0 && (
        <div className="flex flex-wrap gap-5 mt-10 text-center mx-10 justify-center">
          {pokemon.map((card) => (
            <div key={card.id}>
              <img src={card.images.small} alt={card.name} />
              <h2 className="text-lg font-extralight justify-center align-center text-center text-gray-700">
                Nome:{card.name}
              </h2>
              <h2 className="text-lg font-extralight justify-center align-center text-center text-gray-700 mt-1">
                Tipo:{card.types}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}