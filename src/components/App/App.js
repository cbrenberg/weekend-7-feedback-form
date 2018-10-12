import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

//import view components below
import Feel from '../Feel/Feel'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>

          <Route exact path="/" component={Feel} />
          {/* <Route path="/2" component={Understand} />
          <Route path="/3" component={Support} />
          <Route path="/4" component={Comments} />
          <Route path="/5" component={Confirmation} /> */}


          <br />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(App);
