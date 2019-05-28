import React from "react";
import Form from "./components/Form";
import TodayWeather from "./components/TodayWeather";
import "./App.css";

const API_KEY = "dfc1b58e7ecdfba571b36a9152292668";

class App extends React.Component {
    state = {
        cityInForm: undefined,
        period : 1,
        city: undefined,
        temp: [],
        pressure: [],
        humidity: [],
        icon: [],
        daydate: [],
        error: undefined
      };

    parsData = async (city, period) =>{
      if (city) {
        this.setState({
      temp: [],
      pressure: [],
      humidity: [],
      icon: [],
      daydate: [],
      });
      //console.log(`${city}`);

        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
          )
          .then(response =>{
            if (response.ok){
              return response.json();}
            else{
              this.setState({
            city: undefined,
            error: "Такого города не найдено"
              });
            throw new Error('Такого города не найдено');}
            })
          .then(data => {

            this.setState({
              city: data.city.name,
              error:undefined
            });
            for (let i= 0; i< 40;i=i+8){
            this.setState({
              temp: this.state.temp.concat(`${data.list[i].main.temp}`),
              pressure: this.state.pressure.concat(`${data.list[i].main.pressure}`),
              humidity: this.state.humidity.concat(`${data.list[i].main.humidity}`),
              icon: this.state.icon.concat(`${data.list[i].weather[0].icon}`),
              daydate: this.state.daydate.concat(`${data.list[i].dt_txt}`)
            });}
          }).catch(function(error) {
            //alert( error.message);
          });}else{

        this.setState({
      city: undefined,
      error: "Введите название города"
        });
      }
    };

    changePeriod= (a)=>{this.setState( (state)=> {return {period: a}} );};
    changeCityInForm= (str)=>{this.setState((state)=> {return {cityInForm: str}} );};

    handleChange(e) {
      e.preventDefault();
      let CITY=this.state.cityInForm;
      let PERIOD=this.state.period;

      if(e.target.type !== "button"){
        this.changeCityInForm(e.target.elements.field.value);
      //console.log(`submit в форме, город: ${e.target.elements.field.value}`)
      CITY=e.target.elements.field.value;
      };

      if(e.target.type === "button"){
        if (e.target.name ==="butt1"){
          this.changePeriod(1);
          PERIOD=1;
        };
        if (e.target.name ==="butt2"){
          this.changePeriod(2);
          PERIOD=2;
        };
        if (e.target.name ==="butt5"){
          this.changePeriod(5);
          PERIOD=5;
        };
        //console.log(`нажали  ${e.target.name}`);
      }
      //console.log(`город  ${CITY} период ${PERIOD}`);
      this.parsData(CITY,PERIOD);
    }

  render() {
    return (
      <div  align="center">
        <h1>Прогноз погоды</h1>
        <Form formProp0={this.handleChange.bind(this)}/>
        <TodayWeather state={this.state}/>
        <p>на основе данных <a href="https://openweathermap.org/">ОpenWeatherMap</a></p>
    </div>
    );
  }
}
export default App;
