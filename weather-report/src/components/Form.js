import React from "react";

class Form extends React.Component {

  render() {
    return (
      <div>
      <form onSubmit={this.props.formProp0}>
        <input type="text" placeholder="Введите город" name="field" />
        <button>Узнать погоду</button>
      </form>

        <input type="button" name="butt1" value ="Погода сейчас" onClick={this.props.formProp0}  />
        <input type="button" name="butt2" value = "Прогноз на завтра" onClick={this.props.formProp0}  />
        <input type="button" name="butt5" value = "Прогноз на пять дней" onClick={this.props.formProp0}  />
      </div>
    );
  }
}

export default Form;
