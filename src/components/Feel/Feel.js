import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Feel extends Component {
  render() {
    return (
      <div>
        <h2>Feel Component</h2>
        <Link to='/2'>Next</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(Feel);