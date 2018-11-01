import logger from 'redux-logger'; // позволяет просматривать state приложения
import thunk from 'redux-thunk';// позволяет создавать action которые возвращают функцию вместо action
import {applyMiddleware, createStore} from 'redux';
import Reducers from '../reducers/reducers';

//Разместим все состояния state в одно хранилище - store

// middleware
// добавим middleware в функцию
const middleware = applyMiddleware(logger, thunk);


//Хранилище Store
const StoreRef = createStore(Reducers, middleware);

//экспортируем Store, который только что образовался

export default StoreRef;