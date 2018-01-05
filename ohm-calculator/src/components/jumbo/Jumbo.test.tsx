import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Jumbo from './Jumbo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Jumbo />, div);
});