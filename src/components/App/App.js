import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

//import view components below
import Feel from '../Feel/Feel'
import Understand from '../Understand/Understand'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Confirmation from '../Confirmation/Confirmation'
import Admin from '../Admin/Admin'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
          </header>

          <progress id="progressBar" max="100" value="20"></progress>

          <Route exact path="/" component={Feel} />
          <Route path="/2" component={Understand} />
          <Route path="/3" component={Support} />
          <Route path="/4" component={Comments} />
          <Route path="/5" component={Confirmation} />
          <Route path="/admin" component={Admin} />


          <br />
          {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({feedbackItem}) => ({ feedbackItem });

export default connect(mapStateToProps)(App);
