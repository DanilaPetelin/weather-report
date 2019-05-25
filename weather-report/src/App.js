import React from "react";
import Form from "./components/Form";
import TodayWeather from "./components/TodayWeather";
import Forecast from "./components/Forecast";

const API_KEY = "dfc1b58e7ecdfba571b36a9152292668";

class App extends React.Component {
  state = {
    city: undefined,
    temp: undefined,
    pressure: undefined,
    humidity: undefined,
    icon: undefined,
    period : 1
  };

  onClickInForecast2 = (event)=>{
    event.preventDefault();
    this.setState({period : 2});
  };

  onClickInForecast5 = (event)=>{
    event.preventDefault();
    this.setState({period : 5});
  };

  OnSubmitInForm = (event) => {
    event.preventDefault();
    this.setState({period : 1});
    const CITY = event.target.elements.field.value;
    let temp1=this.state.period
    console.log(temp1);
    this.parsData(CITY, temp1);
  };
  //-----------------------------------------------
parsData = async (city, period) =>
  {
    //для прогноза на 1 день PERIOD = "weather" для прогноза на 5 дней PERIOD ="forecast"
    let PERIOD ="weather";
    if (period !== 1) {
      PERIOD ="forecast";
    };

    console.log(PERIOD);

    if (city) {
      console.log(`${city}`);
      fetch(
        `https://api.openweathermap.org/data/2.5/${PERIOD}?q=${city}&appid=${API_KEY}&units=metric`
        )
        .then(response => response.json())
        .then(data => {
          this.setState({
            city: data.name,
            temp: data.main.temp,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            icon: data.weather[0].icon
          });
        });
    }
  };
//----------------------------------------------------
  render() {
    return (
      <div>
        <Form formProp0={this.OnSubmitInForm} />
        <Forecast
          forecastProp2={this.onClickInForecast2}
          forecastProp5={this.onClickInForecast5}
        />
        <TodayWeather
          city={this.state.city}
          temp={this.state.temp}
          pressure={this.state.pressure}
          humidity={this.state.humidity}
          icon={this.state.icon}
          period={this.state.period}
        />
    </div>
    );
  }
}
export default App;
