import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Support extends Component {
  render() {
    return (
      <div>
        <h2>Support Component</h2>
        <Link to='/4'>Next</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(Support);