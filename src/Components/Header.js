import React from "react";
import {useState} from "react";
import axios from "axios";

const Header = ({setWeather}) =>{
    const [info, setInfo] = useState("")

    const handleChange = (e) =>{
        setInfo(e.target.value)
    }

    const handleSubmit = async () =>{
        await getInfo()
    }

    const handleKeyPress = async (e) =>{
        if (e.key === "Enter"){
            await getInfo()
        }
    }

    const getInfo = async () =>{
        const {data} = await axios (`https://api.weatherapi.com/v1/forecast.json?key=9bed3155f01143c3a7f233955210712&q=${info}&days=7&aqi=yes`)
        setWeather(data)
    }
    return (
        <div className="header__weather">
            <div className="header__weather_logo">
                <div className="container">
                    <div className="header__inner">
                        <h1 className="header__title">Weather Di</h1>
                    </div>
                </div>
            </div>
            <div className="header__form">
                    <input type="text" onChange={handleChange} onKeyPress={handleKeyPress} id="header_search" className="header__input" placeholder="Enter city " />
                    <button type="submit" className="header__btn" onClick={handleSubmit}>Search</button>
            </div>
        </div>
    )
}

export default Header
