import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Confirmation extends Component {

  clearState = () => {
    this.props.dispatch({
      type: 'CLEAR_STATE',
      payload: {},
    })
  }


  componentDidMount() {
    axios({
      method: 'POST', 
      url: '/feedback',
      data: this.props.feedbackItem,
    }).then((response) => {
      console.log('Feedback Created', response)
      this.clearState();
    }).catch(error => {
      console.log('Error creating feedback', error);
    })
  }

  render() {
    return (
      <div>
        <h2>Confirmation Component</h2>
        <div className="card">
          <div className="cardContentParent">
            <div className="cardContentChild">
              <h4 className="cardQuestion">Thank You!</h4>
              <Link to='/' className="navButton">Leave New Feedback</Link>            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({feedbackItem}) => ({ feedbackItem });

export default connect(mapStateToProps)(Confirmation);