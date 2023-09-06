import { useEffect, useState } from 'react'
import { getPokemons } from './api'

import { Col } from 'antd'
import Searcher from './Components/Searcher'
import PokemonList from './Components/PokemonList'

import logo from './assets/logo.svg'
import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchPokemons = async () => {
      const res = await getPokemons()
      setPokemons(res)
    }

    fetchPokemons()
  }, [])

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
