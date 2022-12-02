import React from "react";
import "../../Bootstrap.css";
import "../Todo/Login.css";
import Authentication from "./Authentication";

class Login extends React.Component {
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
      Authentication.setLoggedUser(this.state.username);

      this.props.navigate(`/welcome/${this.state.username}`);
      this.setState({
        isLoginSuccess: true,
        isLoginFail: false,
      });
    } else {
      this.props.navigate("*");
      this.setState({
        isLoginSuccess: false,
        isLoginFail: true,
      });
    }
    console.log(this.state.isLoginSuccess);
  }
  render() {
    return (
      <>
        <div className="container mt-5">
          <div className="row justify-content-center ">
            <div className="card col-md-4">
              <h3 className="mt-4">Login</h3>
              <div className="card-body">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPEvTjmsFMAmmH_TlNcYdfiY7EzozIBiTSQ&usqp=CAU"
                  className="mb-5"
                  style={{ borderRadius: "50%" }}
                  alt=""
                ></img>
                <form>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    name="username"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.inputOnChange}
                  ></input>

                  <input
                    className="form-control form-control-sm mt-4"
                    type="password"
                    name="password"
                    placeholder="*****"
                    autoComplete="current-password"
                    value={this.state.password}
                    onChange={this.inputOnChange}
                  ></input>

                  <button
                    className="btn btn-success mt-4"
                    type="submit"
                    onClick={this.submit}
                  >
                    login
                  </button>
                  <LoginStatus
                    isSuccess={this.state.isLoginSuccess}
                    isFail={this.state.isLoginFail}
                  ></LoginStatus>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function LoginStatus(props) {
  if (props.isSuccess || props.isFail) {
    return props.isSuccess ? (
      <div className="alert alert-success mt-3">Login Success...</div>
    ) : (
      <div className="alert alert-danger mt-3">Login Failed!!!!</div>
    );
  }
}
export default Login;
