import React from "react";
import "../Controlled/Controlled.css";
class ControlledComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isLoginSuccess: false,
      isLoginFail: false,
    };
    this.inputOnChange = this.inputOnChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  inputOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submit(event) {
    event.preventDefault();
    console.log(this.state.username, this.state.password);
    if (this.state.username === "priya" && this.state.password === "12345") {
      this.setState({
        isLoginSuccess: true,
        isLoginFail: false,
      });
    } else {
      this.setState({
        isLoginSuccess: false,
        isLoginFail: true,
      });
    }
    console.log(this.state.isLoginSuccess);
  }
  render() {
    return (
      <div className="form-outer">
        <h3>Controlled component-form</h3>
        <form>
          <label>Username</label>
          <input
            className="btn btn-primary"
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.inputOnChange}
          ></input>
          <br></br>
          <label>Password</label>
          <input
            className="btn btn-primary"
            type="password"
            name="password"
            placeholder="password"
            autoComplete="current-password"
            value={this.state.password}
            onChange={this.inputOnChange}
          ></input>
          <br></br>
          <button
            className="btn btn-danger"
            type="submit"
            onClick={this.submit}
          >
            login
          </button>
        </form>
        <LoginStatus
          isSuccess={this.state.isLoginSuccess}
          isFail={this.state.isLoginFail}
        ></LoginStatus>
      </div>
    );
  }
}
function LoginStatus(props) {
  if (props.isSuccess || props.isFail) {
    return props.isSuccess ? (
      <div className="text-primary">Login Success...</div>
    ) : (
      <div className="text-danger">Login Failed!!!!</div>
    );
  }
}
export default ControlledComponent;
