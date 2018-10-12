import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Understand extends Component {
  render() {
    return (
      <div>
        <h2>Understand Component</h2>
        <Link to='/3'>Next</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(Understand);