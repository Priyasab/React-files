import React from "react";
import { Link } from "react-router-dom";

function Logout() {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "aqua" }}>
        <div className="row" style={{ height: "500px" }}>
          <div className="col">
            <h4 className="mt-5 " style={{ color: "Red" }}>
              LOG OUT
            </h4>
            <div>
              Logged out Successfully,<Link to="/login">Click to Login</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Logout;
