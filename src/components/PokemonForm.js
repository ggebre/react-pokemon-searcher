import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state = {
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: ""
    }
  }
  onChangeName = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  onChangeHp = (event) => {
    this.setState({
      hp: event.target.value
    })
  }
  onChangeFront = (event) => {
    const sprites = {...this.state.sprites}
    sprites.front = event.target.value
    this.setState({
      sprites
    })
    // this.setState({
    //   sprites: {
    //     front: event.target.value
    //   }
    // })
  }
  onChangeBack = (event) => {
    const sprites = {...this.state.sprites}
    sprites.back = event.target.value
    this.setState({
      sprites
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createAPokeman(this.state)
  }
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(event) => this.handleSubmit(event)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.onChangeName}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.onChangeHp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.onChangeFront}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.onChangeBack}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
