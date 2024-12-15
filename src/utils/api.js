import axios from 'axios';

const API_KEY = '9813aa2fa550a7be127137ecb1a3d327';
const BASE_URL = 'https://api.openweathermap.org/data/3.0';

export const fetchWeatherData = async (lat, lon) => {
    const { data } = await axios.get(`${BASE_URL}/onecall`, {
        params: {
            lat,
            lon,
            exclude: 'minutely,hourly', // Исключаем ненужные данные
            units: 'metric',           // Используем метрическую систему
            lang: 'ru',                // Устанавливаем русский язык
            appid: API_KEY,
        },
    });
    return data;
};
