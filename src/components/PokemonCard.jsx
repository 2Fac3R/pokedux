/* eslint-disable react/prop-types */
import { Card } from 'antd'
import Meta from "antd/lib/card/Meta";
import StarButton from './StarButton';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions';

function PokemonCard({ id, name, sprites, types, abilities, favorite }) {
  const dispatch = useDispatch()

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }))
  }

  return (
    <Card
      title={name}
      cover={
        <img
          src={sprites.front_shiny}
          alt={name}
        />}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta
        title='Types'
        description={
          types.map((type) => (
            <ul key={type.url}>
              <li>{type.name}</li>
            </ul>
          ))}
      />
      <br />
      <Meta
        title='Abilities'
        description={
          abilities.map((ability) => (
            <ul key={ability.url}>
              <li>{ability.name}</li>
            </ul>
          ))
        }
      />
    </Card>
  )
}

export default PokemonCard
