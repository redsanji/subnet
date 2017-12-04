import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Anyclass,
        IPandMask,
        convertToSubnet
 } from './utils/helper';

class App extends Component {
  state = {
    test: "a",
    allSubnet: Anyclass('Any'),
    check: false
  }

  radioChange = e => {
    console.log(Anyclass(e.target.value));
    this.setState({
      networkClass: e.target.value,
      allSubnet: Anyclass(e.target.value),
    })
  } 
  IPChange = e => {
    console.log(e.target.value)
    this.setState({
      IPbinary: e.target.value
    })
  }

  Input = e => {
    console.log(e.target.value)
    this.setState({
      valueIP: e.target.value
    })
  }

  handlerClick = e => {
    console.log("HELLO")
    this.setState({
      check: true
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
        <div>
          Subnet
        </div>
        <div>
          <select class="custom-select" onChange={this.IPChange}>
          { 
            this.state.allSubnet.map((element) =>
              <option value={element}>{element}</option>
          )}
          </select>
        </div>
          IP Address
          <div class="input-group">
          <input type="text" placeholder="IP Address" value={this.state.valueIP} onChange={this.Input}/>
        </div>
        <div>
          <input class="btn btn-primary" type="submit" value="Submit" onClick={this.handlerClick}/>
        </div>
        {
          this.state.check && 
          <div>
          <table class="table">
          <thead class="thead-inverse">
            <tr>
              <td>Name</td>
              <td>Value</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>IP Address</td>
              <td></td>
            </tr>
            <tr>
              <td>Network Address</td>
              <td></td>
            </tr>
            <tr>
              <td>Usable Host IP Range</td>
              <td></td>
            </tr>
            <tr>
            <td>Broadcast Address</td>
            <td></td>
            </tr>
            <tr>
            <td>Total Number of Hosts</td>
            <td></td>
            </tr>
            <tr>
            <td>Number of Usable Hosts</td>
            <td></td>
            </tr>
            <tr>
            <td>Subnet Mask</td>
            <td></td>
            </tr>
            <tr>
            <td>Wildcard Mask</td>
            <td></td>
            </tr>
            <tr>
            <td>Binary Subnet Mask</td>
            <td></td>
            </tr>
            <tr>
            <td>CIDR Notation</td>
            <td></td>
            </tr>
            <tr>
            <td>IP Class</td>
            <td></td>
            </tr>
            <tr>
            <td>IP Type</td>
            <td></td>
            </tr>
            <tr>
            <td>Short</td>
            <td></td>
            </tr>
            <tr>
            <td>Binary ID	</td>
            <td></td>
            </tr>
            <tr>
            <td>Integer ID	</td>
            <td></td>
            </tr>
            <tr>
            <td>Hex ID	</td>
            <td></td>
            </tr>
          </tbody>
        </table>
          </div>
        }
      </div>
        
    );
  }
}

export default App;
