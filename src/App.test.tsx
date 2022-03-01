import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {messageType, usersType} from "./index";

let users: Array<usersType> = [
  {id: 1, name: 'Andrey'},
  {id: 2, name: 'Sveta'},
  {id: 3, name: 'Nikolay'},
  {id: 4, name: 'Petr'},
  {id: 5, name: 'Saveliy'},
  {id: 6, name: 'Pavel'}
]
let message: Array<messageType> = [
  {id: 1, message: 'Hello'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'What new?'},
  {id: 4, message: 'What happening?'},
  {id: 5, message: 'Yo!'},
  {id: 6, message: 'Yo!'}
]

test('renders learn react link', () => {
  render(<App message={message} users={users} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
