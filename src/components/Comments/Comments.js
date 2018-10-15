import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Comments extends Component {
  state = {
    comments: '',
  }

  handleChange = (event) => {
    this.setState({
      comments: event.target.value,
    })
  }

  submit = () => {
    this.props.dispatch({
      type: 'ADD_COMMENTS',
      payload: this.state.comments,
    })
  }

  componentDidMount() {
    document.getElementById('progressBar').value = '75';
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="cardContentParent">
            <div className="cardContentChild">
              <h4 className="cardQuestion">Any comments you want to leave?</h4>
              <textarea autoFocus type="text" placeholder="Enter comments" value={this.state.comments} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="cardFooter">
            <Link to='/5' onClick={this.submit} className="nextViewButton navButton">Submit</Link>
          </div>
        </div>
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(Comments);