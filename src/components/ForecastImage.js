import React from 'react';

class ForecastImage extends React.Component {
  render(){
    return (
      <img src={`/icons/${this.props.weather}.png`} style={{width: '45px'}} alt={this.props.weather} />
    )
  }

}

export default ForecastImage;
