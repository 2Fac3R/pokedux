/* eslint-disable react/prop-types */
import PokemonCard from "./PokemonCard"
import './PokemonList.css'

function PokemonList({ pokemons }) {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        return <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
        />
      })}
    </div>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(20).fill('')
}

export default PokemonList
