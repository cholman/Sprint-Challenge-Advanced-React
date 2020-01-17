import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react';
import App from './App';
import GetPlayers from './components/GetPlayers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders players component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GetPlayers />, div)
  ReactDOM.unmountComponentAtNode(div);
})

test('renders players text', () => {
  const { getByText } = rtl.render(<GetPlayers />);
  const displayElement = getByText(container, /Name/i);
  expect(displayElement).toBeInTheDocument();
})
