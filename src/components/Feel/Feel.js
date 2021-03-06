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

  submitFeel = (event) => {
    //stop form progression if not between 1 and 5
    if (this.state.feeling < 1 || this.state.feeling > 5) {
      //stop link in its tracks
      event.preventDefault();
      alert('Please enter a value between 1 and 5');
      return;
    }
    this.props.dispatch({
      type: 'ADD_FEEL',
      payload: this.state.feeling,
    })
  }

  componentDidMount() {
    document.getElementById('progressBar').value = '0';
  }


  render() {
    return (
      <div>
        <div className="card">
          <div className="cardContentParent">
            <div className="cardContentChild">
              <h4 className="cardQuestion">How are you feeling today?</h4>
              <input required autoFocus type="number" value={this.state.feeling} onChange={this.handleChange} placeholder="1 - 5" />
            </div>
          </div>
          <div className="cardFooter">
            <Link to='/2' onClick={this.submitFeel} className="nextViewButton navButton">Next</Link>
          </div>
        </div>
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}

      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(Feel);