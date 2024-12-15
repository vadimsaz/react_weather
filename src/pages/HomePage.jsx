import React, { useState } from 'react';
import { fetchWeatherData } from '../utils/api'; // Функция для получения погоды
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import WeeklyWeather from '../components/WeeklyWeather';

const HomePage = () => {
    const [weather, setWeather] = useState(null);

    const handleCitySelect = async (coordinates) => {
        try {
            const data = await fetchWeatherData(coordinates.lat, coordinates.lon); // Получаем данные о погоде
            setWeather(data); // Обновляем состояние
        } catch (error) {
            console.error('Ошибка при загрузке погоды:', error);
        }
    };

    return (
        <div>
            <SearchBar onCitySelect={handleCitySelect} />
            {weather && (
                <>
                    <WeatherCard weather={weather.current} />
                    <WeeklyWeather weekly={weather.daily} />
                </>
            )}
        </div>
    );
};

export default HomePage;
