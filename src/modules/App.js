import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './home';
import Engine from './engine';
import Color from './color';
import Wheel from './wheel';
import Result from './result';

class App extends Component {
 
  render() {

    async function fetchData(){
      const response =  await fetch('https://next.json-generator.com/api/json/get/41ORKNZDU').then( response => response.json() );
      console.log(response)
    }

    fetchData();

    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/engine" component={Engine} />
        <Route path="/color" component={Color} />
        <Route path="/wheel" component={Wheel} />
        <Route path="/result" component={Result} />
      </Router>
    );
  }
}

export default App;
