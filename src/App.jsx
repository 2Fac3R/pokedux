/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getPokemons, getPokemonDetails } from './api'
import { setPokemons } from './actions'

import { Col } from 'antd'
import Searcher from './Components/Searcher'
import PokemonList from './Components/PokemonList'

import logo from './assets/logo.svg'
import './App.css'

function App() {
  const pokemons = useSelector(state => state.pokemons)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonResults = await getPokemons()
      const pokemonDetailed = await Promise.all(pokemonResults.map((pokemon) => getPokemonDetails(pokemon)))
      dispatch(setPokemons(pokemonDetailed))
    }

    fetchPokemons()
  }, [dispatch])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col
        span={8}
        offset={8}
      >
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

export default App
