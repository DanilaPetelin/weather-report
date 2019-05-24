import React from "react";

class Form extends React.Component {

  render() {
    return (
      <form /* onSubmit ={this.props.formProp0}*/>
      <input type="text" onChange={this.props.formProp0} name ="field" />
      <button name ="butt1" onClick={this.props.formProp1} value="1">погода сегодня </button>
      <button name ="butt2" onClick={this.props.formProp2} value="2">погода завтра </button>
      <button name ="butt3" onClick={this.props.formProp3} value="5">погода на 5 дней </button>
      </form>
    );
  }
}

export default Form;
