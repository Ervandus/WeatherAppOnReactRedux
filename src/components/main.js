import React, { Component } from 'react';


//импортируем функции connect и bindActionsCreators
//чтобы соединить компонент со state в Redux-e
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

//импортируем action
import {fetchAPIResponse} from "../actions/fetch_api_data";

class Main extends Component {
    //внутренний state
    constructor(){
        super();
        this.state = {
            value: ""
        }
    }
    // вызываем action
    componentWillMount=()=>{
        //before mounting, т.е. до монтажа компонента
        //мы создаем action и передаем в него аргумент
        this.props.FetchAPIResponse("Paris")
    }
    //теперь функция поиска добавленного города
    search = () =>{
        //в этом случае мы используем state только для этого компонента и 
        // нет необходимости входить в общий state
        this.props.FetchAPIResponse(this.state.value);
    }

    changeHandler=(e)=>{
        //получаем value от input-a
        let value=e.target.value;
        //сохраняем value в свойстве state-a
        this.setState({
            value : value
        });
    }
    render() {
        return (
          <div>
               <div className="form">
    
                <input name="city" placeholder="Paris" onChange ={this.changeHandler} />
                <button onClick={this.search}> Search </button>
              </div>
            <div className="dashboard">
           
                <h2><i className="far fa-compass"></i> Location</h2> 
                <div className="data-container">
                <div className="square">
                    <p>City</p>
                    <p className="data">{this.props.apiLocation[0]}</p>
                  </div>
                  <div className="square">
                  <p>Country</p>
                  <p className="data">{this.props.apiLocation[2]}</p>
                  </div>
                  <div className="square">
                  <p>Time Zone Id</p>
                  <p className="data">{this.props.apiLocation[5]}</p>
                  </div>
                  <div className="square">
                  <p>Local Time</p>
                  <p className="data">{this.props.apiLocation[7]}</p>
                  </div>
                </div>
    
                <h2><i className="fas fa-tint"></i> Current Conditions</h2>   
                <div className="data-container">
                
                  <div className="square">
                    <p>Condition</p>
                    <p className="data">{this.props.apiConditions[0]}</p>
                  </div>
                  <div className="square">
                    <img src={this.props.apiConditions[1]} alt="current weather condition icon" />
                  </div>
    
                </div> 
                
    
                <h2><i className="fas fa-thermometer-quarter"></i> Other Conditions </h2>   
                <div className="data-container">
                
                <div className="square">
                    <p>Clouds</p>
                    <p className="data">{this.props.apiResponse[14]} %</p>
                  </div>
                  <div className="square">
                  <p>Humidity</p>
                  <p className="data">{this.props.apiResponse[13]} %</p>
                  </div>
                  <div className="square">
                  <p>Temperature(Celcius)</p>
                  <p className="data">{this.props.apiResponse[15]} °C</p>
                  </div>
                  <div className="square">
                  <p>Temperature(Fahrenheit)</p>
                  <p className="data">{this.props.apiResponse[16]} °F</p>
                  </div>
                  
    
                </div> 
              
            </div>
          </div>
        );
    }
}
function mapStateToProps(state) {
    //позволяет нам получать данные из хранилища store используя props
    //value здесь немного запутанное: state.ReducerName.reducerProperty
    return{
        apiResponse: state.FetchWeatherReducer.weatherData,
        apiLocation: state.FetchWeatherLocation.location,
        apiConditions: state.FetchCurrentConditions.conditions
    }
}

//вызываем свойства используя props.FetchAPIResponse
function matchDispatchToProps(dispatch) {
    //привязываем action для исполнения
    return bindActionCreators({FetchAPIResponse: fetchAPIResponse}, dispatch);
}

//теперь экспортируем компонент используя connect из Redux-a
//передаем функции, которые соединяют props-ы и action-ы
export default connect(mapStateToProps, matchDispatchToProps)(Main);//имя компонента