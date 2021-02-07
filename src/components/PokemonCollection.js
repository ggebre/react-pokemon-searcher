import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  listPokemans = () => {
    return this.props.pokemans.map((pokeman, index) => <PokemonCard pokeman={pokeman} key={index}/>)
  }
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {/* <h1>Hello From Pokemon Collection</h1> */}
        {this.listPokemans()}
        
      </Card.Group>
    )
  }
}

export default PokemonCollection
