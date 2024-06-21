import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 36.32,
        temp: 34.05,
        tempMin: 34.05,
        tempMax: 34.05,
        humidity: 43,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={ {textAlign: "center" }}>
            <h2 style={{color: "green"}}>Weather App created by Anand kumar yadav</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}