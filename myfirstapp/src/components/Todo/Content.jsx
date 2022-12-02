import React from "react";
import "../../Bootstrap.css";
import "../Learn/List.css";
class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: [
        {
          id: 1,
          name: "priya",
          Designation: "Developer",
          status: false,
          date: new Date(),
        },
        {
          id: 2,
          name: "Atchaya",
          Designation: "Developer",
          status: false,
          date: new Date(),
        },
        {
          id: 3,
          name: "pradeep",
          Designation: "Developer",
          status: false,
          date: new Date(),
        },
        {
          id: 4,
          name: "karthik",
          Designation: "Developer",
          status: false,
          date: new Date(),
        },
      ],
    };
  }

  render() {
    return (
      <>
        <div className="head" style={{ marginTop: "30px" }}>
          <h2 style={{ color: "blue" }}>Table List</h2>
          <table className="table table-success table-striped">
            <thead className="table-dark">
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Designation</td>
                <td>Status</td>
                <td>Date</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              {this.state.userList.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.Designation}</td>
                  <td>{user.status.toString()}</td>
                  <td>{user.date.toString()}</td>
                  <td>
                    <button className="btn btn-outline-warning">
                      <i class="fa-solid fa-pen"></i>
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-outline-danger">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default Content;
