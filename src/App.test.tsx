import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {addPostState, state} from "./Components/Redux/State";



test('renders learn react link', () => {
  render(<App state={state} addPost={addPostState} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
