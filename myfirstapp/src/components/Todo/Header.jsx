import React from "react";
import "../../Bootstrap.css";
import { Link } from "react-router-dom";
import Authentication from "./Authentication";

function Header() {
  let loggedIn = Authentication.isUserLoggedIn();
  return (
    <>
      <nav>
        <a href="index.html">
          <svg
            id="logo-15"
            width="49"
            height="48"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z"
              class="ccustom"
              fill="#17CF97"
            ></path>{" "}
            <path
              d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z"
              class="ccustom"
              fill="#17CF97"
            ></path>{" "}
            <path
              d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z"
              class="ccustom"
              fill="#17CF97"
            ></path>{" "}
            <path
              d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z"
              class="ccustom"
              fill="#17CF97"
            ></path>{" "}
          </svg>
        </a>
        <div>
          <ul id="navbar">
            {loggedIn && (
              <li>
                <Link to="/welcome/priya">Home</Link>
              </li>
            )}
          </ul>
        </div>
        <div>
          <ul id="navbar">
            {loggedIn && (
              <li>
                <Link to="/logout" onClick={() => Authentication.removeUser()}>
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div id="logo">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          ></img>
          {loggedIn && (
            <div>
              <Link to="/content">users</Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
export default Header;
