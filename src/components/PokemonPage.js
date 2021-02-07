import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemans: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(pokemanObjs => this.setState({
        pokemans: pokemanObjs
      }))
  }
  createAPokeman = (pokeman) => {
    
    fetch(' http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pokeman),
    })
    .then(resp => resp.json())
    .then(pokemon => {
      const pokemans = this.state.pokemans.push(pokemon)
      this.setState({pokemans})
    })
    
  }

  searchPokemansByName = (name) => {
    // get filtered pokemans by their name 
    const filterdPokemans = this.state.pokemans.filter(pokeman => pokeman.name.startsWith(name))
    this.setState({pokemans: filterdPokemans})
  }
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createAPokeman={this.createAPokeman}/>
        <br />
        <Search searchPokemans={this.searchPokemansByName}/>
        <br />
        <PokemonCollection pokemans={this.state.pokemans}/>
      </Container>
    )
  }
}

export default PokemonPage
