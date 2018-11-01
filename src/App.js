import React, { Component } from 'react';
import Main from './components/main';
import StoreRef from './store/store';
import {Provider} from 'react-redux'; //Provider дает доступ к state

//Provider в качестве свойства берет хранилище store
//state установлен глобально при помощи redux-a и мы можем получить доступ к нему в любом компоненте

//Теперь нам нужно создать действие action
//Помним, что reducer содержит action,
//action называем по своему усмотрению
//внедряем его


class App extends Component {
  render() {
    return (

      <Provider store={StoreRef}>
        <div className='container'>
        <h1>Weather App</h1>
        <Main />  
      </div>
    </Provider>    
      
    );
  }
}

export default App;
