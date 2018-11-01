import axios from 'axios';

// action - это функция
export function fetchAPIResponse(city){
    //возвращаем функцию которая будет отсылать action
    return function(dispatch) {
        //через axios отправляем запрос для получения данных
        //нужен ключ от приложения apixu
        axios.get("https://api.apixu.com/v1/current.json?key=bec61f31f1144fb299e151227180111&q=" + city).then(response =>{

            //получаем объект места
            //исходя из особенности приложения apixu.com, которое высылает ответ
            //в виде объектов, пишем код который будет передовать нужные нам данные

            let arr = [];
            for (var key in response.data.location) {
                arr.push(response.data.location[key]);
            }
            // Важный момент
            // ЗАДЕЙСТВУЕМ ACTION

            //задействуем экшен FETCH_LOCATION
            //укажем какой action мы хотим вызвать и
            //в payload добавим данные, в данном случае массив, который
            //наполнился после обработки объекта полученного из приложения apixu.com
            dispatch({type:"FETCH_LOCATION", payload: arr});

            //следующий шаг повторяет предыдущий
            let arr2 = [];
            for (var key2 in response.data.current) {
                arr2.push(response.data.current[key2]);
            }
            //ищем соответствующий индекс в массиве
            console.log(arr2);
            //забираем необходимое из массива
            arr2.splice(5, 1);

            // ЗАДЕЙСТВУЕМ ACTION

            //НЕ ЗАБЫВАЕМ, что каждый ACTION имеет свое отдельное свойство   
            //задействуем action FETCH_WEATHER
            dispatch({type:"FETCH_WEATHER", payload: arr2});

            let arr3 = [];
            for (var key3 in response.data.current.condition){
                arr3.push(response.data.current.condition[key3]);
            }

            // ЗАДЕЙСТВУЕМ ACTION
            //задействуем action FETCH_CONDITIONS
            dispatch({type:"FETCH_CONDITIONS", payload: arr3});

            //сделаем console.log полного respons-a
            console.log(response);

        }).catch(err=>{
            console.log(err)
        });
        //Таким образом мы получили один action, который обрабатывает 3 action-a или др. словами 3 действия.
        //Теперь импортируем этот action в наш компонент
    }
}