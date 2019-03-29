import React, { Component } from 'react';
import List from './List.js';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      name:"Rodrigo",
      email:"rdg6design@gmail.com"
    }
    this.changeState = this.changeState.bind(this)
    this.resetState = this.resetState.bind(this)
    this.changeInput = this.changeInput.bind(this)
  }

  changeState(){
    this.setState({
      name:"Rodrigo Nogueira"
    })
  }

  resetState(){
    this.setState({
      name:"Rodrigo"
    })
  }
  changeInput(event){
    let target = event.target
    let index =target.name
    this.setState({
      [index]:target.value
    })
  }
  render() {
    return (
      <div className="App">
      <div>
      <form>
      <label>Nome
        <input 
        type="text" 
        name="name"
        value={this.state.name}
        onChange={this.changeInput}
        ></input>
      </label>

       <label>Email
        <input 
        type="email" 
        name="email"
        value={this.state.email}
        onChange={this.changeInput}
        ></input>
      </label>

      </form>
      {this.state.name} - {this.state.email}
      </div>        
      <button onClick={this.changeState}>Mudar status</button>
      <button onClick={this.resetState}>Reset status</button>
      <List></List>
      </div>
    );
  }
}

export default App;
