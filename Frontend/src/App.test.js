// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


import React from "react";
import { render } from 'react-testing-library'

import App from './App'
 it('snappshot testing', () => {
   const component = render( <App /> ).getByTestId('app-test');
    expect(component).toMatchSnapshot();
 });