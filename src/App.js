import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import cloudy from "./images/sun.png"
import sun from "./images/cloudywsun.jpg"

class App extends Component { 
  constructor(props){
  super(props)
  this.state = {
    city: [],
    query: '',
  }
}


// gets city based off of search
   getCity = () => {fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.query}&APPID=4c58ee73def863ccc33defea4c884388`)
        .then(res => res.json())
        .then((data) => {
          this.setState({ city: data })
        })
        .catch(console.log)
      }
      
      // getInfo = () => {
      //   axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
      //     .then(({ data }) => {
      //       this.setState({
      //         results: data.data
      //       })
      //     })
      // }
      handleInputChange = () => {
        this.setState({
          query: this.search.value
        }, () => {
          if (this.state.query && this.state.query.length > 1) {
            if (this.state.query.length % 2 === 0) {
              this.getCity()
            }
          } 
        })
      }

  render (){
  return (
    <div id='body'>
      <h1 id='appTitle'>Weather App</h1>
      <form id='search'>
       <input
         placeholder="Search for City"
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <p>{this.state.query}</p>
     </form>
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
