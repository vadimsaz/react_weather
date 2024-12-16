import axios from 'axios';
import CONFIG from '../config';

const BASE_URL = 'https://api.openweathermap.org/data/3.0';

export const fetchWeatherData = async (lat, lon) => {
    const { data } = await axios.get(`${BASE_URL}/onecall`, {
        params: {
            lat,
            lon,
            exclude: 'minutely,hourly',
            units: 'metric',           // Метрическая система
            lang: CONFIG.DEFAULT_LOCALE, // Язык для описания погоды
            appid: CONFIG.API_KEY,    // API-ключ
        },
    });
    return data;
};
