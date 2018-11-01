const fetchLocation=(state={
    location: []
}, action) => {
    if(action.type === "FETCH_LOCATION"){

        //все тоже самое, меняем только свойство
        // таким способом мы не смешиваем данные стейта
        state={...state, location: action.payload}
    }
    return state;

};
// отправляем в файл главного редюсера
export default fetchLocation;