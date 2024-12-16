import React from 'react';
import AsyncSelect from 'react-select/async';
import CONFIG from '../config';

const SearchBar = ({ onCitySelect }) => {


const loadOptions = async (inputValue) => {
    if (!inputValue) return [];

    try {
        const response = await fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=5&appid=${CONFIG.API_KEY}`
        );

        const data = await response.json();

        return data.map((city) => {
            const localName = city.local_names?.[CONFIG.DEFAULT_LOCALE] || city.name; // Используем язык из конфигурации
            const stateInfo = city.state ? ` (${city.state})` : '';
            const countryInfo = `, ${city.country}`;

            return {
                value: `${city.lat},${city.lon}`,
                label: `${localName}${stateInfo}${countryInfo}`,
                coordinates: { lat: city.lat, lon: city.lon },
            };
        });
    } catch (error) {
        console.error('Ошибка при загрузке данных городов:', error);
        return [];
    }
};


    const handleChange = (selectedOption) => {
        console.log('Выбранный город:', selectedOption);
        if (selectedOption) {
            onCitySelect(selectedOption.coordinates); // Передаём координаты в родительский компонент
        }
    };

    return (
        <AsyncSelect
            cacheOptions
            loadOptions={loadOptions}
            onChange={handleChange}
            placeholder="Введите название города..."
        />
    );
};

export default SearchBar;
