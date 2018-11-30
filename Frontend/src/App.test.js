import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { render } from 'react-testing-library'

import { LIST_ITEMS } from './App';
import App from './App'



it('snappshot testing', () => {
  const dogMock = {
    request: {
      query: LIST_ITEMS 
    },
    result: {
      "data": {
        "tasks": [
          {
            "id": "cjoo1eda2jqta0911z90a4o5o",
            "task": "Im sleeping"
          }
        ]
      }
    },
  };

  const component = render(
    <MockedProvider mocks={[dogMock]} addTypename={false}>
      <App />
    </MockedProvider>,
  ).getByTestId('app-test');


    expect(component).toMatchSnapshot();


});