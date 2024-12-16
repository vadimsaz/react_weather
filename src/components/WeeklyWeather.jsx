import React from 'react';

const WeeklyWeather = ({ weekly }) => {
    if (!weekly) return null;

    return (
        <div className="weekly-weather">
            <h3>Прогноз на неделю</h3>
            <ul>
                {weekly.map((day, index) => {
                    const { dt, temp, weather } = day;
                    const date = new Date(dt * 1000).toLocaleDateString(); // Преобразуем timestamp в дату
                    const description = weather[0]?.description || 'Нет данных';
                    const iconCode = weather[0]?.icon || '01d'; // Иконка или дефолтная

                    return (
                        <li key={index} style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            {/* Дата */}
                            <p style={{ marginRight: '10px' }}>{date}</p>

                            {/* Иконка погоды */}
                            <img
                                src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
                                alt={description}
                                style={{ width: '50px', height: '50px', marginRight: '10px' }}
                            />

                            {/* Температура */}
                            <p>{Math.round(temp.day)}°C</p>

                            {/* Описание погоды */}
                            <p style={{ marginLeft: '10px' }}>{description}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default WeeklyWeather;
