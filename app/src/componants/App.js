import React, { Component } from "react";
import Cities from "./Cities";
import Nav from "./Nav";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Nav />
        
        <div>
          <Cities />
        </div>
      </div>
    );
  }
}

export default App;
