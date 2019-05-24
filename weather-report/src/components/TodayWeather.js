import React from "react";

class TodayWeather extends React.Component {
  render() {
    return (
      <div>
        {this.props.city && (
          <div>
            <p>Город: {this.props.city}</p>
            <p>Температура: {this.props.temp}</p>
            <p>Давление: {this.props.pressure*0.75}</p>
            <p>Влажность: {this.props.humidity}</p>
          </div>
        )}
      </div>
    );
  }
}

export default TodayWeather;
