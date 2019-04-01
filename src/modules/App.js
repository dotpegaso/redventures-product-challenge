import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { apiRequest } from '../_actions';
import '../res/scss/main.scss';
import Home from './home';
import Engine from './engine';
import Color from './color';
import Wheel from './wheel';
import Result from './result';

class App extends Component {

  componentDidMount(){
    this.props.onApiRequest();
  }
 
  render() {
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

const mapStateToProps = state => ( state );
const mapActionsToProps = {
  onApiRequest: apiRequest
}

export default connect(mapStateToProps, mapActionsToProps)(App);
