import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Understand extends Component {

  state = {
    understanding: '',
  }

  handleChange = (event) => {
    this.setState({
      understanding: event.target.value,
    })
  }

  submit = (event) => {
    if (this.state.understanding < 1 || this.state.understanding > 5) {
      event.preventDefault();
      alert('Please enter a value between 1 and 5');
      return;
    }
    this.props.dispatch({
      type: 'ADD_UNDERSTAND',
      payload: this.state.understanding,
    })
  }

  componentDidMount() {
    document.getElementById('progressBar').value = '25';
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="cardContentParent">
            <div className="cardContentChild">
              <h4 className="cardQuestion">How well did you understand today's content?</h4>
              <input autoFocus type="number" placeholder="1 - 5" value={this.state.understanding} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="cardFooter">
            <Link to='/3' onClick={this.submit} className="nextViewButton navButton">Next</Link>
          </div>
        </div>
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}

      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(Understand);