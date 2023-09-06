/* eslint-disable react/prop-types */
import PokemonCard from "./PokemonCard"
import './PokemonList.css'

function PokemonList({ pokemons }) {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.id} name={pokemon.name} />
      })}
    </div>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(20).fill('')
}

export default PokemonList
