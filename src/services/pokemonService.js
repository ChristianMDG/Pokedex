import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemonList = async (limit =44) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon?limit=${limit}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching Pokémon list:', error);
    throw error;
  }
};

export const getPokemonDetails = async (url) => {
  try {
    const response = await axios.get(url);
    const speciesResponse = await axios.get(response.data.species.url);
    const evolutionResponse = await axios.get(speciesResponse.data.evolution_chain.url);

    return {
      ...response.data,
      species: speciesResponse.data,
      description: speciesResponse.data.flavor_text_entries.find(entry => entry.language.name === 'fr')?.flavor_text || 'Pas de description',
      evolution: evolutionResponse.data.chain,
    };
  } catch (error) {
    console.error('Error fetching Pokémon details:', error);
    throw error;
  }
};
