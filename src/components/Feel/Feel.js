import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Feel extends Component {
  render() {
    return (
      <div>
        <h2>Feel Component</h2>
        <div className="card">
          <div className="cardContentParent">
            <div className="cardContentChild">
              <h4 className="cardQuestion">How are you feeling today?</h4>
              <input type="number" placeholder="1 - 5" />
            </div>
          </div>
          <div className="cardFooter">
            <Link to='/2'>Next</Link>
          </div>
        </div>


      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(Feel);