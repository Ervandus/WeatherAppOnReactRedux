//благодаря redux-thunk мы можем: 
//создать константу с любым названием и экспортировать ее

//Эта функция принимает на вход начальное состояние(initial state)
const fetchWeatherData=(
    //initial state
    state={
    weatherData:[] // которое установливает пустой массив 
}, 
//и action 
action) => {
    // который имеет тип свойства название которому мы придумываем сами
    if(action.type === "FETCH_WEATHER"){
        //здесь мы добавляем нагрузку (payload) на имеющийся state
        //мы не перезаписываем state
        state= {...state, weatherData: action.payload}
    }
    //возвращаем объект state
    return state;
};
// экспортируем константу
export default fetchWeatherData;

// остальные редюсеры созданы по такому же принципу