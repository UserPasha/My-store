import React, {useEffect, useState} from 'react';
import styles from './Weather.module.scss'
import {API_KEY} from './../../../weatherKey'

interface WeatherData {
    temperature: number;
    weather: string;
}

const Weather: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherData>();

    useEffect(() => {
        const fetchWeatherData = async () => {
            const response = await fetch(
                `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Minsk`
            );
            const data = await response.json();
            setWeatherData({
                temperature: data.current.temp_c,
                weather: data.current.condition.text,
            });
        };
        fetchWeatherData();
    }, []);

    return (
        <div>
            {weatherData ? (
                <>
                    <p>Temperature: {weatherData.temperature}°C</p>
                    <p>Weather: {weatherData.weather}</p>
                </>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
};

export default Weather;