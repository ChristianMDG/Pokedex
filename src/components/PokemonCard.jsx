import React from "react";
const TYPE_COLOR = {
  grass: "bg-green-300 text-green-800",
  fire: "bg-orange-300 text-orange-800",
  water: "bg-blue-300 text-blue-800",
  poison: "bg-purple-300 text-purple-800",
  bug: "bg-lime-300 text-lime-800",
  flying: "bg-sky-200 text-sky-800",
  psychic: "bg-pink-300 text-pink-800",
  ice: "bg-cyan-200 text-cyan-800",
  rock: "bg-yellow-400 text-yellow-900",
  ground: "bg-yellow-600 text-white",
  electric: "bg-yellow-300 text-yellow-800",
  normal: "bg-gray-300 text-gray-800",
  fighting: "bg-red-400 text-white",
};
const PokemonCard = ({ pokemon, onClick }) => {
  const id = pokemon.url.split("/").filter(Boolean).pop();

  return (
    <div
      className="h-90 perspective cursor-pointer"
      onClick={() => onClick(id)}
    >
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
        <div className="absolute w-full h-full backface-hidden bg-white border border-gray-200  rounded-2xl shadow-lg flex flex-col justify-center items-center p-4 anime carte">
          <div className="absolute inset-0 opacity-15 ">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
              alt="pokeball"
              className="w-full h-full object-contain"
            />
          </div>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
            alt={pokemon.name}
            className="w-48 h-48 z-10 anime"
          />
          <div className="w-full h-25 bg-amber-200 mt-5 flex flex-col justify-center items-center">
            <h3 className="text-lg font-bold capitalize text-black mt-1 z-10">
              {pokemon.name}
            </h3>
            <div className="bg-amber-700 w-full h-[50%]">
              
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

export default PokemonCard;

// import React from 'react';

// const PokemonCard = ({ pokemon, onClick }) => {
//   const id = pokemon.url.split('/').filter(Boolean).pop();

//   const types = pokemon.types || [];

//   return (
//     <div
//       className="w-80 h-96 perspective cursor-pointer"
//       onClick={() => onClick(id)}
//     >
//       <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">

//         <div className="absolute w-full h-full backface-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-2xl shadow-lg flex flex-col justify-center items-center p-4">

//           <div className="absolute inset-0 opacity-15 pointer-events-none">
//             <img
//               src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
//               alt="pokeball"
//               className="w-full h-full object-contain"
//             />
//           </div>

//           <img
//             src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
//             alt={pokemon.name}
//             className="w-48 h-48 z-10 drop-shadow-md"
//           />

//           <p className="text-sm font-semibold text-gray-500 dark:text-gray-300 mt-2 z-10">
//             {`#${id.padStart(3, '0')}`}
//           </p>

//           <h3 className="text-lg font-bold capitalize text-gray-800 dark:text-white mt-1 z-10">
//             {pokemon.name}
//           </h3>

//           <div className="flex flex-wrap justify-center gap-2 mt-2 z-10 bg-amber-300">
//             {types.map((t, i) => (
//               <span
//                 key={i}
//                 className={`px-2 py-1 text-xs rounded-full font-medium text-white
//                   ${getTypeColorClass(t.type?.name || t.name)}`}
//               >
//                 {t.type?.name || t.name}
//               </span>
//             ))}
//           </div>
//         </div>

//         <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-red-500 to-yellow-400 dark:from-purple-800 dark:to-indigo-900 rounded-2xl flex items-center justify-center text-white font-bold text-xl p-4">
//           <img src="/src/assets/images/pokeball 1.svg" alt="pokeball" className="w-24 h-24 opacity-70" />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default PokemonCard;
