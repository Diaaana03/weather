import React from "react";

const Days = ({weather}) => {
    return (
        <div className="hourly__weather">
            <div className="container">
                <div className="forecast__card animate__animated animate__slideInUp">
                    <p className="cards__name">3 Days Forecast for {`${weather?.location?.name}, ${weather?.location?.country}`}</p>
                        {weather?.forecast?.forecastday.map((el) => (
                            <div className="forecast__grid">
                                <p className="forecast__info">{el.date}</p>
                                <p className="forecast__info forecast__temp">{el.day["maxtemp_c"] > 0 ? `+${el.day["maxtemp_c"]}°C` : `${el.day["maxtemp_c"]}°C`}</p>
                                <p className="forecast__info"><img className="forecast__img" src={el.day.condition.icon} alt="" /></p>
                                <p className="forecast__info">{el.day.condition["text"]}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Days
