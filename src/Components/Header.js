import React from "react";
import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import picture from '../assets/images/picture.svg';

const Header = ({setWeather, weather}) =>{
    const [info, setInfo] = useState("")

    const handleChange = (e) =>{
        setInfo(e.target.value);
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
        try{
            const {data} = await axios (`https://api.weatherapi.com/v1/forecast.json?key=9bed3155f01143c3a7f233955210712&q=${info}&aqi=yes`)
            setWeather(data)
        } catch(er){
            console.log (er)
        }
    }
    return (
        <div className="header__weather">
            <div className="header__weather_logo">
                <div className="container">
                    <div className="header__inner">
                        <h1 className="header__title"><Link to="/">Weather Di </Link></h1>
                        {weather.location && (<div className="header__form header__form_another">
                            <input type="text" onChange={handleChange} onKeyPress={handleKeyPress} id="header_search" className="header__input" placeholder="Enter another city " />
                            <button type="submit" className="header__btn" onClick={handleSubmit}>Search</button>
                        </div>)}
                    </div>
                </div>
            </div>
            {!weather.location && (<div className="header__form">
                <img src={picture} className="picture__img animate__animated animate__bounce" alt="picture"></img>
                <h2 className="header__title header__title_form">Get weather details from all over the world</h2>
                <input type="text" onChange={handleChange} onKeyPress={handleKeyPress} id="header_search" className="header__input" placeholder="Enter city"/>
                <button type="submit" className="header__btn" onClick={handleSubmit}>Search</button>
            </div>)}
        </div>
    )
}

export default Header
