import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {store} from "./Components/Redux/State";



test('renders learn react link', () => {
  render(<App state={store._state} addPost={store.addPostState} changeTextArea={store.updateTextForTextArea}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
