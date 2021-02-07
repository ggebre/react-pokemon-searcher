import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state = {
    isflipped: false
  }

  handleFlipping = () => {
    this.setState({
      isflipped: !this.state.isflipped
    })
  } 
  
  render() {
    return (
      <Card>
        <div onClick={()=> this.handleFlipping()}>
          <div className="image">
            {this.state.isflipped 
                  ? 
            <img src={'' + this.props.pokeman.sprites.front} alt="oh no!" /> 
            : 
            <img src={'' + this.props.pokeman.sprites.back} alt="oh no!" /> 
            }
            
          </div>
          <div className="content">
            <div className="header">{this.props.pokeman.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokeman.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
