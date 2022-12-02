import React from "react";
import "../../Bootstrap.css";
import "../Learn/List.css";
class ListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.inputOnChange = this.inputOnChange.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      name: "",
      Designation: "",

      userList: [
        {
          id: 1,
          name: "priya",
          Designation: "Developer",
        },
        {
          id: 2,
          name: "Atchaya",
          Designation: "Developer",
        },
        {
          id: 3,
          name: "pradeep",
          Designation: "Developer",
        },
        {
          id: 4,
          name: "karthik",
          Designation: "Developer",
        },
      ],
    };
  }
  inputOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  submit(event) {
    event.preventDefault();
    console.log(this.state.name, this.state.Designation);

    var newUser = {
      id: this.state.userList.length + 1,
      name: this.state.name,
      Designation: this.state.Designation,
    };

    this.setState({
      userlist: this.state.userList.push(newUser),
    });
  }
  render() {
    return (
      <>
        <div className="form-outer">
          <h3>Controlled component-form</h3>
          <form onSubmit={this.submit}>
            <label>name</label>
            <input
              className="btn btn-primary"
              type="text"
              name="name"
              value={this.state.name}
              placeholder="name"
              autoComplete="current-name"
              onChange={this.inputOnChange}
            ></input>
            <br></br>
            <label>Design</label>
            <input
              className="btn btn-primary"
              type="text"
              name="Designation"
              value={this.state.Designation}
              placeholder="Designation"
              autoComplete="current-Designation"
              onChange={this.inputOnChange}
            ></input>
            <br></br>
            <button className="btn btn-danger" type="submit">
              Add
            </button>
          </form>
        </div>
        <div className="container">
          <h4>Table List</h4>
          <table className="table table-primary table-striped">
            <thead className="table-dark">
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Designation</td>
              </tr>
            </thead>
            <tbody>
              {this.state.userList.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.Designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default ListComponent;
