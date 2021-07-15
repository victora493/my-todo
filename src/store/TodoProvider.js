import { useReducer, useEffect } from 'react';
import TodoContext from './todo-context';
import {saveState, loadState} from '../localStorage'

const defaultTodoState = {
  items: [],
  totalAmount: 0,
};

const todoReducer = (state, action) => {
  if (action.type === 'SET_STATE') {
    return action.state;
  }
  if (action.type === 'ADD_ITEM') {
    const newItem = {
        id: Date.now(),
        text: action.itemText,
        completed: false,
        important: false,
    }

    const updatedItems = [newItem, ...state.items];
 
    const updatedTotalAmount = updatedItems.length;

    const finalState = {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }
    saveState(finalState, 'todos')
    return finalState;
  }
  if (action.type === 'REMOVE_ITEM') {
    const updatedItems = state.items.filter(item => item.id !== action.id);

    const updatedTotalAmount = updatedItems.length;

    const finalState = {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }
    saveState(finalState, 'todos')
    return finalState;
  }
  if (action.type === 'TOGGLE_DONE') {
    const itemIdx = state.items.findIndex(item => item.id === action.id)
    const existingItem = {...state.items[itemIdx]}
    const updatedItem = {...existingItem, completed: !existingItem.completed}
    
    const updatedItems = [...state.items]
    updatedItems[itemIdx] = updatedItem;
 
    const updatedTotalAmount = updatedItems.length;

    const finalState = {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }
    saveState(finalState, 'todos')
    return finalState;
  }

  return defaultTodoState;
};

const TodoProvider = (props) => {
    const [todoState, dispatchTodoAction] = useReducer(
        todoReducer,
        defaultTodoState
    );

    useEffect(() => {
      const state = loadState('todos')
      setLoadedState(state)
    }, [])

    const setLoadedState = (state) => {
        dispatchTodoAction({ type: 'SET_STATE', state });
    }

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