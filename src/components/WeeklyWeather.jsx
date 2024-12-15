import React from 'react';

const WeeklyWeather = ({ weekly }) => {
    if (!weekly) return null;

    return (
        <div className="weekly-weather">
            <h3>Прогноз на неделю</h3>
            <ul>
                {weekly.map((day, index) => (
                    <li key={index}>
                        <p>Дата: {new Date(day.dt * 1000).toLocaleDateString()}</p>
                        <p>Дневная температура: {day.temp.day}°C</p>
                        <p>Погода: {day.weather[0].description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WeeklyWeather;
