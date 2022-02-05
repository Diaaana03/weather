import React from "react";
import humidity from '../assets/images/humidity.png'; 
import cloud from '../assets/images/cloud.png';
import uv from '../assets/images/uv.png';
import wind from '../assets/images/wind.png';
import sunrise from '../assets/images/sunrise.png';
import sunset from '../assets/images/sunset.png';
import moonrise from '../assets/images/moonrise.png';
import moonset from '../assets/images/moonset.png';
import moonphase from '../assets/images/moonphase.png';
import moonillumination from '../assets/images/moonillumination.png';
import one from '../assets/images/one.png';
import two from '../assets/images/two.png';
import three from '../assets/images/three.png';
import four from '../assets/images/four.png';
import five from '../assets/images/five.png';
import six from '../assets/images/six.png';

const Main = ({weather}) =>{

    const air_con = (num) => {
        switch (num) {
            case 1:
                return (<p><img className="air__level_img" src={one} alt={one}></img>1 Good</p>);
                break;
            case 2:
                return (<p><img className="air__level_img" src={two} alt={two}></img>2 Moderate</p>);
                break;
            case 3:
                return (<p><img className="air__level_img" src={three} alt={three}></img>3 Unhealthy for sensitive group</p>);
                break;
            case 4:
                return (<p><img className="air__level_img" src={four} alt={four}></img>4 Unhealthy</p>);
                break;
            case 5: (<p><img className="air__level_img" src={five} alt={five}></img>5 Very Unhealthy</p>);
                break;
            case 6:
                return (<p><img className="air__level_img" src={six} alt={six}></img>6 Hazardous</p>);
                break;
        }
    }

    const shorter = (num) => {
        if (num)
            return num.toFixed(2)
    }

    if (weather.location) {
        return (
            <div className="main">
                <div className="container">
                    <aside className="main__aside animate__animated animate__fadeInDown">
                        <p className="cards__name aside__cards_name"> Air Quality Index</p>
                        <p className="aside__info">{air_con(weather?.current?.air_quality["us-epa-index"])}</p>
                        <div className="aside_grid">
                            <p className="aside__grid_info aside__grid_border">Carbon Monoxide <p className="aside__grid_info">{shorter(weather?.current?.air_quality.co)} μg/m3</p></p>
                            <p className="aside__grid_info aside__grid_border">Nitrogen dioxide <p className="aside__grid_info"> {shorter(weather?.current?.air_quality.no2)} μg/m3</p></p>
                            <p className="aside__grid_info aside__grid_border">Ozone <p className="aside__grid_info"> {shorter(weather?.current?.air_quality.o3)} μg/m3</p></p>
                            <p className="aside__grid_info aside__grid_border">Sulphur  dioxide<p className="aside__grid_info"> {shorter(weather?.current?.air_quality.so2)} μg/m3</p></p>
                            <p className="aside__grid_info aside__grid_border">pm2_5 <p className="aside__grid_info">{shorter(weather?.current?.air_quality.pm2_5)} μg/m3</p></p>
                            <p className="aside__grid_info aside__grid_border">pm10 <p className="aside__grid_info">{shorter(weather?.current?.air_quality.pm10)} μg/m3</p></p>
                        </div>
                    </aside>
                    <div className="main__grid">
                        <div className="main__cards first__cards color__cards animate__animated animate__fadeInDown">
                            <p className="cards__name">{`${weather?.location?.name}, ${weather?.location?.country}`}</p>
                            <h2 className="cards__temp">{weather?.current?.temp_c > 0 ? `+${weather?.current?.temp_c}°C` : `${weather?.current?.temp_c}°C`} <img className="cards__img" src={weather?.current?.condition.icon} alt="" /></h2>
                            <p className="cards__condition">{weather?.current?.condition.text}</p>
                            <p className="cards__time">{weather?.location?.localtime}</p>
                        </div>
                        <div className="main__cards second__cards animate__animated animate__fadeInDown">
                            <p className="cards__name">Today's Forecast for {`${weather?.location?.name}, ${weather?.location?.country}`}</p>
                            <div className="second__cards_grid">
                                <div className="second__grid second__grid_border">
                                    <h2 className="second__grid_title">Morning</h2>
                                    <h3 className="second__grid_temp">{weather?.forecast?.forecastday[0].hour[6].temp_c > 0 ? `+${weather?.forecast?.forecastday[0].hour[6].temp_c}°C` : `${weather?.forecast?.forecastday[0].hour[6].temp_c}°C`}</h3>
                                    <img className="second__cards_img" src={weather?.forecast?.forecastday[0].hour[6].condition.icon} alt="" />
                                </div>
                                <div className="second__grid second__grid_border">
                                    <h2 className="second__grid_title">Afternoon</h2>
                                    <h3 className="second__grid_temp">{weather?.forecast?.forecastday[0].hour[15].temp_c > 0 ? `+${weather?.forecast?.forecastday[0].hour[15].temp_c}°C` : `${weather?.forecast?.forecastday[0].hour[15].temp_c}°C`}</h3>
                                    <img className="second__cards_img" src={weather?.forecast?.forecastday[0].hour[15].condition.icon} alt="" />
                                </div>
                                <div className="second__grid second__grid_border">
                                    <h2 className="second__grid_title">Evening</h2>
                                    <h3 className="second__grid_temp">{weather?.forecast?.forecastday[0].hour[18].temp_c > 0 ? `+${weather?.forecast?.forecastday[0].hour[18].temp_c}°C` : `${weather?.forecast?.forecastday[0].hour[18].temp_c}°C`}</h3>
                                    <img className="second__cards_img" src={weather?.forecast?.forecastday[0].hour[18].condition.icon} alt="" />
                                </div>
                                <div className="second__grid">
                                    <h2 className="second__grid_title">Overnight</h2>
                                    <h3 className="second__grid_temp">{weather?.forecast?.forecastday[0].hour[23].temp_c > 0 ? `+${weather?.forecast?.forecastday[0].hour[23].temp_c}°C` : `${weather?.forecast?.forecastday[0].hour[23].temp_c}°C`}</h3>
                                    <img className="second__cards_img" src={weather?.forecast?.forecastday[0].hour[23].condition.icon} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="main__cards third__cards animate__animated animate__fadeInDown">
                            <p className="cards__name">Weather Today in {`${weather?.location?.name}, ${weather?.location?.country}`}</p>
                            <h3 className="cards__feels">{weather?.current?.feelslike_c > 0 ? `+${weather?.current?.feelslike_c}°C` : `${weather?.current?.feelslike_c}°C`}</h3>
                            <p className="cards__feels_text">Feels Like</p>
                            <div className="third__card_grid">
                                <div className="third__grid">
                                    <p className="third__grid_info"><img src={humidity} alt={humidity} className="third__grid_img"></img>Humidity</p>
                                    <p className="third__grid_info">{weather?.current?.humidity}%</p>
                                </div>
                                <div className="third__grid">
                                    <p className="third__grid_info"><img src={cloud} alt={cloud} className="third__grid_img"></img>Cloudy</p>
                                    <p className="third__grid_info">{weather?.current?.cloud}%</p>
                                </div>
                                <div className="third__grid">
                                    <p className="third__grid_info"><img src={uv} alt={uv} className="third__grid_img"></img>UV Index</p>
                                    <p className="third__grid_info">{weather?.current?.uv} of 10</p>
                                </div>
                                <div className="third__grid">
                                    <p className="third__grid_info"><img src={wind} alt={wind} className="third__grid_img"></img>Wind</p>
                                    <p className="third__grid_info">{weather?.current?.wind_mph} mph</p>
                                </div>
                            </div>
                        </div>
                        <div className="main__cards fourth__cards animate__animated animate__fadeInDown">
                            <p className="cards__name">Today's Astro Forecast for {`${weather?.location?.name}, ${weather?.location?.country}`}</p>
                            <div className="fourth__card_grid">
                                <div className="third__grid">
                                    <p className="third__grid_info"><img src={sunrise} alt={sunrise} className="third__grid_img fourth__card_img"></img>Sunrise</p>
                                    <p className="third__grid_info">{weather?.forecast?.forecastday[0].astro.sunrise}</p>
                                </div>
                                <div className="third__grid">
                                    <p className="third__grid_info"><img src={sunset} alt={sunset} className="third__grid_img fourth__card_img"></img>Sunset</p>
                                    <p className="third__grid_info">{weather?.forecast?.forecastday[0].astro.sunset}</p>
                                </div>
                                <div className="third__grid">
                                    <p className="third__grid_info"><img src={moonrise} alt={moonrise} className="third__grid_img fourth__card_img"></img>Moonrise</p>
                                    <p className="third__grid_info">{weather?.forecast?.forecastday[0].astro.moonrise}</p>
                                </div>
                                <div className="third__grid">
                                    <p className="third__grid_info"><img src={moonset} alt={moonset} className="third__grid_img fourth__card_img"></img>Moonset</p>
                                    <p className="third__grid_info">{weather?.forecast?.forecastday[0].astro.moonset}</p>
                                </div>
                                <div className="third__grid">
                                    <p className="third__grid_info"><img src={moonphase} alt={moonphase} className="third__grid_img fourth__card_img"></img>Moon phase</p>
                                    <p className="third__grid_info third__grid__info_moonphase">{weather?.forecast?.forecastday[0].astro.moon_phase}</p>
                                </div>
                                <div className="third__grid">
                                    <p className="third__grid_info"><img src={moonillumination} alt={moonillumination} className="third__grid_img fourth__card_img"></img>Moon illumination</p>
                                    <p className="third__grid_info">{weather?.forecast?.forecastday[0].astro.moon_illumination}%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (<div></div>)
    }
}

export default Main