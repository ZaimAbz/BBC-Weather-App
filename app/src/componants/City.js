import React, { Component } from "react";

class City extends Component {
  render() {
    return (
      <div style={{ width: "18%" }}>
        <div className="Card">
          <div className="img-card">
            <img calssName="city-img" src={this.props.link} />
          </div>
          <hi className="card-title">{this.props.name}</hi>
        </div>
      </div>
    );
  }
}

export default City;
