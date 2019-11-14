import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import cloudy from "./images/sun.png"
import sun from "./images/cloudywsun.jpg"

class App extends Component { 
  constructor(props){
  super(props)
  this.state = {
    city: '',
    temparature: ''
  }
}
componentDidMount(){

}
  render (){
  return (
    <div id='body'>
      <h1>Weather App</h1>
      <input placeholder="City"/>
      <button>Search</button>
      <ul>
        <li><img src={ cloudy } height='100px'/>
        <h1>65</h1></li>
        <li><img src={ sun } height='100px'/>
        <h1>75</h1></li>
        <li><img src={ sun } height='100px'/>
        <h1>80</h1></li>
        <li><img src={ sun } height='100px'/>
        <h1>83</h1></li>
        <li><img src={ sun } height='100px'/>
        <h1>85</h1></li>
      </ul>
    </div>
  );
  }
}

export default App;
