import React from "react";

const TYPE_COLORS = {
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

const PokemonDetails = ({ pokemon }) => {
  const getWeaknesses = (types) => {
    const typeChart = {
      normal: ["fighting"],
      fire: ["water", "rock", "ground"],
      water: ["electric", "grass"],
      grass: ["fire", "ice", "poison", "flying", "bug"],
    };
    const weaknesses = new Set();
    types.forEach((type) =>
      typeChart[type.type.name]?.forEach((w) => weaknesses.add(w))
    );
    return Array.from(weaknesses);
  };

  const getIdFromUrl = (url) => url.split("/").filter(Boolean).pop();

  return (
    <div className="p-6 rounded-2xl shadow-2xl text-black max-w-lg mx-auto">
      <h2 className="text-2xl font-bold capitalize text-center mb-2">
        {pokemon.name}
      </h2>

      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
        alt={pokemon.name}
        className="mx-auto w-40 h-40 object-contain mb-4 bird"
      />

      <div className="flex justify-center gap-2 mb-4">
        {pokemon.types.map((t) => (
          <span
            key={t.type.name}
            className="text-sm font-semibold px-2 py-1 rounded-full text-white"
            style={{
              backgroundColor: TYPE_COLORS[t.type.name] || "#999",
            }}
          >
            {t.type.name}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {getWeaknesses(pokemon.types).map((w) => (
          <span
            key={w}
            className="text-sm font-medium px-2 py-1 rounded-full text-white"
            style={{
              backgroundColor: TYPE_COLORS[w] || "#999",
            }}
          >
            {w}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm mb-4">
        <p>
          <strong>Height:</strong> {pokemon.height / 10} m
        </p>
        <p>
          <strong>Weight:</strong> {pokemon.weight / 10} kg
        </p>
        <p>
          <strong>Health:</strong> {pokemon.stats[0].base_stat} HP
        </p>
        <p>
          <strong>Abilities:</strong>{" "}
          {pokemon.abilities.map((a) => a.ability.name).join(", ")}
        </p>
        <p>
          <strong>Category:</strong>{" "}
          {pokemon.species?.genera?.find((gen) => gen.language.name === "en")
            ?.genus || "—"}
        </p>
      </div>

      <div className="mb-4">
        <h3 className="font-bold mb-2">Evolution</h3>
        <div className="flex items-center justify-center gap-2">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
            alt={pokemon.name}
            className="w-16 h-16"
          />
          {pokemon.evolution?.evolves_to?.length > 0 && (
            <>
              <span>→</span>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${getIdFromUrl(
                  pokemon.evolution.evolves_to[0].species.url
                )}.png`}
                alt={pokemon.evolution.evolves_to[0].species.name}
                className="w-16 h-16"
              />
              {pokemon.evolution.evolves_to[0].evolves_to.length > 0 && (
                <>
                  <span>→</span>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${getIdFromUrl(
                      pokemon.evolution.evolves_to[0].evolves_to[0].species.url
                    )}.png`}
                    alt={
                      pokemon.evolution.evolves_to[0].evolves_to[0].species.name
                    }
                    className="w-16 h-16"
                  />
                </>
              )}
            </>
          )}
        </div>
      </div>

      <div className="mb-4 italic text-sm">
        {pokemon.description && <p>{pokemon.description.replace("\f", " ")}</p>}
      </div>
    </div>
  );
};

export default PokemonDetails;
