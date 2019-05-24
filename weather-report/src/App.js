import React from "react";
import Form from "./components/Form";
import TodayWeather from "./components/TodayWeather";

const API_KEY = "dfc1b58e7ecdfba571b36a9152292668";
class App extends React.Component {
  state = {
    city: undefined,
    temp: undefined,
    pressure: undefined,
    humidity: undefined
  };
  /*
onClickInForm1 = (event)=>{console.log(`нажали 1`);
event.preventDefault();
}
onClickInForm2 = (event)=>{console.log(`нажали 2`);
event.preventDefault();
}
onClickInForm3 = (event)=>{console.log(`нажали 3`);
event.preventDefault();
}
*/
  OnSubmitInForm = async event => {
    //const DAY = event.target.elements.day.value;
    const CITY = event.target.elements.field.value;
    //const butval = event.target.elements.butt1.value;
    if (CITY) {
      console.log(`${CITY}   `);
      //для прогноза на 5 дней
      //let PERIOD ="forecast";
      //для прогноза на 1 день
      let PERIOD = "weather";
      event.preventDefault();
      fetch(
        `https://api.openweathermap.org/data/2.5/${PERIOD}?q=${CITY}&appid=${API_KEY}&units=metric`
      )
        .then(response => response.json())
        .then(data => {
          this.setState({
            city: data.name,
            temp: data.main.temp,
            pressure: data.main.pressure,
            humidity: data.main.humidity
          });
        });
    }
  };

  render() {
    return (
      <div>
        привет из главного компонента
        <Form
          formProp0={this.OnSubmitInForm}
          //formProp1={this.onClickInForm1}
          //formProp2={this.onClickInForm2}
          // formProp3={this.onClickInForm3}
        />
        <TodayWeather
          city={this.state.city}
          temp={this.state.temp}
          pressure={this.state.pressure}
          humidity={this.state.humidity}
        />
      </div>
    );
  }
}
export default App;
