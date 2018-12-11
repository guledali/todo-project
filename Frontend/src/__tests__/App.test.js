import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import App, { LIST_ITEMS } from '../App';
import { MockedProvider } from 'react-apollo/test-utils';


describe('<App/>', () => {
  it('renders with data', async() => {
    const mocks = [{
      request: { query: LIST_ITEMS },
        result: {  
        "data": {
          "tasks": [
            {
              "__typename": "Todo",
              "id": "cjp43njwfybxt0a03dsjcba8w",
              "task": "drinking"
            },
            {
              "__typename": "Todo",
              "id": "cjp43nqesybzw0a03bv91il7k",
              "task": "sleeping"
            },
          ]
        } 
      }
    }];
  
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    );
    await wait()
    wrapper.update()
    // console.log(wrapper.debug())
      const task = wrapper.find('[data-test="task"]');
      // console.log(task.debug());
      expect(task.contains('drinking')).toEqual(true);
      expect(task.contains('sleeping')).toEqual(true);
  });

  it('loading data', () => {
    const mocks = [{
      request: { query: LIST_ITEMS },
        result: {  
        "data": {
          "tasks": [
            {
              "__typename": "Todo",
              "id": "cjp43njwfybxt0a03dsjcba8w",
              "task": "drinking"
            },
            {
              "__typename": "Todo",
              "id": "cjp43nqesybzw0a03bv91il7k",
              "task": "sleeping"
            },
          ]
        } 
      }
    }];
  
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    );
    wait()
    wrapper.update()
      // console.log(wrapper.debug());
      expect(wrapper.text()).toContain("loading...");
  });

  it('display errros', async() => {
    const mocks = [{
      request: { query: LIST_ITEMS },
      result: {
        errors: [{ message: 'Items Not Found!' }],
      },
    }];
  
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    );
    await wait()
    wrapper.update()
    console.log(wrapper.debug());
    expect(wrapper.text()).toContain("GraphQL error: Items Not Found!");
  });
})