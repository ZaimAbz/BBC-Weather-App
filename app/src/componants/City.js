import React, { Component } from "react";
import DarkSkyApi from "dark-sky-api";
DarkSkyApi.apiKey = process.env.REACT_APP_BBC_WEATHER;


class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loaded: false
    };
  }
  componentDidMount() {
    DarkSkyApi.loadCurrent(this.props.position).then(result => {
      console.log(result)
      this.setState({
        data: result,
        loaded: true
      });
    });
  }
  render() {
    return (
      <div style={{ width: "18%" }}>
        <div className="Card">
          <div className="img-card">
            <img calssName="city-img" src={this.props.image} />
          </div>
          <h1 className="card-title">{this.props.name}</h1>
          <p>{this.state.loaded ? this.state.data.summary : null}</p>
          <p>{this.state.loaded ? this.state.data.temperature : null}</p>
          <p>{this.state.loaded ? this.state.data.icon : null}</p>
          
        </div>

      </div>
    );
  }
}

export default City;
