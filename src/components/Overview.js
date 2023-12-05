import PropTypes from "prop-types";

const Overview = ({
  location,
  temp,
  temp_Unit,
  condition,
  icon,
  pressure,
  humidity,
  temp_min,
  temp_max,
  wind_speed,
}) => {
  const iconLink = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <div>
      <div className="overview">
        <div>
          <p>location: {location}</p>
          <p>
            temp: {temp}
            {temp_Unit}
          </p>
          <p>condition: {condition}</p>
        </div>
        <div className="weather-icon">
          <img src={iconLink} alt="" />
        </div>
      </div>

      <div className="details">
        <div>
          <p>pressure: {pressure},</p>
          <p>humidity: {humidity},</p>
          <p>temp_min: {temp_min}</p>
          <p>temp_max: {temp_max}</p>
          <p>wind speed: {wind_speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

Overview.propTypes = {
  location: PropTypes.string,
  temp: PropTypes.number,
  temp_Unit: PropTypes.string,
  condition: PropTypes.string,
};

export default Overview;
