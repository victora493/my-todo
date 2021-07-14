import React from 'react';

const TodoContext = React.createContext({
  todos: [],
  totalAmount: 0,
  toggleMarkAsDone: (item) => {},
  toggleMarkAsImportant: (item) => {},
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default TodoContext;