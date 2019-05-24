import React from "react";
import Template from "./components/Template";
import Form from "./components/Form";

const API_KEY ="dfc1b58e7ecdfba571b36a9152292668";
class App extends React.Component {

onClickInForm1 = (event)=>{console.log(`нажали 1`);
event.preventDefault();
}
onClickInForm2 = (event)=>{console.log(`нажали 2`);
event.preventDefault();
}
onClickInForm3 = (event)=>{console.log(`нажали 3`);
event.preventDefault();
}

OnSubmitInForm = async (event)=>{
//const DAY = event.target.elements.day.value;
const CITY =event.target.elements.field.value;
console.log(`${CITY}   `);
//для прогноза на 5 дней
let PERIOD ="forecast";
//для прогноза на 1 день
//let PERIOD ="weather";
event.preventDefault();
  fetch(`https://api.openweathermap.org/data/2.5/${PERIOD}?q=${CITY}&appid=${API_KEY}&units=metric`)
  .then(response => response.json())
  .then(data => console.log(data));
}

  render() {
    return (

      <div>
        привет из главного компонента
        <Template />
        <Form formProp0={this.OnSubmitInForm}
              formProp1={this.onClickInForm}
              formProp2={this.onClickInForm2}
              formProp3={this.onClickInForm3}
        />

      </div>
    );
  }
}
export default App;
