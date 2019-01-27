import React from 'react';
import ReactDOM from 'react-dom';
import ChampionsTable from './ChampionsTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChampionsTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});
