import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {addPostState, state, updateTextForTextArea} from "./Components/Redux/State";



test('renders learn react link', () => {
  render(<App state={state} addPost={addPostState} changeTextArea={updateTextForTextArea}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
