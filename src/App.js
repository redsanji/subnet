import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    test: "a"
  }

  radioChange = e => {
    console.log(e.target.value);
    this.setState({
      networkClass: e.target.value
    })
  }
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IP Subnet Calculate</h1>
        </header>
        <div class="input-group">
          <lable>
            Network Class
          </lable>
          <label>
          <input type="radio" name="netClasss" value="Any" onChange={this.radioChange} />
            Any
          </label>
          <label>
          <input type="radio" name="netClasss" value="A" onChange={this.radioChange}/>
            A
          </label>
          <label>
          <input type="radio" name="netClasss" value="B" onChange={this.radioChange}/>
            B
          </label>
          <label>
          <input type="radio" name="netClasss" value="C" onChange={this.radioChange}/>
            C
          </label>
        </div>
      </div>
    );
  }
}

export default App;
