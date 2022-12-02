import React from "react";
import "../Counter/Practice.css";
import "../../Bootstrap.css";
class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLoginSuccess: false,
      isLoginFails: false,
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
    if (this.state.username === "priya" && this.state.password === "123") {
      this.setState({
        isLoginSuccess: true,
        isLoginFails: false,
      });
    } else {
      this.setState({
        isLoginSuccess: false,
        isLoginFails: true,
      });
    }
  }
  render() {
    return (
      <div className="form-outer">
        <h3> Login form</h3>
        <div className="row ">
          <div className="col md-6">
            <form>
              <label>username:</label>
              <input
                className="btn btn-primary "
                name="username"
                type="text"
                placeholder="username"
                value={this.state.username}
                onChange={this.inputOnChange}
              ></input>
              <br></br>
              <label>password :</label>
              <input
                className="btn btn-primary "
                name="password"
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.inputOnChange}
              ></input>
              <br></br>
              <button
                className="btn btn-warning"
                style={{ color: "white" }}
                type="submit"
                onClick={this.submit}
              >
                Login
              </button>
            </form>
            <LoginStatus
              ifSuccess={this.state.isLoginSuccess}
              ifFails={this.state.isLoginFails}
            />
          </div>
        </div>
      </div>
    );
  }
}
function LoginStatus(props) {
  if (props.ifSuccess || props.ifFails) {
    return props.ifSuccess ? (
      <div>Logged in success......</div>
    ) : (
      <div>Logged in failed......</div>
    );
  }
}
export default Practice;
