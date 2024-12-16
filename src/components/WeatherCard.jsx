import React from 'react';

const WeatherCard = ({ weather }) => {
    if (!weather) return null;

    const {
        temp,
        feels_like,
        pressure,
        humidity,
        wind_speed,
        wind_deg,
        wind_gust,
        weather: weatherDetails,
    } = weather;

    // Данные о погоде
    const description = weatherDetails?.[0]?.description || 'Нет данных';
    const iconCode = weatherDetails?.[0]?.icon || '01d'; // Иконка или дефолтная

    // Функция для преобразования градусов направления ветра в текст
    const getWindDirection = (deg) => {
        const directions = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ'];
        const index = Math.round((deg % 360) / 45);
        return directions[index % 8];
    };

    return (
        <div className="weather-card">
            <h2>Погода на сегодня</h2>
            {/* Иконка погоды */}
            <img
                src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
                alt={description}
                style={{ width: '80px', height: '80px' }}
            />
            <p>Температура: {Math.round(temp)}°C</p>
            <p>Ощущается как: {Math.round(feels_like)}°C</p>
            <p>Давление: {pressure} hPa</p>
            <p>Влажность: {humidity}%</p>
            <p>Описание: {description}</p>
            <h3>Ветер</h3>
            <p>Скорость: {wind_speed} м/с</p>
            <p>Направление: {getWindDirection(wind_deg)} ({wind_deg}°)</p>
            {wind_gust && <p>Порывы ветра: {wind_gust} м/с</p>}
        </div>
    );
};

export default WeatherCard;
