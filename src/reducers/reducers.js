import {combineReducers} from 'redux';

// Это основной файл. Все редюсеры собираются здесь и экспортируются разом
import FetchWeather from './fetch_weather';
import FetchLocation from './fetch_location';
import FetchConditions from './fetch_conditions';

// экспортируем combineReducers который собирает все редюсеры в один экспорт
// создаем константы с редюсерами
// каждый редюсер это файл

const reducers = combineReducers({
    FetchWeatherReducer: FetchWeather,
    FetchWeatherLocation: FetchLocation,
    FetchCurrentConditions: FetchConditions

});

//экспортируем редюсеры в файл хранилища-store

export default reducers;