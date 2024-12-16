import React, { useState } from 'react';
import { fetchWeatherData } from '../utils/api'; // API для получения погоды
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import WeeklyWeather from '../components/WeeklyWeather';

const HomePage = () => {
    const [weather, setWeather] = useState(null);

    const handleCitySelect = async (coordinates) => {
        try {
            const data = await fetchWeatherData(coordinates.lat, coordinates.lon); // Получаем данные погоды
            setWeather(data); // Обновляем состояние
        } catch (error) {
            console.error('Ошибка при загрузке данных погоды:', error);
        }
    };

    return (
        <div>
            <SearchBar onCitySelect={handleCitySelect} />
            {weather && (
                <>
                    {/* Передаём текущую погоду в WeatherCard */}
                    <WeatherCard weather={weather.current} />
                    {/* Прогноз на неделю */}
                    <WeeklyWeather weekly={weather.daily} />
                </>
            )}
        </div>
    );
};

export default HomePage;
