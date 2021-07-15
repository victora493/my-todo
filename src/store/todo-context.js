import React from 'react';

const TodoContext = React.createContext({
  items: [],
  totalAmount: 0,
  toggleMarkAsDone: (id) => {},
  toggleMarkAsImportant: (id) => {},
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default TodoContext;