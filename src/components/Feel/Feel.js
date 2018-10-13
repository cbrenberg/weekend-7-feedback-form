import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Feel extends Component {

  state = {
    feeling: '',
  }

  handleChange = (event) => {
    this.setState({
      feeling: event.target.value,
    })
  }

  submitFeel = () => {
    this.props.dispatch({
      type: 'ADD_FEEL',
      payload: this.state.feeling,
    })
  }


  render() {
    return (
      <div>
        <h2>Feel Component</h2>
        <div className="card">
          <div className="cardContentParent">
            <div className="cardContentChild">
              <h4 className="cardQuestion">How are you feeling today?</h4>
              <input autofocus type="number" value={this.state.feeling} onChange={this.handleChange} placeholder="1 - 5" />
            </div>
          </div>
          <div className="cardFooter">
            <Link to='/2' onClick={this.submitFeel} className="nextViewButton">Next</Link>
          </div>
        </div>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(Feel);