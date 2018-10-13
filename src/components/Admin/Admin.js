import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './Admin.css'

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

        <ReactTable
          data={this.state.feedbackList}
          columns={[
            {
              Header: "Feeling",
              accessor: "feeling",
            },
            {
              Header: "Comprehension",
              accessor: "understanding",
            },
            {
              Header: "Support",
              accessor: "support",
            },
            {
              Header: "Comments",
              accessor: "comments",
            },
            {
              Header: "Delete",
              accessor: "id",
              Cell: row => (
                <button onClick={() => this.deleteFeedback(row.value)}>Delete</button>
              )
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
          />

        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(Admin);