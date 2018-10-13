import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Admin extends Component {

  state = {
    feedbackList: [],
  };

  getFeedback = () => {
    axios.get('/feedback')
      .then((response) => {
        console.log('Back from GET with', response);
        this.setState({feedbackList: response.data})
      })
      .catch(error=>console.log('Error getting feedback', error));
  }

  deleteFeedback = (id) => {
    axios({
      method: 'DELETE',
      url: '/feedback',
      params: {
        id: id,
      }
    })
      .then(() => {
        console.log('Item deleted');
        this.getFeedback();
      })
      .catch(error=>console.log('Error deleting item', error));
  }

  componentDidMount() {
    this.getFeedback();
  }

  render() {
    return (
      <div>
        <h2>Admin Component</h2>
        <table>
          <thead>
            <tr>
              <th>Feeling</th>
              <th>Comprehension</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.feedbackList.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.feeling}</td>
                  <td>{item.understanding}</td>
                  <td>{item.support}</td>
                  <td>{item.comments}</td>
                  <td><button onClick={() => this.deleteFeedback(item.id)}>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(Admin);