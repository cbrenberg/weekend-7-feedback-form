import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Understand extends Component {
  render() {
    return (
      <div>
        <h2>Understand Component</h2>

        <div className="card">
          <div className="cardContentParent">
            <div className="cardContentChild">
              <h4 className="cardQuestion">How well did you understand today's content?</h4>
              <input type="number" placeholder="1 - 5" />
            </div>
          </div>
          <div className="cardFooter">
            <Link to='/3'>Next</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(Understand);