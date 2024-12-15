export const saveCityToStorage = (city) => {
    localStorage.setItem('lastCity', city);
};

export const getCityFromStorage = () => {
    return localStorage.getItem('lastCity') || '';
};
