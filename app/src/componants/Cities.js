import React, { Component } from "react";
import City from "./City";
import LondonImg from "../img/London.jpeg";
import ParisImg from "../img/Paris.jpeg";
import NewYorkImg from "../img/Newyork.jpeg";
import SingaporeImg from "../img/Singapore.jpeg";
import SydneyImg from "../img/Sydney.jpeg";

  
class Cities extends Component {
  render() {
    return (
      <div>
        <div className="Cities">
          
          <City
            name="London"
            image={LondonImg}
            position= { {
            latitude: 51.509865,
          longitude: -0.093145
        }}
              />
          <City
            name= "Paris"
            image={ParisImg}
            position={{
              latitude: 48.864716,
              longitude: 2.349014}}
          />
          <City
            name="New York"
            image={NewYorkImg}
            position={{
              latitude: 40.7128,
              longitude: -74.005974}}
          />
          <City
            name="Singapore"
            image={SingaporeImg}
            position={{
              latitude: 1.352083,
              longitude: 103.819839
            }}
              />
          <City
            name="Sydney"
            image={SydneyImg}
            position={{
              latitude: -33.86882,
              longitude: 151.20929
            }}
              />
        </div>
      </div>
    );
  }
}

export default Cities;
