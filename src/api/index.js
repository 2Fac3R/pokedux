import axios from "axios";

async function getPokemons() {
  try {
    const { data } = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    );
    // console.log(data.results);
    return data.results;
  } catch (error) {
    console.error('There was an error: ', error);
  }
}

async function getPokemonDetails(pokemon) {
  try {
    const { data } = await axios.get(pokemon.url);
    // console.log(data);
    return data;
  } catch (error) {
    console.error('There was an error: ', error);
  }
}

export { getPokemons, getPokemonDetails }
