import React from "react";
import 'animate.css';

const Hourly = ({ weather }) => {
    return (
        <div className="hourly__weather">
            <div className="container">
                <div className="forecast__card animate__animated animate__slideInUp">
                    <p className="cards__name">Hourly Weather in {`${weather?.location?.name}, ${weather?.location?.country}`} for {weather?.forecast?.forecastday[0].date}</p>
                    {weather?.forecast?.forecastday[0].hour.map((el) => (
                        <div className="forecast__grid">
                            <p className="forecast__info">{el.time.slice(11, 16)}</p>
                            <p className="forecast__info forecast__temp">{el.temp_c > 0 ? `+${el.temp_c}°C` : `${el.temp_c}°C`}</p>
                            <p className="forecast__info"><img className="forecast__img" src={el.condition.icon} alt="" /></p>
                            <p className="forecast__info">{el.condition.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hourly