import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Comments extends Component {
  render() {
    return (
      <div>
        <h2>Comments Component</h2>
        <div className="card">
          <div className="cardContentParent">
            <div className="cardContentChild">
              <h4 className="cardQuestion">Any comments you want to leave?</h4>
              <input type="text" placeholder="Enter comments" />
            </div>
          </div>
          <div className="cardFooter">
            <Link to='/5'>Next</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(Comments);