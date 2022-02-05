import React from "react";
import picture from '../assets/images/picture.svg';
import pin from '../assets/images/pin.png'

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="about__weather">
                    <img src={picture} className="picture__img animate__animated animate__bounce" alt="picture"></img>
                    <p className="about__title">About</p>
                    <p className="about__title">Weather DK Project</p>
                    <p className="about__title">Made by: <span className="about__title_span">Diana K</span></p>
                    <ul className="about__ul">Resources used:
                    <li><img src={pin} className="pin__img"></img>Weather API: For the weather details</li>
                    <li><img src={pin} className="pin__img"></img>Animate.style: For animation</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About