import React from "react";
import Form from "./components/Form";
import TodayWeather from "./components/TodayWeather";

class App extends React.Component {
    state = {
        cityInForm: undefined,
        period : 1,
        city: undefined,
        temp: undefined,
        pressure: undefined,
        humidity: undefined,
        icon: undefined
      };

      //-----------заглушка функция--------------------------
    parsData = async (city, period) =>{
      console.log(`cityInForm parsing ${city}`);
      console.log(`period from parsing ${period}`);
      this.setState((state)=> {return {city:"KieV" }} );
      this.setState((state)=> {return {temp: 40 }} );
      this.setState((state)=> {return {pressure: 576 }} );
      this.setState((state)=> {return {humidity: "SunnY" }} );
      this.setState((state)=> {return {icon: "url_picture" }} );
    };
     //----------------------------------------------------

    changePeriod= (a)=>{this.setState( (state)=> {return {period: a}} );};
    changeCityInForm= (str)=>{this.setState((state)=> {return {cityInForm: str}} );};

    handleChange(e) {
      e.preventDefault();
      let CITY1=this.state.cityInForm;
      let PERIOD1=this.state.period;
      //console.log(e.target.type);

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
