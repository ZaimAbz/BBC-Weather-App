

import CloudLightning from "./img/climacons-master/SVG/cloud-lightning.svg";
import Cloud from "./img/climacons-master/SVG/cloud.svg";
import CloudWind from "./img/climacons-master/SVG/cloud-wind.svg";
import PartlyCloud from "./img/climacons-master/SVG/partly-cloud.svg";
// import PartlyRain from "./img/climacons-master/SVG/partly-rain.svg";
// import Rain from "./img/climacons-master/SVG/rain.svg";
import Sun from "./img/climacons-master/SVG/sun.svg";
// import Wind from "./img/climacons-master/SVG/wind.svg";
const mapping = {
  asdsa: CloudLightning,
  cloudy: Cloud,
  "cloudy-wind": CloudWind,
  "partly-cloudy-day": PartlyCloud,
  "partly-cloudy-night": PartlyCloud,
  //   PartlyRain,
  //   Rain,
  "clear-day": Sun,
  //   Wind,
  "clear-night": Sun
};

export default mapping;
