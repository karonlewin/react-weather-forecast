import React, { Component } from 'react';
import '../css/App.css';
import ForecastPanel from './ForecastPanel';

class App extends Component {
  state = {
    forecast: []
  }

  componentDidMount(){
    fetch('http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/6779/days/15?token=1f1c832050619ee1b0dc80470d1848cd')
      .then(response => response.json())
      .then(forecast_data => {
          const forecast = forecast_data.data.slice(0,5);
          console.log(forecast);
          this.setState({ forecast });
      })
  }

  render() {
    return (
      <div className="App">
        <ForecastPanel forecast={this.state.forecast} />
      </div>
    );
  }
}

export default App;
