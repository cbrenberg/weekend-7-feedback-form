import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Support extends Component {

  state = {
    support: '',
  }

  handleChange = (event) => {
    this.setState({
      support: event.target.value,
    })
  }

  submit = () => {
    this.props.dispatch({
      type: 'ADD_SUPPORT',
      payload: this.state.support,
    })
  }

  render() {
    return (
      <div>
        <h2>Support Component</h2>
        <div className="card">
          <div className="cardContentParent">
            <div className="cardContentChild">
              <h4 className="cardQuestion">How well are you being supported?</h4>
              <input autofocus type="number" placeholder="1 - 5" value={this.state.support} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="cardFooter">
            <Link to='/4' onClick={this.submit} className="nextViewButton">Next</Link>
          </div>
        </div>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(Support);