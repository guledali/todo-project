import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { LIST_ITEMS } from '../App'

const CREATE_TASK = gql`
  mutation CREATE_TASK($task: String!) {
    createTodo(task: $task) {
      id
      task
    }
  }
`

class Form extends Component {
  state = {
    text: 'Im working'
  }

  handleChange = (e) => {
    this.setState({
      text: e.currentTarget.value
    });
  };


  render() {
    return (
      <Mutation mutation={CREATE_TASK} variables={{
        task: this.state.text
      }}
      refetchQueries={() => {
          return [{
              query: LIST_ITEMS
          }];
      }}
      >
      {(createTodo) => {
        return (
          <form className="mt-2" onSubmit={ e => {
            e.preventDefault();
            createTodo();
            e.currentTarget.reset();
          }}>
          <div className="form-row align-items-center">
            <div className="col-5 offset-3">
            <p className="custom-size text-dark">Task</p>
              <input type="text" className="form-control" id="inlineFormInput" placeholder="Add your task"  onChange={this.handleChange} data-testid="inputForm"/>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary btn-lg m25 w-100" data-testid="submitButton">Submit</button>
            </div>
          </div>
        </form>
        )
      }}
      </Mutation>
    );
  }
}

export default Form;