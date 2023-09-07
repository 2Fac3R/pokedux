/* eslint-disable react/prop-types */
import PokemonCard from "./PokemonCard"
import './PokemonList.css'


function getPokemonTypes(pokemon) {
  const types = pokemon.types.map((type) => (type))

  return types.map((type) => type.type)
}

function getPokemonAbilities(pokemon) {
  const abilities = pokemon.abilities.map((ability) => (ability))

  return abilities.map((ability) => ability.ability)
}

function PokemonList({ pokemons }) {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        return <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          sprites={pokemon.sprites}
          types={getPokemonTypes(pokemon)}
          abilities={getPokemonAbilities(pokemon)}
          favorite={pokemon.favorite}
        />
      })}
    </div>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(20).fill('')
}

export default PokemonList
