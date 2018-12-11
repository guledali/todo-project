import React, { Component } from 'react';

import './App.css';
import Form from './components/Form';
import Tasks from './components/Tasks';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const LIST_ITEMS = gql`
  query LIST_ITEMS {
    tasks {
      id
      task
    }
  }
`

class App extends Component {
  render() {
    return (
      <div className="screen">
        <nav className="bg-primary h-10 shadow">
        <div className="pb-3">
              <h1 className="display-2 text-center pt-10 font-weight-normal text-primary" >Todo</h1>
              </div>
                <Form />
                <div className="mt-5" data-test="small">
                  <Query query={LIST_ITEMS}>
                  {({data, error, loading}) => {
                    if(error) return <p>{error.message}</p>
                    if(loading) return <p>loading...</p>
                    return data.tasks.map(task => <Tasks key={task.id} task={task} />)
                  }}
                  </Query>
                </div>
        </nav>
      </div>
    );
  }
}

export default App;
