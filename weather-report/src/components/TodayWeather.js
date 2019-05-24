import React from "react";

class TodayWeather extends React.Component {
  render() {
    const img = `https://openweathermap.org/img/w/${this.props.icon}.png`;
    return (
      <div>
        {this.props.city && (
          <div>
            <h1>{this.props.city}
            <img src={img} alt="icon"/>
            </h1>
            <p>Температура: {this.props.temp}</p>
            <p>Давление: {this.props.pressure*0.75}</p>
            <p>Влажность: {this.props.humidity}%</p>
          </div>
        )}
      </div>
    );
  }
}

export default TodayWeather;
