import React from 'react';
import ForecastImage from './ForecastImage';

class Forecast extends React.Component {
  render(){
    return (
      <div className="forecast">
        <div className="day">
          <div>
            <h3>
              {this.props.details.date_br}
            </h3>
            <ForecastImage weather={this.props.details.text_icon.icon.day}/>
          </div>
          <div>
            <span className="min">
              {this.props.details.temperature.min}°
            </span>
            <span className="splitter" />
            <span className="max">
              {this.props.details.temperature.max}°
            </span>
          </div>
        </div>
        <div className="period">
          <ForecastImage weather={this.props.details.text_icon.icon.morning}/>
          <span>
            Morning
          </span>
        </div>
        <div className="period">
          <ForecastImage weather={this.props.details.text_icon.icon.afternoon}/>
          <span>
            Afternoon
          </span>
        </div>
        <div className="period">
          <ForecastImage weather={this.props.details.text_icon.icon.night}/>
          <span>
            Night
          </span>
        </div>
      </div>
    )
  }

}

export default Forecast;
