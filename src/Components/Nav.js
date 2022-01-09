import React from "react";
import {Link} from "react-router-dom";

const Nav = () =>{
    return (
        <div className= "nav__weather">
            <div className="container">
                <div className="nav__inner">
                    <ul className="nav__menu">
                        <li className="nav__item"> <Link className="a__item" to="/Today">Today</Link></li> 
                        <li className="nav__item"> <Link className="a__item" to="/Hourly">Hourly</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav