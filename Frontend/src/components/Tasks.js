import React, { Component } from 'react';
import { request } from 'graphql-request'

class Tasks extends Component {
  handleDelete = async () => {
    const endpoint = 'https://my-app-nkefnbuovn.now.sh'

    const mutation = `
    mutation DELETE_TASK($id: ID!) {
      deleteTodo(id: $id) {
        id
        task
      }
    }  
  `
    const variables = {
      id: this.props.task.id
    }

    const data = await request(endpoint, mutation, variables)
    console.log(JSON.stringify(data, undefined, 2))
    window.location.reload();
  }
  render() {
    return (
      <div className="w-50 mx-auto">
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center py-3 px-4 rounded-0">
            <span className="lead font-weight-normal">{this.props.task.task}</span>
            <button className="close" aria-label="Close">
              <span aria-hidden="true" className="text-dark font-weight-bold" onClick={this.handleDelete}  id="deleteTask">&times;</span>
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Tasks;