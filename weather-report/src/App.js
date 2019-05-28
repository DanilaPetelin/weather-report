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
      if (city && city !== this.state.city) {
        console.log(`${city}`);
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
          )
          .then(response =>{ 
            if (response.ok)
              return response.json();
            throw new Error('Такого города не найдено');
            })
          .then(data => {
  
            console.log(data);
            // let date =new Date((data.list[8].dt)*1000);
            // let options = {
            //   year: 'numeric',
            //   month: 'long',
            //   day: 'numeric',
            //   weekday: 'long',
            // };
            // let day_date = date.toLocaleString("ru", options);
            this.setState({
              city: data.city.name,
             // daydate: day_date,
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
            alert( error.message);
          });}else{
        this.setState({
      city: undefined,
      temp: [],
      pressure: [],
      humidity: [],
      icon: [],
      daydate: [],
      period : 1,
      error: "Введите название города"
        });
      }

    };

    changePeriod= (a)=>{this.setState( (state)=> {return {period: a}} );};
    changeCityInForm= (str)=>{this.setState((state)=> {return {cityInForm: str}} );};

    handleChange(e) {
      e.preventDefault();
      let CITY1=this.state.cityInForm;
      let PERIOD1=this.state.period;

      if(e.target.type !== "button"){
        this.changeCityInForm(e.target.elements.field.value);
      //console.log(`submit в форме, город: ${e.target.elements.field.value}`)
      CITY1=e.target.elements.field.value;
      };

      if(e.target.type === "button"){
        if (e.target.name ==="butt1"){
          this.changePeriod(1);
          PERIOD1=1;
        };
        if (e.target.name ==="butt2"){
          this.changePeriod(2);
          PERIOD1=2;
        };
        if (e.target.name ==="butt5"){
          this.changePeriod(5);
          PERIOD1=5;
        };
        //console.log(`нажали  ${e.target.name}`);
      }
      console.log(`город  ${CITY1} период ${PERIOD1}`);
      this.parsData(CITY1,PERIOD1);
    }

  render() {
    return (
      <div>
        <Form formProp0={this.handleChange.bind(this)}/>
        <TodayWeather state={this.state}/>
    </div>
    );
  }
}
export default App;
