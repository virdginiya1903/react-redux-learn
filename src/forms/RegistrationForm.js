import React, { Component } from "react";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "" //   значение дефолтное для email
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleSubmit = event => {
    // за счет жирной стрелочной функции this не нужно прибивать  через bind(this) как handleEmailChange
    event.preventDefault(); // Эта функция отменяет действие в браузере (в нашем случае позволяет не перезагружать страницу)
    // https://learn.javascript.ru/default-browser-action
    console.log("form is submitted. Email value is", this.state.email);
  };

  handleEmailChange(event) {
    console.log("email was changed", event.target.value);
    this.setState({ email: event.target.value }); // на вход будет приходить (event) и это event нашего input
    // в котором содержиться наш value теперь, когда будет вызываться this.handleEmailChange у нас будет меняться email
    // в локальном  state
  }

  render() {
    return (
      // Добавляем form атрибут onSubmit выывается функция this.handleSubmit
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="E-mail"
          value={this.state.email} // Значение
          onChange={this.handleEmailChange} // При изменении значения в input (onChange) будет вызываться this.handleEmailChange
        />
        <button>Save</button>
      </form>
    );
  }
}
// Кнопка для form onSubmit  У button по умолчанию тип Submit и при нажатии вызывается функция this.handleEmailChange
export default RegistrationForm;
