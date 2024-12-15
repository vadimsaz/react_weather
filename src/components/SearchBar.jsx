import React from 'react';
import AsyncSelect from 'react-select/async';

const SearchBar = ({ onCitySelect }) => {
    const loadOptions = async (inputValue) => {
        if (!inputValue) return [];
        try {
            const response = await fetch(
                `http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=5&appid=9813aa2fa550a7be127137ecb1a3d327`
            );
            const data = await response.json();
            return data.map((city) => ({
                value: `${city.name}, ${city.country}`,
                label: `${city.name}, ${city.country} ${city.state ? `(${city.state})` : ''}`,
                coordinates: { lat: city.lat, lon: city.lon },
            }));
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
