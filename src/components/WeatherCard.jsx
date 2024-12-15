import React from 'react';

const WeatherCard = ({ weather }) => {
    if (!weather) return null;

    return (
        <div className="weather-card">
            <h2>Текущая погода</h2>
            <p>Температура: {weather.temp}°C</p>
            <p>Описание: {weather.weather[0].description}</p>
            <p>Влажность: {weather.humidity}%</p>
        </div>
    );
};

export default WeatherCard;
