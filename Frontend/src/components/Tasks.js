import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { LIST_ITEMS } from '../App'

const DELETE_TASK = gql`
  mutation DELETE_TASK($id: ID!) {
    deleteTodo(id: $id) {
      id
      task
    }
  }
`

class Tasks extends Component {
  render() {
    return (
          <div className="w-50 mx-auto">
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center py-3 px-4 rounded-0">
                <span className="lead font-weight-normal" data-test="task">{this.props.task.task}</span>
                <Mutation mutation={DELETE_TASK}>
                {( deleteTodo ) => {
                  return (
                    <button className="close" aria-label="Close" onClick={ async() => {
                      await deleteTodo({
                      variables: {
                        id: this.props.task.id
                      },
                      refetchQueries: [{
                        query: LIST_ITEMS
                      }],                       
                    });
                    }}>
                      <span aria-hidden="true"  className="text-dark font-weight-bold" data-testid="deleteTask">&times;</span>
                    </button>
                  )
                }}
                </Mutation>
              </li>
            </ul>
          </div>
    );
  }
}

export default Tasks;