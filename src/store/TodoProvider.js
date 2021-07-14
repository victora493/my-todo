import { useReducer } from 'react';

import TodoContext from './todo-context';

const defaultTodoState = {
  items: [],
  totalAmount: 0,
};

const todoReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newItem = {
        id: new Date.now(),
        text: action.itemText,
        completed: false
    }

    const updatedItems = [...state.items, newItem];
 
    const updatedTotalAmount = updatedItems.length;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    const updatedItems = state.items.filter(item => item.id !== action.id);

    const updatedTotalAmount = updatedItems.length;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  return defaultTodoState;
};

const TodoProvider = (props) => {
    const [todoState, dispatchTodoAction] = useReducer(
        todoReducer,
        defaultTodoState
    );

    const toggleMarkAsDone = (id) => {
        dispatchTodoAction({ type: 'TOGGLE_DONE', id });
    }

    const toggleMarkAsImportant = (id) => {
        dispatchTodoAction({ type: 'TOGGLE_IMPORTANT', id });
    }
    
    const addItem = (itemText) => {
        dispatchTodoAction({ type: 'ADD_ITEM', itemText });
    }
    
    const removeItem = (id) => {
        dispatchTodoAction({ type: 'REMOVE_ITEM', id });
    }

    const todoContext = {
        items: todoState.items,
        totalAmount: todoState.totalAmount,
        toggleMarkAsDone,
        toggleMarkAsImportant,
        addItem,
        removeItem,
    };

    return (
        <TodoContext.Provider value={todoContext}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;