import React from "react";

class Form extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.formProp0}>
        <input type="text" /*onSubmit={this.props.formProp0}*/ name="field" />
        <button name="butt1" /*onClick={this.props.formProp0}*/>
          Погода сегодня{" "}
        </button>
      </form>
    );
  }
}

export default Form;
