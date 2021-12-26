import './assets/style/App.css';
import {useState} from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Today from './Components/Today';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";

function App() {
    const [weather , setWeather] = useState({})

    return (
    <Router className="weather">
        <Header setWeather={setWeather}/>
        <Routes>
        <Route path="/today" element={Today/>}/>{weather.location && <Nav weather = {weather}/>}
        {weather.location && <Main weather={weather}/>}
        <Today/>
        </Routes>
    </Router>
  );
}

export default App;
