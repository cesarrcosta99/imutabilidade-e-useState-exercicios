import React from 'react'
import { Card, PokemonName, PokemonType, EvolveButton } from './styles'



const PokemonCard = ({ pokemon1, setPokemon }) => {
  const { color, image, nome, tipo, weight, evolved } = pokemon1
  const evoluirPokemon = () => {
    if (evolved === false) {
      const evolucao = {
        ...pokemon1,
        nome: "pikachu",
        evolved: true,
        image:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
      }
      setPokemon(evolucao)
    } else {
      const evolucao = {
        ...pokemon1,
        nome:"ivysaur",
        image: 
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
        
      }
        setPokemon(evolucao)
    }
  }



  return (
    <Card color={color}>
      <img src={image} alt={`Pokemon`} />
      <PokemonName>{nome}</PokemonName>
      <PokemonType>{tipo}</PokemonType>
      <p>{weight}kg</p>

      <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard