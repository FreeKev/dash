import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Weather() {
    const { REACT_APP_WEATHERAPI, REACT_APP_WEATHERAPIKEY} = process.env;

    const getFar = (kelvin) => { // Kelvin to F ((K-273.15)*1.8)+32 
        return Math.round(((kelvin - 273.15)*1.8) + 32)
    }

    const returnIcon = strangy => `http://openweathermap.org/img/w/${strangy}.png`

    let getWeather = () => {
        fetch(`${REACT_APP_WEATHERAPI}${REACT_APP_WEATHERAPIKEY}`)
            .then(response => response.json())
            .then(data => {
                setTemp(getFar(data.main.temp))
                setWeatherdescription(`${data.weather[0].main}: ${data.weather[0].description}`)
                setWeatherimageurl(returnIcon(data.weather[0].icon))
            });
    }

    const [temp, setTemp] = useState()
    const [weatherdescription, setWeatherdescription] = useState('')
    const [weatherimageurl, setWeatherimageurl] = useState('')

    useEffect(() => {
        if (!temp) { getWeather() } // Init Weather
        const interval = setInterval(() => {
          getWeather()
        }, 900000); // Every 15 Min // 3600000 = hour
        return () => clearInterval(interval);
    });

    return (
        <>
        {temp &&
            <div className="text-white text-xl" style={{
                    padding: '2em',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-end',
                    textAlign: 'right' 
                }}>
                <img src={weatherimageurl} alt="current temp" />
                {temp}°<br />
                {weatherdescription}
            </div>
        }
        </>
    )
}