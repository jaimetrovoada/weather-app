import Btn from "./components/Btn";
import Overview from "./components/Overview";
import { useState, useEffect } from "react";
import axios from "axios";
import { GrFormRefresh } from "react-icons/gr";

function App() {
  const [data, setData] = useState("");

  // OpenWeatherMap APi
  // get location test
  const apiKey = "cdf99154d54a9aa87cc06d687005ad20";
  const getWeather = () => {
    navigator.geolocation.getCurrentPosition(success, fail);

    function success(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat.toFixed(
        2
      )}&lon=${lon.toFixed(
        2
      )}&appid=${apiKey}&units=metric&exclude=minutely,hourly,alerts`;

      console.log(`lat ${lat}// lon ${lon}// url ${url}`);
      axios.get(url).then((res) => {
        console.log(res);
        setData(res.data);
      });
    }

    function fail() {
      console.log("couldn't get location");
    }
  };
  useEffect(() => {
    getWeather();
  }, []);

  const [displayTmr, setDisplayTmr] = useState(false);

  return (
    <div className="container">
      {!displayTmr ? (
        data ? (
          <Overview
            temp={data.current.temp}
            temp_Unit={"C"}
            condition={data.current.weather[0].main}
            icon={data.current.weather[0].icon}
            pressure={data.current.pressure}
            humidity={data.current.humidity}
            temp_min={data.daily[0].temp.min}
            temp_max={data.daily[0].temp.max}
            wind_speed={data.current.wind_speed}
          />
        ) : (
          <div>Sorry couldn't get the weather information</div>
        )
      ) : data ? (
        <Overview
          temp={data.daily[1].temp.day}
          temp_Unit={"C"}
          condition={data.daily[1].weather[0].main}
          icon={data.daily[1].weather[0].icon}
          pressure={data.daily[1].pressure}
          humidity={data.daily[1].humidity}
          temp_min={data.daily[1].temp.min}
          temp_max={data.daily[1].temp.max}
          wind_speed={data.daily[1].wind_speed}
        />
      ) : (
        <div>Sorry couldn't get the weather information</div>
      )}

      {/* location={data.current.weather[0].main} */}
      <div className="day">
        <Btn
          text="Today"
          onClick={() => {
            setDisplayTmr(false);
          }}
        />
        <Btn
          text="Tomorrow"
          onClick={() => {
            setDisplayTmr(true);
          }}
        />
        <Btn text={<GrFormRefresh />} onClick={getWeather} />
      </div>
    </div>
  );
}

export default App;
