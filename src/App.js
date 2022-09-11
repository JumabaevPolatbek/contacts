// import logo from './logo.svg';
import "./App.css";
import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    var arrName = [];
    var arrPhone = [];
    var arrEmail = [];
    this.arrEmail = arrEmail;
    this.arrPhone = arrPhone;
    this.arrName = arrName;
    this.state = {
      name: this.arrName,
      phone: this.arrPhone,
      email: this.arrEmail,
    };
    this.InfoUsers = this.InfoUsers.bind(this);
    this.save = this.save.bind(this);
  }
  save(e) {
    e.preventDefault();
    const user = document.forms[0][0];
    const phoneUser = document.forms[0][1];
    const emailUser = document.forms[0][2];
    this.arrName.push(user.value);
    this.arrPhone.push(phoneUser.value);
    this.arrEmail.push(emailUser.value);
    this.setState({
      name: this.arrName,
      phone: this.arrPhone,
      email: this.arrEmail,
    });
  }
  InfoUsers({ info, id }) {
    return (
      <div className="info">
        <span>{info.name[id]}</span>
        <span>{info.phone[id]}</span>
        <span>{info.email[id]}</span>
      </div>
    );
  }
  render() {
    return (
      <div className="container">
        <div className="left">
          <h1>Добавить</h1>
          <form className="form" onSubmit={this.save}>
            <p>Имя</p>
            <input type="text" name="name" />
            <p>Телефон</p>
            <input type="tel" name="phone" />
            <p>Email</p>
            <input type="email" name="email" />
            <input type="submit" name="submit" value="Добавить" />
          </form>
        </div>
        <div className="right">
          <h1>Список контактов</h1>
          <div className="list-users">
            <h2>Имя</h2>
            <h2 className="phone">Телефон</h2>
            <h2>Email</h2>
          </div>
          {this.state.name.map((user, index) => {
            return <this.InfoUsers info={this.state} key={index} id={index} />;
          })}
        </div>
      </div>
    );
  }
}
export default Form;
