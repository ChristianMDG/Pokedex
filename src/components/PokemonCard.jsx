import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonCard = ({ pokemon, onClick }) => {
  const [types, setTypes] = useState([]);
  const [id, setId] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get(pokemon.url);
        setTypes(res.data.types);
        setId(res.data.id);
      } catch (err) {
        console.error("Erreur lors du chargement des détails :", err);
      }
    };
    fetchDetails();
  }, [pokemon.url]);

  if (!id) return null; 

  return (
    <div
      className="h-90 perspective cursor-pointer"
      onClick={() => onClick(id)}
    >
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
       
        <div className="absolute w-full h-full backface-hidden bg-white border border-gray-200 rounded-2xl shadow-lg flex flex-col justify-center items-center p-4 anime carte">
          <div className="absolute inset-0 opacity-15">
            <img
              src="/src/assets/images/pokeballHd.png"
              alt="pokeball"
              className="w-full h-full object-contain"
            />
          </div>

          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
            alt={pokemon.name}
            className="w-48 h-48 z-10 anime"
          />

          <div className="w-full h-25 mt-15 flex flex-col justify-center items-center">
            <h3 className="text-lg font-bold capitalize text-black mt-1 z-10">
              {pokemon.name}
            </h3>

            <div className="flex gap-2 mt-2 z-10 flex-wrap justify-center">
              {types.map((typeInfo, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-white text-xs font-semibold"
                  style={{
                    backgroundColor: getTypeColor(typeInfo.type.name),
                  }}
                >
                  {typeInfo.type.name}
                </span>
              ))}
            </div>
          </div>
        </div>

    
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-red-400 to-yellow-400 rounded-2xl rotate-y-180 flex items-center justify-center text-white font-bold text-xl">
          <div className="flex flex-col justify-center items-center">
            <img src="/src/assets/images/logo (2) 1.png" alt="pokemon" />
            <img
              src="/src/assets/images/pokeball 1.svg"
              alt="pokeball"
              className="w-30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const getTypeColor = (type) => {
  const colors = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

  return colors[type] || "#777";
};

export default PokemonCard;
