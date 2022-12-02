import React from "react";
import "../Uncontrolled/Uncontrolled.css";
import "../../Bootstrap.css";

class UncontrolledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.username = React.createRef();
    this.password = React.createRef();
  }
  submit(event) {
    event.preventDefault();
    console.log(this.username.current.value);
    console.log(this.password.current.value);
  }

  render() {
    return (
      <div className="form-outer">
        <h5>Uncontrolled Form</h5>
        <form>
          <label>Username</label>
          <input
            className="btn btn-primary"
            type="text"
            name="username"
            placeholder="username"
            ref={this.username}
          ></input>
          <br></br>
          <label>Password</label>
          <input
            className="btn btn-primary"
            type="password"
            name="password"
            placeholder="password"
            autoComplete="current-password"
            ref={this.password}
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
      </div>
    );
  }
}
export default UncontrolledComponent;
