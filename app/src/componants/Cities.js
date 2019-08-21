import React, { Component } from "react";
import City from "./City";

const data = [
  {
    name: "London",
    link:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Paris",
    link:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
  },
  {
    name: "New York",
    link:
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
  },
  {
    name: "Singapore",
    link:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1549&q=80"
  },
  {
    name: "Sydney",
    link:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
  }
];

class Cities extends Component {
  render() {
    return (
      <div>
        <div className="Cities">
          {data.map(city => {
            return <City name={city.name} link={city.link} />;
          })}
        </div>
      </div>
    );
  }
}

export default Cities;
