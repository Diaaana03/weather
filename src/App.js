import './assets/style/App.scss';
import 'animate.css';
import { useState } from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Hourly from './Components/Hourly';
import Days from './Components/Days';
import About from './Components/About';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [weather, setWeather] = useState({})

  return (
    <Router className="weather">
      <Header setWeather={setWeather} weather={weather} />
      {weather.location && <Nav weather={weather} />}
      <Routes>
        <Route path="/" element={weather.location && <Main weather={weather} />} />
        <Route path="/Today" element={<Main weather={weather} />} />
        <Route path="/Hourly" element={<Hourly weather={weather} />} />
        <Route path="/Days" element={<Days weather={weather} />} />
        <Route path="/About" element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
