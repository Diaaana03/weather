import React from "react";
import {Link} from "react-router-dom";
const Nav = () =>{
    return (
        <div className= "nav__weather">
            <div className="container">
                <div className="nav__inner">
                    <switch>
                    <ul className="nav__menu">
                        <Link to = "/today"><li className="nav__item"> <a className="a__item" href="/today.js" target="_blank">Today</a></li></Link>   
                        <li className="nav__item"> <a className="a__item" href="#" target="_blank">Hourly</a></li>
                        <li className="nav__item"> <a className="a__item" href="#" target="_blank">7 Day</a></li>
                    </ul>

                    </switch>
            
                </div>
            </div>
        </div>
    )
}

export default Nav