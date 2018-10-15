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
        this.setState({ feedbackList: response.data })
      })
      .catch(error => console.log('Error getting feedback', error));
  }

  deleteFeedback = (id) => {
    //alert user prior to deleting data
    if (window.confirm('Are you sure? This action cannot be undone.')) {
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
        .catch(error => console.log('Error deleting item', error));
    } else {
      return;
    };
  }

  componentDidMount() {
    //populate table on component mount
    this.getFeedback();
  }

  render() {
    return (
      <div>
        <h2>Feedback Results</h2>

        <ReactTable
          data={this.state.feedbackList}
          columns={[
            {
              Header: "Feeling",
              accessor: "feeling",
              width: 150,
            },
            {
              Header: "Comprehension",
              accessor: "understanding",
              width: 150,
            },
            {
              Header: "Support",
              accessor: "support",
              width: 150,
            },
            {
              Header: "Comments",
              accessor: "comments",
              style: { 'white-space': 'unset' },
              minWidth: 500,
            },
            {
              Header: "Delete",
              accessor: "id",
              Cell: row => (
                <button className="deleteButton" onClick={() => this.deleteFeedback(row.value)}>Delete</button>
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