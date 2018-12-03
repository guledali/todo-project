import React, { Component } from 'react';
import { request } from 'graphql-request'

class Form extends Component {
  state = {
    text: ""
  }
  handleChange = (e) => {
    this.setState({
      text: e.currentTarget.value
    })
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = 'https://my-app-nkefnbuovn.now.sh'

    const mutation = `
    mutation createTodo($task: String!) {
      createTodo(task: $task) {
        id
        task
      }
    }    
  `
    const variables = {
      task: this.state.text
    }

    const data = await request(endpoint, mutation, variables)
    console.log(JSON.stringify(data, undefined, 2))
    window.location.reload();
  }

  render() {
    return (
      <form className="mt-2" onSubmit={this.handleSubmit}>
        <div className="form-row align-items-center">
          <div className="col-5 offset-3">
            <p className="custom-size text-dark">Task</p>
            <input type="text" className="form-control" id="inlineFormInput" placeholder="Add your task" onChange={this.handleChange} data-testid="inputForm" />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary btn-lg m25 w-100" id="submitButton">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;