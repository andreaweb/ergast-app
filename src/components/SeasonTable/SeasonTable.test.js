import React from 'react';
import ReactDOM from 'react-dom';
import SeasonTable from './SeasonTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SeasonTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});
