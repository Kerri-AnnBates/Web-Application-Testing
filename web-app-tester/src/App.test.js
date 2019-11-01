import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('it displays strike button', () => {
  const {getAllByTestId} = render(<App />);
  getAllByTestId('strike');
});

test('it displays ball button', () => {
  const {getAllByTestId} = render(<App />);
  getAllByTestId('ball');
});

test('it displays a foul button', () => {
  const {getAllByTestId} = render(<App />);
  getAllByTestId('foul');
});

test('it displays a hit button', () => {
  const {getAllByTestId} = render(<App />);
  getAllByTestId('hit');
});

test('it displays Strike count', () => {
  const {getByText} = render(<App />);
  getByText(/strike count/i);
})

test('it displays Ball count', () => {
  const {getByText} = render(<App />);
  getByText(/ball count/i);
})
