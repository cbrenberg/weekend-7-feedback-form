import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Confirmation extends Component {
  render() {
    return (
      <div>
        <h2>Confirmation Component</h2>
        <Link to='/'>Leave New Feedback</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(Confirmation);