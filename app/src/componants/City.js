import React, { Component } from "react";
import DarkSkyApi from "dark-sky-api";
import mapping from "../Maping";
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
      this.setState({
        data: result,
        loaded: true
      });
    });
  }

  render() {
    const { loaded, data } = this.state;
    if (loaded) {
      return (
        <div ClassName="City-componant">
          <div className="Card">
            <div className="img-card">
              <img calssName="city-img" src={this.props.image} />
            </div>
            <div className="text-card">
              <h1 className="card-title">{this.props.name}</h1>
              <p>{data.summary}</p>
              <p>{data.temperature}</p>
              <p>
                {data.icon}
                <div>
                  <img src={mapping[data.icon]} />
                </div>
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>data is not loaded</div>;
    }
  }
}

export default City;
