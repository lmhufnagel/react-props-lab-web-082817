import React from 'react';

export default class Spaceship extends React.Component {
  render(){
    return(
    <div className="spaceship">
      <h1>name: {this.props.name} </h1>
      <p>speed: {this.props.speed}</p>
      <p>hasRockets: {this.props.hasRockets}</p>
      <p>colors: {this.props.colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
