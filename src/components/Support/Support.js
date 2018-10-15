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

  submit = (event) => {
    if (this.state.support < 1 || this.state.support > 5) {
      event.preventDefault();
      alert('Please enter a value between 1 and 5');
      return;
    }
    this.props.dispatch({
      type: 'ADD_SUPPORT',
      payload: this.state.support,
    })
  }

  componentDidMount() {
    document.getElementById('progressBar').value = '50';
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="cardContentParent">
            <div className="cardContentChild">
              <h4 className="cardQuestion">How well are you being supported?</h4>
              <input autoFocus type="number" placeholder="1 - 5" value={this.state.support} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="cardFooter">
            <Link to='/4' onClick={this.submit} className="nextViewButton navButton">Next</Link>
          </div>
        </div>
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(Support);