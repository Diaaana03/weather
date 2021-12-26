import React from "react";
import humidity from '../assets/images/humidity.png'; 
import uv from '../assets/images/uv.png';
import pressure from '../assets/images/pressure.png';
import wind from '../assets/images/wind.png';

const Main = ({weather}) =>{

    return (
        <div className= "main__weather">
            <div className="container">
                <aside className="main__aside">
                    <p className= "cards__name"> Air Quality Index</p>
                    <p className="aside__info">5</p>
                    <div>
                        <p>co {weather?.current?.air_quality.co} μg/m3</p>
                        <p>no2 {weather?.current?.air_quality.no2} μg/m3</p>
                        <p>o3 {weather?.current?.air_quality.o3} μg/m3</p>
                        <p>so2 {weather?.current?.air_quality.so2} μg/m3</p>
                        <p>pm2_5 {weather?.current?.air_quality.pm2_5} μg/m3</p>
                        <p>pm10 {weather?.current?.air_quality.pm10} μg/m3</p>
                    </div>
                </aside>
                <div className="main__grid">
                    <div className="main__cards first__cards color__cards">
                        <p className="cards__name">{`${weather?.location?.name}, ${weather?.location?.country}`}</p>
                        <h2 className="cards__temp">{weather?.current?.temp_c > 0? `+${weather?.current?.temp_c}°C` : `${weather?.current?.temp_c}°C`} <img className="cards__img" src={weather?.current?.condition.icon} alt=""/></h2>
                        <p className="cards__condition">{weather?.current?.condition.text}</p>
                        <p className="cards__time">{weather?.location?.localtime}</p>
                    </div>
                    <div className="main__cards second__cards">
                        <p className="cards__name">Today's Forecast for {`${weather?.location?.name}, ${weather?.location?.country}`}</p>
                        <div className="second__cards_grid">
                            <div className="second__grid second__grid_border">
                                <h2 className="second__grid_title">Morning</h2>
                                <h3 className="second__grid_temp">{weather?.forecast?.forecastday[0].astro.sunrise}</h3>
                                <img className="second__cards_img" src="https://cdn.pixabay.com/photo/2012/04/10/16/49/sun-26344_960_720.png" alt=""/>
                            </div>
                            <div className="second__grid second__grid_border">
                                <h2 className="second__grid_title">Afternoon</h2>
                                <h3 className="second__grid_temp">10t</h3>
                                <img className="second__cards_img" src="https://cdn.pixabay.com/photo/2012/04/10/16/49/sun-26344_960_720.png" alt=""/>
                            </div>
                            <div className="second__grid second__grid_border">
                                <h2 className="second__grid_title">Evening</h2>
                                <h3 className="second__grid_temp">10t</h3>
                                <img className="second__cards_img" src="https://cdn.pixabay.com/photo/2012/04/10/16/49/sun-26344_960_720.png" alt=""/>
                            </div>
                            <div className="second__grid">
                                <h2 className="second__grid_title">Overnight</h2>
                                <h3 className="second__grid_temp">10t</h3>
                                <img className="second__cards_img" src="https://cdn.pixabay.com/photo/2012/04/10/16/49/sun-26344_960_720.png" alt=""/>
                            </div>
                        </div>
                        <button type="submit" className="second__grid_btn color__cards">Next Hours</button>
                    </div>
                    <div className="main__cards third__cards">
                        <p className="cards__name">Weather Today in {`${weather?.location?.name}, ${weather?.location?.country}`}</p>
                        <h3 className="cards__feels">{weather?.current?.feelslike_c}°C</h3>
                        <p className="cards__feels_text">Feels Like</p>
                        <div className="third__card_grid">
                            <div className="third__grid">
                                <p className="third__grid_info"><img src={humidity} alt={humidity} className="third__grid_img"></img>Humidity</p>
                                <p className="third__grid_info">{weather?.current?.humidity}%</p>
                            </div>
                            <div className="third__grid">
                                <p className="third__grid_info"><img src={uv} alt={uv} className="third__grid_img"></img>UV Index</p>
                                <p className="third__grid_info">{weather?.current?.uv} of 10</p>
                            </div>
                            <div className="third__grid">
                                <p className="third__grid_info"><img src={pressure} alt={pressure} className="third__grid_img"></img>Pressure</p>
                                <p className="third__grid_info">{weather?.current?.pressure_mb} mb</p>
                            </div>
                            <div className="third__grid">
                                <p className="third__grid_info"><img src={wind} alt={wind} className="third__grid_img"></img>Wind</p>
                                <p className="third__grid_info">{weather?.current?.wind_mph} mph</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main