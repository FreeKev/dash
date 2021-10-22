import React from 'react'
import { useState } from 'react'

export default function Weather() {
    const { REACT_APP_WEATHERAPI, REACT_APP_WEATHERAPIKEY} = process.env;

    let getWeather = () => {
        fetch(`${process.env.REACT_APP_WEATHERAPI}${process.env.REACT_APP_WEATHERAPIKEY}`)
            .then(response => response.json())
            .then(data => {
                setWeather(Math.round(((data.main.temp - 273.15)*1.8) + 32))
                // ((K-273.15)*1.8)+32 Kelvin to F
            });
    }
    // 3600000
    const [weather, setWeather] = useState(getWeather())

    return (
        <div className="text-white text-xl">
            {weather}°
        </div>
    )
}
