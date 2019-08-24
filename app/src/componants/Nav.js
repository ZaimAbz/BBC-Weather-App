import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
           <div className="container-logo"> 
          <img className="logo" src="data:image/png;base64,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" />
                </div>
          <nav>
            <ul>
              <li>
                <a class="active" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </nav>
        </div>
        <header>
          <h1 className="header">Weather App</h1>
        </header>
      </div>
    );
  }
}

export default Nav;
