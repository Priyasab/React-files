import React from "react";
import { Link } from "react-router-dom";
import "../Todo/Welcome.css";
function Welcome(props) {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "violet" }}>
        <div className="row" style={{ height: "500px" }}>
          <div className="col">
            <h4 className="mt-5 " style={{ color: "blue" }}>
              Welcome {props.params.name}
            </h4>
            <div>
              To view the userList,<Link to="/content">Click here</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Welcome;
