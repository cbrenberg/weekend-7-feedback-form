import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Comments extends Component {
  render() {
    return (
      <div>
        <h2>Comments Component</h2>
        <Link to='/5'>Next</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(Comments);