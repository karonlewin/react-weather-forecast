import React from 'react';
import Forecast from './Forecast';


class ForecastPanel extends React.Component {
  render(){
    return (
      <div className="forecast">
        {Object.keys(this.props.forecast).map(key => (
          <Forecast key={key} details={this.props.forecast[key]}/>
        ))}
      </div>
    )
  }

}

export default ForecastPanel;
