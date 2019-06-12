import React, { Component } from 'react';
import './css/App.css';

//Layout TEST
import Search from './containers/searchbar_Container.js';
import {Title} from './components/title_Component.js';
import {DNSMap} from './components/map_Component.js';
import {Summary} from './components/vulnerabilities_Component.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Title></Title>
      	<Search></Search>
      	<DNSMap></DNSMap>
      	<Summary></Summary>
      </div>
    );
  }
}

export default App;
