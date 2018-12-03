import React, { Component } from 'react';
import { request } from 'graphql-request'
// import logo from './logo.svg';
import Tasks from './components/Tasks';
import './App.css';
import Form from './components/Form';


// {this.state.loading && (
//   <p>Loading...</p>
// )}

class App extends Component {
  state = {
    data: {
      "tasks": [
        {
          "id": "cjp43njwfybxt0a03dsjcba8w",
          "task": "drinking"
        }
      ]
    },
    loading: true
  }
  componentDidMount() {
    const query = `
      query LIST_ITEMS {
        tasks {
          id
          task
        }
      }
    `
    
    request('https://my-app-nkefnbuovn.now.sh', query).then(data =>
      this.setState({
        data: data,
        loading: false
      })
    )
  }
  render() {
    console.log(this.state)
    return (
      <div className="screen" data-testid="app-test">
        <nav className="bg-primary h-10 shadow">
          <div className="pb-3">
            <h1 className="display-2 text-center pt-10 font-weight-normal text-primary" >Todo</h1>
          </div>
          <Form />
          <div className="mt-5">
            {this.state.data.tasks.map((task) =>
              <Tasks key={task.id}
                task={task} />
            )}
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
