import React from "react";

class Forecast extends React.Component {
  render() {
    return (
      <div>
        <button name="butt2" onClick={this.props.forecastProp2}>
          Прогоноз на завтра{" "}
        </button>
        <button name="butt3" onClick={this.props.forecastProp5}>
          Прогноз на 5 дней{" "}
        </button>
      </div>
    );
  }
}

export default Forecast;
