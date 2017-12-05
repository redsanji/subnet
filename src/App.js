import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Anyclass,
        convertToSubnet,
        ipaddress,
        NetworkAddress,
        Broadcast,
        totalHost,
        numHost,
        range,
        convertToWildcard,
        BinarySubnet,
        IPClass,
        IPtype,
        CIDR,
        Short,
        BinaryID,
        IntegerID,
        HexID
 } from './utils/helper';

class App extends Component {
  state = {
    test: "a",
    allSubnet: Anyclass('Any'),
    check: false,
    iPbinary: Anyclass('Any')[0],
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
      iPbinary: e.target.value
    })
  }

  Input = e => {
    console.log(e.target.value)
    this.setState({
      valueIP: e.target.value
    })
  }

  handlerClick = e => {

    let ipnow = this.state.iPbinary.split('/')[0]
    let mask = this.state.iPbinary.split('/')[1]
    let ippim = this.state.valueIP

    this.setState({

      check: true,
      convertToSubnet: convertToSubnet(mask),
      ipaddress: ipaddress(ippim),
      NetworkAddress: NetworkAddress(ippim,mask),
      Broadcast: Broadcast(ippim,mask),
      totalHost: numHost(ippim,mask),
      numHost: totalHost(ippim,mask),
      range: range(ippim,mask),
      convertToWildcard: convertToWildcard(mask),
      BinarySubnet: BinarySubnet(mask),
      IPClass: IPClass(mask),
      IPtype: IPtype(ippim),
      CIDR: CIDR(mask),
      Short: Short(ippim,mask),
      BinaryID: BinaryID(this.state.valueIP),
      IntegerID: IntegerID(this.state.valueIP),
      HexID: HexID(this.state.valueIP),
    })
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IP Subnet Calculate</h1>
        </header>
        <div class="input-group" style={{display:'flex', 'justify-content':'center'}}>
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
          <div class="input-group" style={{display:'flex', 'justify-content':'center'}}>
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
              <td>{this.state.valueIP}</td>
            </tr>
            <tr>
              <td>Network Address</td>
              <td>{this.state.NetworkAddress}</td>
            </tr>
            <tr>
              <td>Usable Host IP Range</td>
              <td>{this.state.range}</td>
            </tr>
            <tr>
            <td>Broadcast Address</td>
            <td>{this.state.Broadcast}</td>
            </tr>
            <tr>
            <td>Total Number of Hosts</td>
            <td>{this.state.numHost}</td>
            </tr>
            <tr>
            <td>Number of Usable Hosts</td>
            <td>{this.state.totalHost}</td>
            </tr>
            <tr>
            <td>Subnet Mask</td>
            <td>{this.state.convertToSubnet}</td>
            </tr>
            <tr>
            <td>Wildcard Mask</td>
            <td>{this.state.convertToWildcard}</td>
            </tr>
            <tr>
            <td>Binary Subnet Mask</td>
            <td>{this.state.BinarySubnet}</td>
            </tr>
            <tr>
            <td>CIDR Notation</td>
            <td>{this.state.CIDR}</td>
            </tr>
            <tr>
            <td>IP Class</td>
            <td>{this.state.IPClass}</td>
            </tr>
            <tr>
            <td>IP Type</td>
            <td>{this.state.IPtype}</td>
            </tr>
            <tr>
            <td>Short</td>
            <td>{this.state.Short}</td>
            </tr>
            <tr>
            <td>Binary ID	</td>
            <td>{this.state.BinaryID}</td>
            </tr>
            <tr>
            <td>Integer ID	</td>
            <td>{this.state.IntegerID}</td>
            </tr>
            <tr>
            <td>Hex ID	</td>
            <td>{this.state.HexID}</td>
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
